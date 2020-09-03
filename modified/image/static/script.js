var video = document.getElementById('video');

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
// var video = document.getElementById('video');
const p=document.getElementById('input1');
// Trigger photo take
document.getElementById("snap").addEventListener("click", function() {
	context.drawImage(video, 0, 0, 320, 240);	
  	p.value='hi';
  	let dataURL = context.getImageData(0,0,320,240);

	console.log(dataURL.data);

	// var op = document.getElementById('op');
	// var ctx = op.getContext('2d');

	// 	ctx.putImageData(dataURL,0,0);

	var XHTTPRequest = new XMLHttpRequest();
	path = "http://127.0.0.1:5000/uploader";
	XHTTPRequest.open("POST",path,true);
	//XHTTPRequest.setRequestHeader('Content-Type','application/json');
	data = canvas.toDataURL();
	console.log(data)
	XHTTPRequest.send(data);
	XHTTPRequest.onreadystatechange = function(err){
		if(XHTTPRequest.readyState == 4 && XHTTPRequest.status == 200){
			console.log("Done");
		}
		else{
			console.log(err);
		}

	}
});



