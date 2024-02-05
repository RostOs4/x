from flask import Flask, render_template, request, jsonify
import time
from config import config
import pickle
from config import true_words
import random

app = Flask(__name__)

@app.route('/', methods=['GET'])
def preview():
    return render_template('preview.html')

@app.route('/index/', methods=['GET'])
def index():
    try:
        level_up = request.args.get('level_up')
    except:
        level_up = '0'
    try:
        change_up = request.args.get('change_up')
    except:
        change_up = '0'
    if level_up == '1':
        config["level"] += 1
        config["change"] = 1

    elif change_up == '1':
        config["change"] += 1
    return render_template('index.html', level=config["level"], change=config["change"])

@app.route('/trophy/', methods=['GET'])
def trophy():
    return render_template('trophy.html', level=config["level"])

@app.route('/map/',  methods=['GET'])
def map():
    return render_template('map.html', level=config["level"], change=config["change"])

@app.route('/first_level/', methods=['GET'])
def  first_level():
    with open('words.pkl', 'rb') as f:
        words = pickle.load(f)
    return render_template('first_level.html', words=words, true_word = random.choice(true_words))

@app.route('/second_level/', methods=['GET'])
def  second_level():
    return render_template('second_level.html')

@app.route('/third_level/', methods=['GET'])
def  third_level():
    return render_template('third_level.html')

if __name__ == '__main__':
    app.run(debug=True)