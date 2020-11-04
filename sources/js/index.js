'use strict';

const menu_module = require('menu');
const Noty = require('noty');

document.addEventListener('DOMContentLoaded', () => {
    menu_module('.menu-trigger', '.menu');

    new Noty({
        text: 'Welcome to this completely useless website!',
    }).show();
});
