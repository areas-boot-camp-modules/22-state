// Takes as input the student data for the new student.
// Creates a new ID for the student.
// Generates a new state with the new student added to the student list.
export const ADD_STUDENT = 'ADD_STUDENT';

// Takes as an input a stdent ID.
// Locates that student by ID.
// Geneerates a new state with the student removed from the student list.
export const REMOVE_STUDENT = 'REMOVE_STUDENT';

// Takes as an input an existing student.
// Locates the index of that student.
// Generates an update student object.
// Clones the student...
export const UPDATE_STUDENT = 'UPDATE_STUDENT';
export const ADD_MAJOR = 'ADD_MAJOR';
export const REMOVE_MAJOR = 'REMOVE_MAJOR';
