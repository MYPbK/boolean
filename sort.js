my_string = prompt('Say me yes', '');

my_string = my_string.toLowerCase();
var arr = my_string.split(/[^\wа-яё]+/gi);

for (var i = 0; i < arr.length; i++) {
  alert( 'Ваши слова: ' + arr[i] );
}
