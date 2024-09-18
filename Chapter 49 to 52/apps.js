//Question 1
var signupForm = document.getElementById("signupForm");
var formDataDiv = document.getElementById("formData");

signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); 

    var formData = new FormData(signupForm);
    var formDataEntries = Array.from(formData.entries());

    var output = "<h2>Form Data:</h2>";
    formDataEntries.forEach(([key, value]) => {
        output += `<p>${key}: ${value}</p>`;
    });

    formDataDiv.innerHTML = output;
});

//Question 2
var contentDiv = document.querySelector('.content');
var readMoreButton = document.querySelector('.read-more-button');
var additionalText = "Artificial intelligence is already making a significant impact on various industries. In healthcare, AI is being used to diagnose diseases, develop new treatments, and personalize patient care. In finance, AI-powered algorithms are used for fraud detection, risk assessment, and algorithmic trading. In transportation, autonomous vehicles are being developed to improve safety and efficiency. As AI continues to advance, it raises important ethical questions. Concerns include job displacement, privacy violations, and the potential for AI to be used for harmful purposes. Ensuring that AI is developed and used responsibly is crucial to mitigating these risks. The future of AI is promising, but it also presents challenges. As AI becomes more sophisticated, it is likely to have a profound impact on society. It is essential to carefully consider the potential benefits and drawbacks of AI and to develop ethical guidelines for its development and use";

readMoreButton.addEventListener('click', () => {
  contentDiv.style.maxHeight = 'none';
  contentDiv.innerHTML += additionalText;
  readMoreButton.style.display = 'none';
});
   

//Question 3
var students = [
  { index: 0, name: "Jhone", class: 10 },
  { index: 1, name: "Doe", class: 9 },
  { index: 2, name: "Mark", class: 10 },
  { index: 3, name: "James", class: 8 },
];

function createStudentRow(student) {
  var row = document.createElement("tr");
  var indexCell = document.createElement("td");
  var nameCell = document.createElement("td");
  var classCell = document.createElement("td");
  var actionCell = document.createElement("td");

  var deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
      students = students.filter(s => s.index !== student.index);
      populateStudentRecords();
  });

  var editButton = document.createElement("button");
  editButton.classList.add("edit-button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => {
      showEditForm(student);
  });

  indexCell.textContent = student.index;
  nameCell.textContent = student.name;
  classCell.textContent = student.class;

  actionCell.appendChild(deleteButton);
  actionCell.appendChild(editButton);

  row.appendChild(indexCell);
  row.appendChild(nameCell);
  row.appendChild(classCell);
  row.appendChild(actionCell);

  return row;
}

function populateStudentRecords() {
  const recordsTableBody = document.getElementById("student-records");
  recordsTableBody.innerHTML = '';
  students.forEach(student => {
      var row = createStudentRow(student);
      recordsTableBody.appendChild(row);
  });
}

function showEditForm(student) {
  document.getElementById("editForm").style.display = "block";
  document.getElementById("editName").value = student.name;
  document.getElementById("editClass").value = student.class;
  document.getElementById("editForm").onsubmit = function(event) {
      event.preventDefault();
      saveChanges(student.index);
  };
}

function saveChanges(index) {
  var newName = document.getElementById("editName").value;
  var newClass = document.getElementById("editClass").value;
  var student = students.find(s => s.index === index);
  student.name = newName;
  student.class = parseInt(newClass);
  document.getElementById("editForm").style.display = "none";
  populateStudentRecords();
}

document.getElementById("studentForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var classNum = document.getElementById("class").value;
 var newStudent = {
      index: students.length,
      name,
      class: parseInt(classNum)
  };
  students.push(newStudent);
  document.getElementById("studentForm").reset();
  populateStudentRecords();
});

window.onload = populateStudentRecords;


