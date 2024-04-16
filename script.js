const input = document.getElementById('text-input');
const button = document.querySelector('#check-btn');
const result = document.getElementById('result');


button.addEventListener('click', () => {
  if (input.value === '') {
    alert('Please input a value');
    return result.innerText = "";
  }
  const inputList = input.value.toLowerCase().split('').filter(letter => /^[a-z0-9]+$/.test(letter));
  const newList = [...inputList].reverse();
  if (JSON.stringify(inputList) === JSON.stringify(newList)) {
    result.innerText = `${input.value} is a palindrome`;
  } else {
    result.innerText = `${input.value} is not a palindrome`;
  }
  input.value = "";
})
