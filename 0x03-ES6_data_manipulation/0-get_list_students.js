const students = [
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' },
];

function getListStudents() {
  return students; // Return the array of student objects
}

export default getListStudents; // Export the function for use in other modules
