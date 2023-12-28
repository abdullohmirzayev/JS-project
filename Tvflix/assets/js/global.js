"use strict";

/* 
    *  Add event on multiple element 
*/
const addEventOnElements = function (elements, eventType, callBack) {
    for (const elem of elements) elem.addEventListener(eventType, callBack)
}

/* 
   *  Toggle search box in mobile device || small screen
*/

const searchBox = document.querySelector('[search-box]')
const searchToggelers = document.querySelectorAll('[search-toggler]')

addEventOnElements(searchToggelers, 'click', function () {
    searchBox.classList.toggle('active')
})