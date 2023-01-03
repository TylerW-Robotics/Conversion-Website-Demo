import table from "./components/conversionTable.js";
import { input1v1tHTML, input2v1fHTML } from "./components/actionBoxHTML.js";
import { setupOptions1v1, setupListener } from "./components/setup.js";
import { calcFunction } from "./components/calculations.js";

//const objCompare = (obj1, obj2) => { // Doesn't Work. Don't work on this at 4 am in the morning
//  let key1 = Object.keys(obj1).sort();
//  let key2 = Object.keys(obj2).sort();
//  if (obj1.length != obj2.length) {
//    return false;
//  }
//  //console.log(obj1, obj2, key1, key2);
//
//  for (let index = 0; index < key1.length; index++) {
//    console.log(obj1[key1[index]]);
//    console.log(obj2[key1[index]]);
//    console.log(obj1[key1[index]] == obj2[key1[index]]);
//    if (
//      !(obj1[key1[index]] == obj2[key1[index]] && key1[index] == key2[index])
//    ) {
//      console.log("here");
//      return false;
//    }
//  }
//  return true;
//};

window.onload = function () {
  var tableSel = document.getElementById("table-conv");
  console.log("This ", tableSel);
  for (var x in table) {
    if (x == "") { // To prevent empty option
      continue;
    }
    tableSel.options[tableSel.options.length] = new Option(x, x);
  }

  tableSel.onchange = function () {
    console.log(tableSel.selectedIndex);
    
    let converObj = table[tableSel.value]["conversion"];

    if (
      converObj.input == 1 &&
      converObj.output == 1 &&
      converObj.alternating == true
    ) {
      // Insert new HTML with styles
      input1v1tHTML();
      // Store Select Elements
      setupOptions1v1("input1-conv", "input2-conv", tableSel);
      // Create Listener
      setupListener(["input1", "input2"]);
    } else if (
      converObj.input == 2 &&
      converObj.output == 1 &&
      converObj.alternating == false
    ) {
      console.log("here");
      input2v1fHTML();
    } else {
      document.getElementById("actionBox").innerHTML = ``;
    }
  };
};
