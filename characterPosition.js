function characterPosition(array){
  var letter = array.split('');
  var object = {};
  for(i = 0; i < letter.length; i++) {
    currentLetter = letter[i]; {
    if(object[currentLetter] === undefined) {
      object[currentLetter] = i.toString();
      console.log(object[currentLetter])
    }
    else {
      object[currentLetter] += ',' + i;

    }
    }
  }
return object;
}

console.log(characterPosition("less"));