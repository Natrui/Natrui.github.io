function createTag(tagName, text) {
    let $el = document.createElement(tagName);
    $el.innerText = text;
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

        let $li = createTag('li', $input.value);

        let $del = createTag('button', 'delete');
        $del.addEventListener('click', function (e) {
            e.stopPropagation();
            $li.remove();
        });

        button.className = "delete"

        $li.appendChild($del);

        $items.appendChild($li);

        $input.value = '';
    });
}


document.addEventListener('DOMContentLoaded', function () {
    initTodoList();
});