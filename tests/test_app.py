"""
Unit and Integration tests for the HiveBox application.
"""
import pytest
import requests_mock
from app import app, SENSEBOX_IDS

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

def test_metrics_endpoint(client):
    """Test that the /metrics endpoint exists and returns prometheus data."""
    response = client.get('/metrics')
    assert response.status_code == 200
    # Check for a standard metric exposed by the library
    assert b"flask_http_request_total" in response.data

def test_temperature_status_cold(client):
    """Test status logic: Too Cold (<10)."""
    with requests_mock.Mocker() as m:
        # Mock API to return a low temperature (5.0)
        m.get(requests_mock.ANY, json={
            "sensors": [{"title": "Temperature", "lastMeasurement": {
                "value": "5.0", 
                "createdAt": "2099-01-01T00:00:00.000Z" # Future date is valid
            }}]
        })
        response = client.get('/temperature')
        assert response.status_code == 200
        assert response.json['average_temperature'] == 5.0
        assert response.json['status'] == "Too Cold"

def test_temperature_status_good(client):
    """Test status logic: Good (11-36)."""
    with requests_mock.Mocker() as m:
        # Mock API to return a good temperature (25.0)
        m.get(requests_mock.ANY, json={
            "sensors": [{"title": "Temperature", "lastMeasurement": {
                "value": "25.0", 
                "createdAt": "2099-01-01T00:00:00.000Z"
            }}]
        })
        response = client.get('/temperature')
        assert response.status_code == 200
        assert response.json['status'] == "Good"

def test_temperature_status_hot(client):
    """Test status logic: Too Hot (>37)."""
    with requests_mock.Mocker() as m:
        # Mock API to return a high temperature (40.0)
        m.get(requests_mock.ANY, json={
            "sensors": [{"title": "Temperature", "lastMeasurement": {
                "value": "40.0", 
                "createdAt": "2099-01-01T00:00:00.000Z"
            }}]
        })
        response = client.get('/temperature')
        assert response.status_code == 200
        assert response.json['status'] == "Too Hot"

def test_env_var_configuration():
    """Test that default SENSEBOX_IDS are loaded correctly as a list."""
    assert isinstance(SENSEBOX_IDS, list)
    assert len(SENSEBOX_IDS) > 0