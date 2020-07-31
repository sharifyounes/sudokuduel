
function CellController() {

    let ctrl = this;

    ctrl.$onInit = function () {
    };

}

app.component("cell", {
    templateUrl: "/static/js/components/cell/cell.html?version=" + file_version,
    controller: CellController,
    bindings: {
        value: "<",
    },
});


