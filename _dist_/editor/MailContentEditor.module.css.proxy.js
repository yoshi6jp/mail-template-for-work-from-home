
export let code = "._dist_editor_MailContentEditor_module__clear_btn {\n  position: absolute;\n  right: 0;\n  top: 0;\n  opacity: 0.6;\n}\n";
let json = {"clear_btn":"_dist_editor_MailContentEditor_module__clear_btn"};
export default json;

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);