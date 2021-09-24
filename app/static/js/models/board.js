let Board = (function (contents) {

    const LENGTH = 9;

    let fields = {};

    if (!contents) {
        fields.contents = generate_contents(null);
    } else {
        fields.contents = contents;
    }

    function generate_contents(value) {
        if (!angular.isDefined(value)) {
            value = null;
        }
        let board = [];
        for (let i = 0; i < LENGTH; i++) {
            board.push([]);
            for (let j = 0; j < LENGTH; j++) {
                board[i].push(Cell(j, i, value));
            }
        }
        return board;
    }

    function solve() {
        fields.contents = generate_contents(":)");
    }

    function reset() {
        fields.contents = generate_contents(null);
    }

    function generate_new() {
        fields.contents = generate_contents(2);
    }

    return {
        fields: fields,
        solve: solve,
        reset: reset,
        generate_new: generate_new,
    }
});


let Cell = (function(x, y, value) {

    if (!angular.isDefined(value)) {
        value = null;
    }

    let fields = {
        value: value,
        x: x,
        y: y,
    };

    function set_value(value) {
        fields.value = value;
    }

    function is_valid() {
        let value = fields.value;
        return !angular.isNumber(value) || (value <= 9 && value >= 1)
    }

    return {
        fields: fields,
        set_value: set_value,
        is_valid: is_valid
    }
});