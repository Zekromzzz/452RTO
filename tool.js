  /*Honorary Production by Zekrom*/ 
  //JS for to-do list
  // New button binding click event
  var add = document.querySelector("#addDiv>button");
  var addText = document.querySelector("#addDiv>input");
  var todo = document.querySelector("#todo");
  var done = document.querySelector("#done");
  add.onclick = function(){
      // The text box element can be written outside the click event, but its value must be within the click event
      var addContent = addText.value;
      // Remove spaces from the beginning and end. If there is no input, no action will be taken
      if(addContent.trim().length == 0) return;
      // Otherwise, create a new task
      console.log(addContent);
      // Construct a<div class='row1'>
      var row1 = document.createElement("div");
      row1.className = "row1";
  
      // checkbox
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      row1.appendChild(checkbox);
  
      // span
      var span = document.createElement("span");
      span.innerHTML = addContent;
      row1.appendChild(span);
  
      // button
      var button = document.createElement("button");
      button.innerHTML = "remove";
      row1.appendChild(button);
  
      //Add the constructed div to the to-do div
      todo.appendChild(row1);
  
      // Check box, bind click event/change event, if selected in completed, not selected in pending
      checkbox.onchange = function(){
          var target = checkbox.checked ? done : todo;
          target.appendChild(row1);
      }
  
      button.onclick = function(){
          // Button click event, bound element, should be div on the same line
          // You cannot use row directly because the row element is created when creating a new task and needs to dynamically fetch the button one level above it
          //div row
          var parent = this.parentNode;
          //Delete child nodes from parent nodes
          var grand = parent.parentNode;
          grand.removeChild(parent);
      }
  }
  // JavaScript for Simple Computers
  ; (function (doc) {
             // Get the first element with the class 'calculator'
              var oCalculator = doc.getElementsByClassName('calculator')[0],
                  oResult = oCalculator.getElementsByClassName("result")[0],
                  btnGroup = oCalculator.getElementsByTagName('button'),
                  btnEqual = oCalculator.getElementsByClassName("equal-button")[0],
                  ac = oCalculator.getElementsByClassName("ac")[0],
                  c = oCalculator.getElementsByClassName("c")[0],
                  strRest = '';
   
              var init = function () {
                  bindEvents()
              }
              // Function to bind click event listeners to the calculator buttons
              function bindEvents() {
                  for (let i = 0; i <= btnGroup.length - 1; i++) {
                      btnGroup[i].addEventListener('click', computed, false)
                  }
                  btnEqual.addEventListener('click', equal, false)
                  ac.addEventListener('click', empty, false)
                  c.addEventListener('click', fDelete, false)
              }
   //Define a function called computed that handles the logic when clicking a number or operator button
              function computed(ev) {
                  var e = ev || window.event,
                      value = e.target.value;
                      //If the current expression is empty
                  if (strRest.length === 0) {
                      if (Number(value)) {
                          strRest += value;
                          renderResult()
                      }
                      //If the current expression length is less than 15
                  } else if (strRest.length < 15) {
                      if (oResult.value.substr(-1) === '+' || oResult.value.substr(-1) === '-' || oResult.value.substr(-1) === '*' || oResult.value.substr(-1) === '/') {
                          if (Number(value)) {
                              strRest += value;
                              renderResult()
                          }
                      } else {
                          strRest += value;
                          renderResult()
                      }
                  } else if (strRest.length === 15) {
                      if (Number(value)) {
                          strRest += value;
                          renderResult()
                      }
                  }
              }
   
              function renderResult() {
                  oResult.value = strRest
              }
   
              function equal() {
                  oResult.value = eval(strRest);
                  strRest = oResult.value;
              }
   
              function empty() {
                  strRest = '';
                  oResult.value = strRest;
              }
   
              function fDelete() {
                  strRest = strRest.slice(0, strRest.length - 1);
                  oResult.value = strRest;
              }
        //Call the init function to initialize and bind the event listener
              init()
          })(document)