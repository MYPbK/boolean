function makeWords(text){
  return text.toLowerCase().split(/[^\wа-яё]+/gi)  
}