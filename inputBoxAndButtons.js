<meta charset="UTF-8">

<input/>
<button>Can you guess the number? </button>

<script>
	let number = Math.round(Math.random()*10);
	var input = document.querySelector("input");
	
	function verify() {

	if(input.value == number) {
		alert("Right Choice :D");
	}
	else {
		alert("You are wrong =(")
	}
	input.value = "";
	input.focus(); 
}
	var button = document.querySelector("button");

	button.onclick = verify;

</script>
