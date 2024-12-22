// Prompt user for names and ages
let subArray1 =["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
let subArray2 =[24, 65, 21, 5, 9];

// Restructure into a multidimensional array
let restructuredArray = subArray1.map((name, index) => [name, subArray2[index]]);

// Log the restructured multidimensional array
console.log("Restructured Multidimensional Array:");
restructuredArray.forEach(subArray => {
  console.log(subArray);
});