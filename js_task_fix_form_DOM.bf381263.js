"use strict";var inputs=document.querySelectorAll("form input");inputs.forEach(function(e){var t=document.createElement("label");t.classList.add("field-label"),t.setAttribute("for",e.id),t.textContent=e.name,e.placeholder=e.name[0].toUpperCase()+e.name.slice(1),e.parentElement.insertBefore(t,e)});
//# sourceMappingURL=js_task_fix_form_DOM.bf381263.js.map
