/// <reference path="../typings/jquery.d.ts" />
/// <reference path="../typings/bootstrap.d.ts" />
define(["require", "exports", "jquery"], function (require, exports, $) {
    var opciones_app = {
        base: 'div'
    };
    var MenuApp = (function () {
        function MenuApp() {
            this.debug = false;
            this.div_base = $(opciones_app.base);
            console.log('Plantilla cargada con exito!');
        }
        return MenuApp;
    })();
    return MenuApp;
});
