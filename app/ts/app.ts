/// <reference path="../typings/jquery.d.ts" />
/// <reference path="../typings/require.d.ts" />
/// <reference path="../typings/bootstrap.d.ts" />

/// <reference path="menu.ts" />
/// <amd-dependency path="menu.ts" />

require([
    'Menu',
    'jquery',
    'bootstrap'
], function (MenuApp, $) {
    'use strict';
    $(function () {
        var menu = new MenuApp();
    });
});