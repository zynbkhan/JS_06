// Question # 1:
// i. Get element of id "main-content" and assign it to a variable.
var mainContent = document.getElementById('main-content');

// ii. Display all child elements of “main-content” element.
var children = mainContent.children;
document.write('Child elements of #main-content:<br>');
for (let i = 0; i < children.length; i++) {
    document.write(children[i] + "<br>");
}   

// iii. Get all elements of class “render” and show their innerHTML in browser.
var renderElements = document.getElementsByClassName('render');
document.write('InnerHTML of elements with class "render":<br>');
for (let i = 0; i < renderElements.length; i++) {
    document.write(renderElements[i].innerHTML + "<br>");
}

// iv. Fill input value whose element id is "first-name" using JavaScript.
document.getElementById('first-name').value = 'Zainab';

// v. Repeat part iv for id “last-name” and “email”.
document.getElementById('last-name').value = 'Khan';
document.getElementById('email').value = 'zynbkhan06@gmail.com';

// Question # 2:
// i. Node type of element with id "form-content"
var formContentNode = document.getElementById("form-content");
document.write("Node type of 'form-content': " + formContentNode.nodeType + "<br>");

// ii. Node type of element with id "lastName" and its child nodes
var lastNameNode = document.getElementById("lastName");
document.write("Node type of 'lastName': " + lastNameNode.nodeType + "<br>");
document.write("Child nodes of 'lastName': " + lastNameNode.childNodes + "<br>");

// iii. Update child node of element with id "lastName"
lastNameNode.value = "Updated Last Name";

// iv. Get first and last child of id "main-content"
var mainContents = document.getElementById("main-content");
document.write("First child of 'main-content': " + mainContents.firstChild + "<br>");
document.write("Last child of 'main-content': " + mainContents.lastChild + "<br>");

// v. Get next and previous siblings of id "lastName"
document.write("Next sibling of 'lastName': " + lastNameNode.nextSibling + "<br>");
document.write("Previous sibling of 'lastName': " + lastNameNode.previousSibling + "<br>");

// vi. Get parent node and node type of element with id "email"
var emailNode = document.getElementById("email");
document.write("Parent node of 'email': " + emailNode.parentNode + "<br>");
document.write("Node type of 'email': " + emailNode.nodeType + "<br>");
