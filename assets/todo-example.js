function createTag(tagName, html, className) {
    let $el = document.createElement(tagName);
    $el.innerHTML = html;
    $el.className = className || '';
    return $el;
}

function pretty(obj) {
    return JSON.stringify(obj, null, 2);
}

function parseJson(json) {
    try {
        return JSON.parse(json);
    } catch (e) {
        console.log('Error:', e);
        return null;
    }
}

const app = {
    $el: null,
    state: {
        items: ['a', 'b', 'c']
    },
    init() {
        const stateJson = localStorage.getItem('todo-state');
        console.log('stateJson', stateJson);

        let state = parseJson(stateJson);

        if (state === null) {
            this.saveState();
        } else {
            this.state = state;
        }

        this.$el = document.getElementById('app');

        this.render();
    },
    saveState() {
        localStorage.setItem('todo-state', JSON.stringify(this.state));
        this.render();
    },
    render() {
        const self = this;

        /* let $el = this.$el;

        let state = this.state;

        let name = this.name; */

        let {$el, state} = this;

        $el.innerHTML = '';

        this.state.items.forEach(function (it, index) {
            let $item = createTag('div', '<b>' + it + '</b>', 'todo-item');

            let $delete = createTag('button', 'Delete');

            // debugger;

            $delete.addEventListener('click', function () {
                state.items = state.items.filter(function (it, i) {
                    return i !== index;
                });
                self.saveState();
            });

            $item.appendChild($delete);

            $el.appendChild($item);
        });

        const $submit = createTag('button', 'Submit', 'submit-btn');

        $submit.addEventListener('click', function () {
            const itemText = prompt('write something'); // @todo
            state.items.push(itemText);
            self.saveState();
        })

        this.$el.appendChild($submit);
    }
};

document.addEventListener('DOMContentLoaded', function () {
    app.init();
});
