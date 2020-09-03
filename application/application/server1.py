from flask import Flask,render_template,jsonify,request
from werkzeug import secure_filename
from werkzeug.datastructures import ImmutableMultiDict
import base64
import re
import cv2
import numpy as np

app=Flask(__name__)


def convert_to_diff_text(text):
	print(text)
	converted_text = 'treek'
	return converted_text

@app.route('/')
def func():
	return render_template('index.html')

@app.route('/second')
def func_two():
	return render_template('second.html')

@app.route('/text_text')
def func_three():
	return render_template('text_text.html')

@app.route('/image_speech')
def func_four():
	return render_template('image_speech.html')

@app.route('/static/<path:path>')
def send_js(path):
	return send_from_directory('static', path)

@app.route('/api/text_text', methods = ['GET'])
def convert_text_to_text():

	args = request.args
	parsed_data = args.to_dict(flat=False)
	parsed_data = parsed_data['text'][0]
	print(parsed_data)
	converted_text = convert_to_diff_text(parsed_data)
	return converted_text

@app.route('/fill')
def fill_():
	if request.method=='POST':
		v=request.form['name'];
		file1=open("x.txt","w");
		file1.write(v);
	return jsonify(data)

@app.route('/uploader', methods = ['POST'])
def upload_file():
	if request.method == 'POST':
		print("hell")
		image_data = request.form.get("data").split(",")[1]
		
		with open("savedimage.png","wb") as fe:
			fe.write(base64.b64decode(image_data))
		return "saved_image"
	


		

if __name__=='__main__':
	app.run(debug=True)
