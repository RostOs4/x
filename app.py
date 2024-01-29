from flask import Flask, render_template, request, jsonify
from config import config
import time
app = Flask(__name__)

@app.route('/', methods=['GET'])
def preview():
    return render_template('preview.html')

@app.route('/index/', methods=['GET'])
def index():
    return render_template('index.html', level=config["level"], change=config["change"])

@app.route('/trophy/', methods=['GET'])
def trophy():
    return render_template('trophy.html', level=config["level"])

@app.route('/map/',  methods=['GET'])
def map():
    return render_template('map.html', level=config["level"], change=config["change"])


if __name__ == '__main__':
    app.run(debug=True)