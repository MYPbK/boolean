  function unique_symbols(text){
	unique_string = text.toLowerCase().split("").filter(function(elem, index, arr) { 
	return arr.indexOf(elem) == index }); 
	return unique_string; //если запятые подходят, то удали этот коммент, если нет, то исправлю код
	}