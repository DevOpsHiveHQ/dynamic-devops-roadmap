"""
Unit tests for the HiveBox application.
"""
import pytest
import requests_mock
from app import app

@pytest.fixture
def client():
    """Configures the application for testing."""
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_version_endpoint(client):
    """Test the /version endpoint returns correct data."""
    response = client.get('/version')
    assert response.status_code == 200
    assert response.json == {"version": "v0.0.1"}

def test_temperature_endpoint_success(client):
    """
    Test calculating average temperature.
    Scenario:
    - Box 1: 20 degrees (valid time)
    - Box 2: 30 degrees (valid time)
    - Box 3: 100 degrees (OLD time - should be ignored)
    Expected Average: (20 + 30) / 2 = 25.0
    """
    # Mock data resembling OpenSenseMap API response
    # Using a fake 'recent' timestamp (e.g., current time would be handled by logic,
    # but for simplicity in mocking, we ensure the logic accepts it).
    # NOTE: Since our app calculates time difference relative to 'now',
    # we need to be careful. However, requests_mock just returns what we define.
    # To make this robust without complex time mocking, we will rely on the app's logic
    # correctly interpreting ISO strings.
    
    # We will simply mock the requests.get to return specific JSON for each ID
    pass 
    # To implement this properly in a simple way for you:
    # We will verify the logic handles the API calls.
    
    with requests_mock.Mocker() as m:
        # Mocking responses for the 3 known IDs
        # Valid sensor 1
        m.get("https://api.opensensemap.org/boxes/5eba5fbad46fb8001b799786", json={
            "sensors": [{
                "title": "Temperature",
                "lastMeasurement": {
                    "value": "20.0",
                    "createdAt": "2099-01-01T00:00:00.000Z" # Future date is always < 1 hour old relative to now
                }
            }]
        })
        
        # Valid sensor 2
        m.get("https://api.opensensemap.org/boxes/5c21ff8f919bf8001adf2488", json={
            "sensors": [{
                "title": "Temperature",
                "lastMeasurement": {
                    "value": "30.0",
                    "createdAt": "2099-01-01T00:00:00.000Z"
                }
            }]
        })

        # Invalid sensor (Old date)
        m.get("https://api.opensensemap.org/boxes/5ade1acf223bd80019a1011c", json={
            "sensors": [{
                "title": "Temperature",
                "lastMeasurement": {
                    "value": "100.0",
                    "createdAt": "2000-01-01T00:00:00.000Z" # Very old date
                }
            }]
        })

        response = client.get('/temperature')
        assert response.status_code == 200
        data = response.json
        assert data['sensors_count'] == 2
        assert data['average_temperature'] == 25.0

def test_temperature_no_valid_data(client):
    """Test endpoint behavior when no valid data is found."""
    with requests_mock.Mocker() as m:
        # Mock all calls to return 404 or empty data
        m.get(requests_mock.ANY, status_code=404)

        response = client.get('/temperature')
        assert response.status_code == 404
        assert "No valid temperature data found" in response.json['message']