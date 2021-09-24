
function GameController() {

    let ctrl = this;


    ctrl.$onInit = function () {
    };

}

app.component("game", {
    templateUrl: "/static/js/pages/game/game.html?version=" + file_version,
    controller: GameController,
});


