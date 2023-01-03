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

const input2v1HTML = `
<div class="wrapper">
  <input id="input1" type="text"></input>
  <input id="input2" type="text"></input>
  <input id="input3" type="text"></input> 
</div>
`;

function css(element, style) {
  for (const property in style) element.style[property] = style[property];
}

function css_id(element_id, style_obj) {

}

export function input1v1tHTML() {
  document.getElementById("actionBox").innerHTML = input1v1HTML;
  // Need to change the elements on the class 'wrapper' and other class.
  // Make wrapper and inputs blank as a default. 
  let wrap = document.querySelector('.wrapper');
  wrap.style.cssText = myStyles;
}

export function input2v1fHTML() {
  // Need to change the elements on the class 'wrapper' and other class.
  // Make wrapper and inputs blank as a default. 
  document.getElementById("actionBox").innerHTML = input2v1HTML;

}

const myStyles = `
  display: grid;
  grid-template-columns: auto var(--inputW1) 25px var(--inputW1) auto;  
  grid-auto-rows: minmax(200px, auto);
  grid-template-areas: ". input1Box equal input2Box .";
`;