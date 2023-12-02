// Define interfaces for subjects and teachers
interface Subject {
    getRequirements(): string;
    getAvailableTeacher(): string;
    setTeacher(teacher: Teacher): void;
  }
  
  interface Teacher {
    experienceTeachingC: number;
    firstName: string;
    lastName: string;
  }
  
  // Create constants for subjects
  export const cpp: Subject = {
    getRequirements: () => 'C++ Requirements',
    getAvailableTeacher: () => 'Available C++ Teacher',
    setTeacher(teacher: Teacher): void {
      // Implementation of setTeacher method
      console.log(`Setting C++ Teacher: ${teacher.firstName} ${teacher.lastName}`);
    },
  };
  
  export const java: Subject = {
    getRequirements: () => 'Java Requirements',
    getAvailableTeacher: () => 'Available Java Teacher',
    setTeacher(teacher: Teacher): void {
      console.log(`Setting Java Teacher: ${teacher.firstName} ${teacher.lastName}`);
    },
  };
  
  export const react: Subject = {
    getRequirements: () => 'React Requirements',
    getAvailableTeacher: () => 'Available React Teacher',
    setTeacher(teacher: Teacher): void {
      console.log(`Setting React Teacher: ${teacher.firstName} ${teacher.lastName}`);
    },
  };
  
  // Create a Teacher object
  export const cTeacher: Teacher = {
    firstName: 'Farai',
    lastName: 'Ushe',
    experienceTeachingC: 10,
  };
  
  // C++ subject
  console.log('C++');
  cpp.setTeacher(cTeacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());
  
  // Java subject
  console.log('Java');
  java.setTeacher(cTeacher);
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());
  
  // React subject
  console.log('React');
  react.setTeacher(cTeacher);
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
