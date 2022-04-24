function openTab(TabName) { //Function opens the clicked tab, revealing additional information
    var Index;
    var Tabs = document.getElementsByClassName("expandable-projects"); //Collects all the classes with the class name of "recipe"
    for (Index = 0; Index < Tabs.length; Index++) {
        Tabs[Index].style.display = "none"; //Sets all the display values (CSS) of the classes to "none", hiding the class
    }
    document.getElementById(TabName).style.display = "block"; //Sets the display value of the clicked class (the parameter "TabName") to "block", showing the class
}

// Hide all elements with class="containerTab", except for the one that matches the clickable grid column
function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("expandable-projects");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  } 
