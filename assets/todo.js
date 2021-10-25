function createTag(tagName, html, className) {
    let $el = document.createElement(tagName);
    $el.innerHTML = html;
    $el.className = className || '';
    return $el;
}

function initTodoList() {
    let $todo = document.getElementById('todo');

    let $addBtn = $todo.querySelector('.add-btn');
    let $items = $todo.querySelector('.items');
    let $input = $todo.querySelector('input');

    $addBtn.addEventListener('click', function (e) {
        e.stopPropagation();

        if ($input.value === '') {
            alert('You must write something!!!!');
            return;
        }

        let $li = createTag('li', `<div class="item-text">${$input.value}</div>`, 'todo-item');

        let $done = createTag('div', '<img src="./assets/img/done.svg" alt="Done">', 'done');

        let $del = createTag('button', '<img src="./assets/img/clear.svg" alt="Clear">', 'delete');

        $del.addEventListener('click', function (e) {
            e.stopPropagation();
            $li.remove();
        });

        $li.prepend($done);

        $li.append($del);

        $items.appendChild($li);

        $li.addEventListener('click', function () {
            $li.classList.toggle('checked');
        });

        $input.value = '';
    });
}
// тест комент//
document.addEventListener('DOMContentLoaded', function () {
    initTodoList();
});
