function addTextBox() {
  var inputBox = document.createElement('input');
  var nextLine = document.createElement('br');
  inputBox.appendChild(nextLine);
  inputBox.setAttribute('placeholder', 'List an option');
  inputBox.setAttribute('value', '');
  inputBox.setAttribute('class', 'option');
  var form = document.getElementById('form');
  form.appendChild(nextLine);
  form.appendChild(inputBox);
  resetResults();
}

function chooseRandom(min, max) {
  var inputs = document.getElementsByClassName('option');
  for (i = 0; i < inputs.length; i++) {
    var numberOfInputs = inputs.length;
  }
  min = 0;
  max = numberOfInputs;

  var paragraphs = document.getElementsByTagName('p').length;
  for (i = paragraphs; i < 1; i++) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    var chosenId = inputs[randomNumber].value;
    var newParagraph = document.createElement('p');
    newParagraph.setAttribute('id', 'result');
    document.body.appendChild(newParagraph);
    newParagraph.append(chosenId);
  }
}

// function resetForm(){
//   document.getElementById("form").reset();
// }

function resetResults() {
  var removeParagraph = document.getElementById('result');
  removeParagraph.parentNode.removeChild(removeParagraph);
}

function reset() {
  location.href = window.location;
}
