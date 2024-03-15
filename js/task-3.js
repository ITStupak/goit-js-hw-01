"use strict";

function getElementWidth(content, padding, border) {

    // Перший спосіб:

    return (Number.parseFloat(content) + 2 * Number.parseFloat(padding) + 2 * Number.parseFloat(border));

    //Другий спосіб:

    /* return (Number.parseFloat(content) + 2 * ((Number.parseFloat(padding)) + (Number.parseFloat(border)))); */

    //Третій спосіб:

    /* return ((Number.parseFloat(`${content}`)) + 2 * (Number.parseFloat(`${padding}`)) + 2 * (Number.parseFloat(`${border}`))); */

    //Працюють всі, але який правильніший?:)
}
//Ще спробував записати функцію інакше і теж працює:

/* function getElementWidth(content, padding, border) {
    content = Number.parseFloat(content);
    padding = Number.parseFloat(padding);
    border = Number.parseFloat(border);
    return (content + 2 * padding + 2 * border);
} */

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

console.log(getElementWidth("300px", "10px", "2px"));