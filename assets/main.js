function $id(id) {
  return document.getElementById(id);
}

// Объявление функции
function initMenu() {
  let links = document.querySelectorAll('#navbar > div');

  let currentPath = '.' + location.pathname;

  // Для каждого элемента списка
  links.forEach(function (link) {
    let a = link.firstElementChild;

    let href = a.getAttribute('href');

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
  let elem = document.getElementById("para1");
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

function initCalculator() {
  function calculate() {
    let result;

    let num1 = Number($id('num1').value);
    let num2 = Number($id('num2').value);
    let op = $id('operation').value;

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

    $id("calc-result").innerText = result;

  }

  function clear() {
    let num1 = $id('num1');
    let num2 = $id('num2');
    num1.value = '';
    num2.value = '';
  }

  let clearbtn = $id('clearbtn')

  if (clearbtn) {
    clearbtn.addEventListener('click', clear)
  }

  let calculateBtn = $id('calculate-btn');

  if (calculateBtn) {
    calculateBtn.addEventListener('click', calculate);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Вызов функции инициализации меню
  initMenu();

  // Вызов функции инициализации заголовка статьи
  initArticleTitle();

  // Инициализируем калькулятор
  initCalculator();
});
