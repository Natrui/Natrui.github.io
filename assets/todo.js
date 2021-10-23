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


        let $done = createTag('button' , 'done');

        let $del = createTag('button', 'delete');
        $del.addEventListener('click', function (e) {
            e.stopPropagation();
            $li.remove();
        });

        $del.className = "delete"

        $done.className = "done"

        $li.className = "li-style"

        
        $done.innerHTML = '<img src  ="./assets/img/done.svg">';
        
        $del.innerHTML = '<img src  ="./assets/img/clear.svg">' ;

        $li.appendChild($done);

        $li.appendChild($del);

        $items.appendChild($li);

        $input.value = '';
    });

    let $list = document.querySelector('ul')
        $list.addEventListener('click' , function(l) {
            console.log(l.target.tagName)
            if (l.target.tagName === 'LI') {
                l.target.classList.toggle('checked')
            }
            
        }, false)

}

document.addEventListener('DOMContentLoaded', function () {
    initTodoList();
});