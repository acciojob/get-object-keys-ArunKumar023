//your JS code here. If required.
// Define the student object
const student = {
  name: 'John',
  age: 20,
  major: 'Computer Science'
};

// Add the getKeys method to the Object prototype
Object.prototype.getKeys = function() {
  const keys = [];
  for (let key in this) {
    if (this.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
};

// Call the getKeys method on the student object
const keys = student.getKeys();
console.log(keys); 
