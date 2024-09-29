const textInput = document.getElementById('text-input');
const result = document.getElementById('result');
const pattern = /[^a-zA-Z0-9]+/g;

document.addEventListener('click', check);

function check() {
  let array;
  if (!textInput.value) {
    alert('Please input a value');
  } else {
    const text = textInput.value.replace(pattern, '').toUpperCase();
    const back = text.split('').reverse().join('');
    if (text === back) {
      result.innerText = `${textInput.value} is a palindrome`;
    } else {
      result.innerText = `${textInput.value} is not a palindrome`;
    }
  }
  textInput.value = null;
}
