import table from "./components/conversionTable.js";
import { input1v1tHTML, input2v1fHTML } from "./components/actionBoxHTML.js";
import { setupOptions1v1, setupListener} from "./components/setup.js";
import { calcFunction } from "./components/calculations.js";

window.onload = function () {
  var tableSel = document.getElementById("table-conv");
  console.log("This ", tableSel);
  for (var x in table) {
    tableSel.options[tableSel.options.length] = new Option(x, x);
  }

  tableSel.onchange = function () {
    console.log(tableSel.selectedIndex);

    if (table[tableSel.value]["conversion"] = {
        "input": 1,
        "output": 1,
        "alternating": true
      }) {
      // Insert new HTML with styles
      input1v1tHTML();
      // Store Select Elements
      setupOptions1v1("input1-conv", "input2-conv", tableSel);
      // Create Listener
      setupListener(["input1", "input2"]);
    } else if (table[tableSel.value]["conversion"] = {
      "input": 2,
      "output": 1,
      "alternating": false
      }) {
      input2v1fHTML();
    } else {
      document.getElementById("actionBox").innerHTML = ``;
    }
  };
};
