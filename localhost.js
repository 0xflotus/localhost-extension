const div = document.createElement('div');
div.style.border = '3px dotted #000';
div.style.width = '100%';
const span = document.createElement('span');
span.innerText = 'Dev Preview from ' + new Date();
span.style.color = '#a00';
div.appendChild(span);
document.body.insertBefore(div, document.body.firstChild);