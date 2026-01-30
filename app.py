"""
HiveBox API Application
This module contains the main endpoints for the HiveBox application.
"""
import os
import datetime
import requests
from flask import Flask, jsonify
from prometheus_flask_exporter import PrometheusMetrics

app = Flask(__name__)
# Initialize Prometheus Metrics (automatically adds /metrics endpoint)
metrics = PrometheusMetrics(app)

# SenseBox IDs to fetch data from
# Configurable via Environment Variable (comma separated)
DEFAULT_IDS = "5eba5fbad46fb8001b799786,5c21ff8f919bf8001adf2488,5ade1acf223bd80019a1011c"
SENSEBOX_IDS = os.environ.get("SENSEBOX_IDS", DEFAULT_IDS).split(",")

@app.route('/version')
def get_version():
    """Returns the current application version."""
    return jsonify({"version": "v0.0.1"})

@app.route('/temperature')
def get_temperature():
    """
    Calculates the average temperature from multiple SenseBoxes.
    Returns status based on the average value.
    """
    temperatures = []

    for box_id in SENSEBOX_IDS:
        # Clean whitespace just in case
        box_id = box_id.strip()
        try:
            response = requests.get(
                f"https://api.opensensemap.org/boxes/{box_id}",
                timeout=10
            )
            if response.status_code != 200:
                continue

            data = response.json()
            sensors = data.get('sensors', [])

            for sensor in sensors:
                if sensor['title'] == 'Temperature' and 'lastMeasurement' in sensor:
                    last_measurement = sensor['lastMeasurement']

                    created_at_str = last_measurement['createdAt']
                    created_at_str = created_at_str.replace('Z', '+00:00')
                    created_at = datetime.datetime.fromisoformat(created_at_str)

                    now = datetime.datetime.now(datetime.timezone.utc)
                    if (now - created_at).total_seconds() < 3600:
                        temperatures.append(float(last_measurement['value']))

                    break

        except (requests.RequestException, ValueError) as error:
            print(f"Error fetching data for box {box_id}: {error}")
            continue

    if not temperatures:
        return jsonify({"message": "No valid temperature data found"}), 404

    avg_temp = sum(temperatures) / len(temperatures)

    # Logic for status
    if avg_temp < 10:
        status = "Too Cold"
    elif 11 <= avg_temp <= 36:
        status = "Good"
    elif avg_temp >= 37:
        status = "Too Hot"
    else:
        status = "Good"

    return jsonify({
        "average_temperature": round(avg_temp, 2),
        "sensors_count": len(temperatures),
        "status": status
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
