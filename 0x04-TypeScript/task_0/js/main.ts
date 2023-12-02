interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentList: Student[] = [];

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

studentList.push(student, student2);

function renderTable(students: Student[]) {
    const table = document.createElement("table");

    //render table
    studentList.forEach((student) => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.textContent = student.firstName;
        cell2.textContent = student.location;
    });

    document.body.appendChild(table);
}
