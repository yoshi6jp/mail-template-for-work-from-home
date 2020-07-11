
export let code = "._dist_preview_Preview_module__text_btn {\n  position: absolute;\n  top: 3px;\n  right: 3px;\n  opacity: 0.6;\n}\n";
let json = {"text_btn":"_dist_preview_Preview_module__text_btn"};
export default json;

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);