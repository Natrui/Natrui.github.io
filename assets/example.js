function createTag(tagName, text) {
  const $el = document.createElement(tagName);
  $el.innerText = text;
  return $el;
}

function initTodoList() {
  const $todo = document.getElementById('todo');

  const $addBtn = $todo.querySelector('.add-btn');
  const $items = $todo.querySelector('.items');
  const $input = $todo.querySelector('input');

  $addBtn.addEventListener('click', function (e) {
    e.stopPropagation();

    if ($input.value === '') {
      alert('You must write something!!!!');
      return;
    }

    const $li = createTag('li', $input.value);

    let $del = createTag('button', 'Delete');

    $del.addEventListener('click', function (e) {
      e.stopPropagation();
      $li.remove();
    });

    $li.appendChild($del);

    $items.appendChild($li);

    $input.value = '';
  });
}


document.addEventListener('DOMContentLoaded', function () {
  initTodoList();
});
