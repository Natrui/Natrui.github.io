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

    $id("result").innerText = result;
  }

  function clear() {
    let num1 = $id('num1');
    let num2 = $id('num2');
    let result = $id('result');
    num1.value = '';
    num2.value = '';
    result.innerText = '';
  }

  let clearBtn = $id('clear-btn')

  if (clearBtn) {
    clearBtn.addEventListener('click', clear)
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
