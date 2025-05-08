from flask import Flask, render_template, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Global variable to store button state
button_state = False

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/state', methods=['GET'])
def get_state():
    return jsonify({'state': button_state})

@app.route('/api/toggle', methods=['POST'])
def toggle_state():
    global button_state
    button_state = not button_state
    return jsonify({'state': button_state})

if __name__ == '__main__':
    app.run(debug=True) 