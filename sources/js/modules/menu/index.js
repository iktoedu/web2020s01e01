'use strict';

const is_open_class = 'menu-is-open';

const remove_is_open_class = (element) => element.classList.remove(is_open_class);

const add_is_open_class = (element) => element.classList.add(is_open_class);

const has_is_open_class = (element) => element.classList.contains(is_open_class);

const toggle_menu_trigger = (trigger_element, menu_element) => {
    if (has_is_open_class(trigger_element)) {
        remove_is_open_class(trigger_element);
        remove_is_open_class(menu_element);
    }
    else {
        add_is_open_class(trigger_element);
        add_is_open_class(menu_element);
    }
};

const menu = (trigger_selector, menu_selector) => {
    const trigger_object = document.querySelector(trigger_selector);
    const menu_object = document.querySelector(menu_selector);

    remove_is_open_class(trigger_object);
    remove_is_open_class(menu_object);

    trigger_object.addEventListener('click', (event) => {
        event.preventDefault();
        toggle_menu_trigger(trigger_object, menu_object);
    });
};

module.exports = menu;
