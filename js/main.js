
/**
 * Hide the element related to the given id.
 * */
function hideElement(id) {
    document.getElementById(id).style.display = "none";
}

/**
 * Show the hidden elements related to the given id.
 * */
function recoverElement(id){
    document.getElementById(id).style.display = "block";
}

function hideOrShow(id) {
   var elem = document.getElementById(id);
   var isElemVisible = elem.style.display == "block";
   if (isElemVisible) {
        hideElement(id);
   } else {
       recoverElement(id);
   }

}






