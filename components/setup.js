import table from "./conversionTable.js";
import { calcFunction } from "./calculations.js";

export function setupListener(id_arr) {
  id_arr.forEach(element => {
    document.getElementById(element).onkeyup = function () {
      calcFunction(element);
    }
  });
}

export function setupOptions1v1(listId1, listId2, objTable) {
  var input1 = document.getElementById(listId1);
  var input2 = document.getElementById(listId2);
  input1.length = 1;
  input2.length = 1;
  for (var y in table[objTable.value]) {
    // Add new Option elements to Select elements
    if (y == "conversion") {
      continue;
    }
    input1.options[input1.options.length] = new Option(y, y);
    input2.options[input2.options.length] = new Option(y, y);
  }
}
