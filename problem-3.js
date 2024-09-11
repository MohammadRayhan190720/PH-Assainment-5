function checkDigitsInName(name) {
  if (typeof name !== 'string') {
    return "Invalid Input";
  }
  const letters = name.split('')
  for (const letter of letters) {
      if (!isNaN(letter)){
           return true;
      }
    
  }
  return false;
  
  
}
const result = checkDigitsInName("Raj123");
const result2 = checkDigitsInName("Suman");
const result3 = checkDigitsInName("Name2024");
const result4 = checkDigitsInName("!@#");
const result5 = checkDigitsInName(["Raj"]);
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
