
function CellController() {

    let ctrl = this;

    ctrl.$onInit = function () {

    };

    ctrl.validate = function() {
        if (!ctrl.cell.is_valid()) {
            ctrl.cell.set_value(null);
        }
    };

}

app.component("cell", {
    templateUrl: "/static/js/components/cell/cell.html?version=" + file_version,
    controller: CellController,
    bindings: {
        cell: "<",
    },
});


