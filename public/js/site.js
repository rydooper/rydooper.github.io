/* functions for tabs */
function openTab(evt, tabName) {
    var i, x, tablinks;
    var x = document.getElementsByClassName("tabs");
    console.log("tabs:\n", x);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tab-black", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " tab-black";
}