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

function initArticleTitle() {
  // Используй
  // document.getElementById('some-id')
  // и свойство dom-элемента .innerText
  // тут пиши код

}

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM loaded');

  // Вызов функции инициализации меню
  initMenu();

  // Вызов функции инициализации заголовка статьи
  initArticleTitle();
});
