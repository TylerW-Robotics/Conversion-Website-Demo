import table from "./conversionTable.js";

function calc1to1(id, tableKey) {
  var num = Number(document.getElementById(id).value);
  if (id == "input1") {
    //input1-conv
    var inputKey = document.getElementById("input1-conv").value;
    var outputKey = document.getElementById("input2-conv").value;
    var outputId = "input2";
  } else {
    var inputKey = document.getElementById("input2-conv").value;
    var outputKey = document.getElementById("input1-conv").value;
    var outputId = "input1";
  }
  if (tableKey == "Length") {
    var outputVal =
      num * (table[tableKey][outputKey] / table[tableKey][inputKey]);
    document.getElementById(outputId).value = outputVal;
    return;
  } else if (tableKey == "Temperature") {
    var in_ = table[tableKey][inputKey];
    var out_ = table[tableKey][outputKey];
    var outputVal = (num - in_["sub"])/in_["div"];
    outputVal = (outputVal * out_["div"]) + out_["sub"];
    document.getElementById(outputId).value = outputVal;
    return;
  } else {
    console("Error at Calc");
  }
}

export function calcFunction(id) {
  var num = document.getElementById(id).value;
  if (
    isNaN(num) != false ||
    document.getElementById("input1-conv").value == "" ||
    document.getElementById("input2-conv").value == ""
  ) {
    console.log("NaN");
    return;
  }
  var tableKey = document.getElementById("table-conv").value;
  var conversionObj = table[tableKey].conversion;
  if ((conversionObj = { input: 1, output: 1, alternating: true })) {
    calc1to1(id, tableKey);
  } else {
    console.log("error");
  }
}

