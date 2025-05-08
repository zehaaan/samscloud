# ON/OFF Button Web Application

A simple web application featuring a large ON/OFF button with API endpoints to check and toggle its state.

## Features

- Large, visually appealing ON/OFF button
- Real-time state updates
- REST API endpoints for state management
- Clean and modern UI

## API Endpoints

- `GET /api/state` - Get the current state of the button
- `POST /api/toggle` - Toggle the button state

## Setup

1. Install the required dependencies:
```bash
pip install -r requirements.txt
```

2. Run the application:
```bash
python app.py
```

3. Open your browser and navigate to `http://localhost:5000`

## API Usage

### Get Current State
```bash
curl http://localhost:5000/api/state
```

### Toggle State
```bash
curl -X POST http://localhost:5000/api/toggle
```

## Response Format

The API returns JSON responses in the following format:
```json
{
    "state": true/false
}
``` 