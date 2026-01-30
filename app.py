"""
HiveBox API Application
This module contains the main endpoints for the HiveBox application.
"""
import datetime
import requests
from flask import Flask, jsonify

app = Flask(__name__)

# SenseBox IDs to fetch data from
SENSEBOX_IDS = [
    "5eba5fbad46fb8001b799786",
    "5c21ff8f919bf8001adf2488",
    "5ade1acf223bd80019a1011c"
]

@app.route('/version')
def get_version():
    """Returns the current application version."""
    return jsonify({"version": "v0.0.1"})

@app.route('/temperature')
def get_temperature():
    """
    Calculates the average temperature from multiple SenseBoxes.
    Only considers measurements younger than 1 hour.
    """
    temperatures = []

    for box_id in SENSEBOX_IDS:
        try:
            # Fetch box data from openSenseMap API with timeout
            response = requests.get(
                f"https://api.opensensemap.org/boxes/{box_id}",
                timeout=10
            )
            if response.status_code != 200:
                continue

            data = response.json()
            sensors = data.get('sensors', [])

            # Find the temperature sensor
            for sensor in sensors:
                if sensor['title'] == 'Temperature' and 'lastMeasurement' in sensor:
                    last_measurement = sensor['lastMeasurement']

                    # Check time validity (must be < 1 hour old)
                    created_at_str = last_measurement['createdAt']
                    # Remove 'Z' if present to parse ISO format correctly
                    created_at_str = created_at_str.replace('Z', '+00:00')
                    created_at = datetime.datetime.fromisoformat(created_at_str)

                    # Calculate time difference using timezone-aware UTC current time
                    now = datetime.datetime.now(datetime.timezone.utc)
                    if (now - created_at).total_seconds() < 3600:
                        temperatures.append(float(last_measurement['value']))

                    break # Stop looking for sensors in this box once temperature is found

        except (requests.RequestException, ValueError) as error:
            print(f"Error fetching data for box {box_id}: {error}")
            continue

    if not temperatures:
        return jsonify({"message": "No valid temperature data found"}), 404

    avg_temp = sum(temperatures) / len(temperatures)
    return jsonify({
        "average_temperature": round(avg_temp, 2),
        "sensors_count": len(temperatures)
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
