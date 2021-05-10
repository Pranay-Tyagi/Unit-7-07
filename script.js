document.querySelector('button').addEventListener('click', function () {
  let num1 = document.querySelector('.first-num').value
  let num2 = document.querySelector('.second-num').value
  let answer = 0
  num1 = parseInt(num1)
  num2 = parseInt(num2)
  for (let counter = 0; counter < num1; counter++) {
    answer = answer + num2
  }
  alert(answer)
})
