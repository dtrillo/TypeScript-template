/// <reference path="../typings/jquery.d.ts" />
/// <reference path="../typings/bootstrap.d.ts" />

import $ = require("jquery");

var opciones_app = {
    base: 'div'
}

class MenuApp {
    private debug: boolean = false;
    
    private div_base: JQuery;
    
    constructor() {
        this.div_base = $(opciones_app.base);
        console.log('Plantilla cargada con exito!');
    }
    
}

export = MenuApp;