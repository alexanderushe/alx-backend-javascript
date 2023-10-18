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

export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}
class StudentClass {
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