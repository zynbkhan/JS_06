//Question 1
function showAlert(message) {
    alert(message);
}

//Question 3 
var students = [
    { index: 0, name: "Jhone", class: 10 },
    { index: 1, name: "Doe", class: 9 },
    { index: 2, name: "Mark", class: 10 },
    { index: 3, name: "James", class: 8 },
    { index: 4, name: "Jone", class: 7 },
    { index: 5, name: "Jenny", class: 6 },
    { index: 6, name: "Merry", class: 5 },
    { index: 7, name: "Reem", class: 4 }, 
    { index: 8, name: "Ferry", class: 3 },
    { index: 9, name: "Aile", class: 2 }, 
    { index: 10, name: "James", class: 1 },  
];

function createStudentRow(student) {
    var row = document.createElement("tr");
    var indexCell = document.createElement("td");
    var nameCell = document.createElement("td");
    var classCell = document.createElement("td");
    var actionCell = document.createElement("td");
    var deleteButton = document.createElement("button");

    indexCell.textContent = student.index;
    nameCell.textContent = student.name;
    classCell.textContent = student.class;
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        row.remove();
    });

    actionCell.appendChild(deleteButton);

    row.appendChild(indexCell);
    row.appendChild(nameCell);
    row.appendChild(classCell);
    row.appendChild(actionCell);

    return row;
}

function populateStudentRecords() {
    var recordsTableBody = document.getElementById("student-records");
    students.forEach(student => {
        var row = createStudentRow(student);
        recordsTableBody.appendChild(row);
    });
}
window.onload = populateStudentRecords;


//Question 5
var counter = 0;

        function increment() {
            counter++;
            document.getElementById("counter").textContent = counter;
        }

        function decrement() {
            if (counter > 0) {
                counter--;
                document.getElementById("counter").textContent = counter;
            }
        }