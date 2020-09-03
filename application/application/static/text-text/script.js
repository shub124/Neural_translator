const output = () =>{

  const p=document.getElementById('input1');
  const d=document.getElementById('input2');
  var n=p.value;
  d.value=n;


}

function toText(){
	inputText = document.getElementById("input1").value;
	$.ajax({url: "api/text_text?text="+inputText, success: function(result){
	    document.getElementById("input1").value = result;
	}});
}

function toSpeech(){
	inputText = document.getElementById("input2").value;
	$.ajax({url: "api/text_text?text="+inputText, success: function(result){
	    document.getElementById("input2").value = result;
	}});
}
