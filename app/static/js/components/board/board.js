
function BoardController() {

    let ctrl = this;

    ctrl.$onInit = function () {
        ctrl.board = Board();
    };

    ctrl.solve = function() {
        ctrl.board.solve();
    };

    ctrl.reset = function() {
        ctrl.board.reset();
    };

    ctrl.generate_new = function() {
        ctrl.board.generate_new();
    };
}

app.component("board", {
    templateUrl: "/static/js/components/board/board.html?version=" + file_version,
    controller: BoardController,
    bindings: {
    }
});


