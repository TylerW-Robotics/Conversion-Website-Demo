const input1v1HTML = `
<div class="wrapper">
  <div class="input1box">
    <input id="input1" type="text"></input>
    <div class="input1-list">
      <select name="input1-conv" id="input1-conv">
        <option value="" selected="selected"></option>
      </select>
    </div>
  </div>
  <div class="equal_sign" id="equal_sign">
    =
  </div>
  <div class="input2box">
    <input id="input2" type="text"></input>
    <div class="input2-list">
      <select name="input2-conv" id="input2-conv">
        <option value="" selected="selected"></option>
      </select>
    </div>
  </div>
</div>
`;

const input2v1HTML = ``;

function css(element, style) {
  for (const property in style) element.style[property] = style[property];
}

export function input1v1tHTML() {
  document.getElementById("actionBox").innerHTML = input1v1HTML;
}

export function input2v1fHTML() {
  document.getElementById("actionBox").innerHTML = input2v1HTML;
}
