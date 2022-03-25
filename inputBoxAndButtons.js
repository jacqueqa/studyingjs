<meta charset="UTF-8">

<input/>
<button>Can you guess the number? </button>

<script>
	const number = 5;
	var input = document.querySelector("input");
	
	function verify() {

	if(input.value == 5) {
		alert("Right Choice :D");
	}
	else {
		alert("You are wrong =( ")
	}
}
	var button = document.querySelector("button");

	button.onclick = verify;

</script>
