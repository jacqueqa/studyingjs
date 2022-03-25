<meta charset="UTF-8">

<input/>
<button>Can you guess the number? </button>

<script>
	var numbers = [4, 8, 9, 5];

	var input = document.querySelector("input");
	input.focus();
	
	function verify() {
		var find = false;

		for(var i = 0; i < numbers.length; i++) {
			if(input.value == numbers[i]) {
				alert("Right Choice :D");
				find = true;
				break;
			}	
		}

		if (find == false) {
			alert("You are wrong =(");
		}

		input.value = "";
		input.focus(); 
	}
	
	var button = document.querySelector("button");

	button.onclick = verify;

</script>
