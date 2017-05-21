/**
 * Created by Lucas on 11/05/2017.
 */

/**
 * Each click increment the fontsize of the text related to the given id by increaseFactor pixels.
 *
 * */
function increaseFontSize(id, increaseFactor) {
    changeFontSize(id, increaseFactor);
}

/**
 * Each click decrement the fontsize of the text related to the given id by decreaseFactor pixels.
 *
 * */
function decreaseFontSize(id, decreaseFactor) {
    changeFontSize(id, decreaseFactor * (-1));
}

/**
 * Each click change the fontsize of the text related to the given id by changeFactor pixels.
 * You can use this function either to increase or to decrease the fontsize.
 * - To increase, you pass a positive number as the changeFactor.
 * - To decrease, you multiply the change factor to (-1).
 *
 * */
function changeFontSize(id, changeFactor) {
    txt = document.getElementById(id);
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size'); /*variável criada sem 'var' terá escopo global automaticamente*/
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + changeFactor) + 'px';
}

/**
 * Each click increment one pixel in the fontsize of the text related to the given id.
 * */
function increaseFontSizeOnePixel(id) {
    txt = document.getElementById(id);
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 1) + 'px';
}

/**
 * Each click decrement one pixel in the fontsize of the text related to the given id.
 * */
function decreaseFontSizeOnePixel(id) {
    txt = document.getElementById(id);
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 1) + 'px';
}
