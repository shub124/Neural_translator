import re
import base64

from flask import Flask,render_template,jsonify,request

from flask_restplus import cors

from werkzeug import secure_filename
app=Flask(__name__)

@app.route('/')
def func():
	return render_template('index.html')
@cors.crossdomain(origin='*')
@app.route('/uploader', methods = ['POST'])
def upload_file():
   if request.method == 'POST':
      data=request.data.decode()
      with open("image.jpg","wb") as f:
      	imageStr= re.search(r'data:image/png;base64,(.*)',data).group(1)
      	f.write(base64.b64decode(imageStr))




      
      #f.save(secure_filename(f.filename))
      return 'file uploaded successfully', 200

if __name__=='__main__':
	app.run(debug=True)
