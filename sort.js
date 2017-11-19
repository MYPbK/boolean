my_string = prompt('Say me yes', '');

my_string = my_string.toLowerCase();
var arr = my_string.split(/[^\wа-яё]+/gi);

for (i in arr) {
  alert( 'Ваши слова: ' + arr[i] );
}