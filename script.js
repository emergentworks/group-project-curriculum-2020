// definining variables 
var topicFilter="all-topics"
var modeFilter="all-types"
// create new function for topic
function setTopicFilter(tag) {
    topicFilter=tag;
    filterSelection();
}
// create new function for mode 
function setModeFilter(tag) {
    modeFilter=tag;
    filterSelection();
}
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  console.log(topicFilter,modeFilter)
  for (i = 0; i < x.length; i++) {
        x[i].style.display="none";
    // updating if statement to check for both filters
    // if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    if (x[i].className.indexOf(topicFilter) > -1
        && x[i].className.indexOf(modeFilter) >-1) {
            x[i].style.display="block";
        } 
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}