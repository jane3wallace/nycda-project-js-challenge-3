// JS Challenge #3 Week Seven Lecture 1 Homework
$(document).ready(function() {

	$(".num-form").submit( function (e) {
		e.preventDefault();
		displayValue();
	});

	function displayValue() {
		var inputValue = $("#input-value").val();
		var text = "Your number is "
		var outputPhrase = text + inputValue;
		if ($.isNumeric(inputValue)) {
			$("#output").text(outputPhrase);
		} else {
			$("#output").text("That's not a number, dude.");
		};
	};
});