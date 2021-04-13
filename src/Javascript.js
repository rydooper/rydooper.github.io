//FUNCTIONS

function openTab(TabName) {
    var Index;
    var Tabs = document.getElementsByClassName("homeTabs");
    for (Index=0; Index < Tabs.length; Index++) {
        Tabs[Index].style.display="none";
    }
    document.getElementById(TabName).style.display="block"; 
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

//function showSection(sectionName) {
 //     sectionName.style(display);
//}

function showSection(sectionName) {
  var x = sectionName;
  if (x.style.display == 'none') {
      x.style.display = 'block';
  } else {
      x.style.display = 'none';
  }
}