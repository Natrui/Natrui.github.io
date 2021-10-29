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
    var $input = $todo.querySelector('input');

    $addBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        
        if ($input.value === '') {
            alert('You must write something!!!!');
            return;
        }
/* Крч чел делает вот это, 'nj e,bdftn ryjgre addBtn .Я понял это как сохранять последний ли который был написан(Он сохраняеться в аппликатион в локал сторедже). Он сохраняеться если убрать все это и 34 строка
        let tdMask = 'tdL_';
        $todo.children().each(function(index , ef){            (и в целом вот эта конструкция не понятна. По сути тут я пробегаюсь по каждому елементу ли
            var jefId = $(ef).attr('data-itemid').slice(4);                   присваеваю ему атрибут  и убираю 4 символа('tdL_')
            if(jefId > nId)                                                
            nId = jefId;                                                                                                )
        });

        nId++;
        var nId = 0 ;
        attr('data-itemid' , tdMask+nId);

        localStorage.setItem(tdMask+nId , $input.value); вот тут поменять tdmask+ nID на просто '' любой ключ 
        но как сделать так что бы он сохранял все не понятно. мне каежться что я куда то не туда поставил 32 строку 
*/
      
        var $li = createTag('li', `<div class="item-text">${$input.value}</div>`, 'todo-item');

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

localStorage.setItem('song2' , JSON.stringify(song2));

// тест комент//
// test comment 2
document.addEventListener('DOMContentLoaded', function () {
    initTodoList();
});


