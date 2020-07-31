
function BoardController() {

    let ctrl = this;

    const LENGTH = 9;

    ctrl.$onInit = function () {
        ctrl.board = [];
        for (let i = 0; i < LENGTH; i++) {
            ctrl.board.push([]);
            for (let j = 0; j < LENGTH; j++) {
                ctrl.board[i].push(null);
            }
        }
        console.log(ctrl.board);
    };

}

app.component("board", {
    templateUrl: "/static/js/components/board/board.html?version=" + file_version,
    controller: BoardController,
});


