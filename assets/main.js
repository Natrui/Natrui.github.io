// Объявление функции
function initMenu() {
  let links = document.querySelectorAll('#navbar > div');

  let currentPath = '.' + location.pathname;

  console.log('currentPath', currentPath);

  // Для каждого элемента списка
  links.forEach(function (link) {
    let a = link.firstElementChild;

    let href = a.getAttribute('href');

    console.log('a text content', a.innerText);

    if (currentPath === href) {
      link.classList.add('active');
      link.classList.remove('link');

      a.setAttribute('style', 'cursor: default');

      a.addEventListener('click', function (e) {
        e.preventDefault(); // отменить дефолтный эффект события
      })
    }
  });
}

function changeColor(newColor) {
  var elem = document.getElementById("para1");
  elem.style.color = newColor;
}

function sum(x, y) {  
  return x + y;
}
  let s = sum(1, 50);

function initArticleTitle() {
  let currentPath = '.' + location.pathname;

  document.querySelectorAll('#navbar > div').forEach(function (link) {
    let a = link.firstElementChild;
    
    let href = a.getAttribute('href');

    if (currentPath === href) { 
      document.getElementById('article-title').innerText = a.innerText;
    } 
  });
}

function testFunction() {
  let z = sum(23, 65);
  let a = 10;
  let a1 = 10 + 1;
  let a2 = a1 + 1;
  let a3 = a2 + 1 + sum(1, 4)
  let a4 = 1000 - 7;
  // console.log(s, z, a, a1, a2, a3, a4, sum, typeof sum, sum(sum(2, 0), sum(2, sum(45, 1))))
  // Используй
  // document.getElementById('some-id')
  // и свойство dom-элемента .innerText
  // тут пиши код

}

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM loaded');

  let i = sum(20, 1 + 1);
  console.log(i)
  // Вызов функции инициализации меню
  initMenu();




  // Вызов функции инициализации заголовка статьи
  initArticleTitle();
});
var op;
function func() {
  var result;
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }

}