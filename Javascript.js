//FUNCTIONS

function openTab(TabName) {
    var Index;
    var Tabs = document.getElementsByClassName("homeTabs");
    for (Index=0; Index < Tabs.length; Index++) {
        Tabs[Index].style.display="none";
    }
    document.getElementById(TabName).style.display="block"; 
}
