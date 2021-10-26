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

let song = {
    musician: "Morgernshtern",
    song: "Аристократ",
    toplist: "first",
    scores: 10
};
console.log(song);

if (song.scores > 6) {
    let quality = "top";
    console.log(quality);
} else {
    let quality = "poop";
    console.log(quality);
};

let song2 = {
    musician: "Скриптонит",
    song: "Положение",
    scores: 3
};
console.log(song2);

if (song2.scores > 6) {
    let quality2 = "top";
    console.log(quality2);
} else {
    let quality2 = "poop";
    console.log(quality2);
}

const myNumber = 42 

console.log(localStorage.getItem('number'));
localStorage.setItem('number', myNumber);

localStorage.setItem('song' , song);

// тест комент//
// test comment 2
document.addEventListener('DOMContentLoaded', function () {
    initTodoList();
});


