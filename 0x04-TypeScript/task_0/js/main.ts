interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student: Student ={
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "New York"
};
const student2: Student = {
    firstName: "Marry",
    lastName: "Hail",
    age: 10,
    location: "Zimbabwe",
}

const studentsList: Student[] = [student, student2];

function renderTable(students: Student[]) {
    const table = document.createElement("table");

    //table header
    const headerRow = table.insertRow();
    const firstNameHeader = headerRow.insertCell();
    firstNameHeader.textContent = "First Name";
    const locationHeader = headerRow.insertCell();
    locationHeader.textContent = "Location";

    //create a row for each student
    for (const student of students) {
        const row = table.insertRow();
        const firstNameCell = row.insertCell();
        firstNameCell.textContent = student.firstName;
        const locationCell = row.insertCell();
        locationCell.textContent = student.location;
    }
    document.body.appendChild(table);
}