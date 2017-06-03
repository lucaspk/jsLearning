/**
 * Created by Lucas on 03/06/2017.
 */


function moveElem(id){
    var elem = document.getElementById(id);
    var speedOfFrame = 5;
    var pos = 0;
    var interval = setInterval(frame, speedOfFrame);
    function frame(){
        if (pos == 350) {
            clearInterval(interval);
        } else {
          pos++;
          elem.style.top = pos + 'px';
          elem.style.left = pos + 'px';
        }
    }
}
