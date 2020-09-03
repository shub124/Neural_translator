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

var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');
//const p=document.getElementById('input1');
// Trigger photo take
document.getElementById("button").addEventListener("click", function() {
	context.drawImage(video, 0, 0, 240, 320);
    
  var imgURL = canvas.toDataURL("image/png");
  console.log(imgURL);
  $.ajax({
    type: "POST",
    url: "/uploader", //I have doubt about this url, not sure if something specific must come before "/take_pic"
    data:{ data:imgURL},
    success: function(data) {
      if (data.success) {
        alert('Your file was successfully uploaded!');
      } else {
        alert('There was an error uploading your file!');
      }
    },
    error: function(data) {
      alert('There was an error uploading your file!');
    }
  }).done(function() {
    console.log("Sent");
  });
 
});


