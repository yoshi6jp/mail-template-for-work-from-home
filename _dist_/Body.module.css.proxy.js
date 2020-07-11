
export let code = "._dist_Body_module__top {\n  margin-top: 66px;\n  margin-bottom: 10px;\n}\n";
let json = {"top":"_dist_Body_module__top"};
export default json;

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);