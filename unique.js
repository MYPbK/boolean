  function unique_symbols(text){
	unique_string = text.toLowerCase().split("").filter(function(elem, index, arr) { 
	return arr.indexOf(elem) == index }); 
	return unique_string.join("");
	}
