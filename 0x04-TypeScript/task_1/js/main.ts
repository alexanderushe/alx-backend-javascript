export interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: 0,
    location: string,
    [PropName: string]: any,
}

export interface Directors extends Teacher {
    numberOfReports: number,
}

//printTecher function interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

//implement the printTeacher function using the defined interface
export const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstLetter  = firstName.charAt(0).toUpperCase();
    const fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    return `${firstLetter} . ${fullLastName}`;
}

//define interface for constructor
interface studentConstructor {
    new (firstName:string, lastName:string): StudentClass;
}

//define interface for class
interface StudentClass {
    workOnHomework(): string;
    displayName():string;
}

 const StudentClass: studentConstructor = class implements StudentClass{
    private _firstName!: string;
    private _lastName!: string;

    constructor(firstName: string, lastName: string){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    workOnHomework(){
        return 'Currently working';
    }
    displayName(){
        return this._firstName;
    }

}