function calculateTax(income, expenses) {
  if ( income < 0 || expenses < 0 || income < expenses){
    return "Invalid Input";
  }

  const differenceIncomeExpenses = income - expenses ;

   const calculatedTax =  differenceIncomeExpenses * 0.2;
   return calculatedTax;
   
}

const result = calculateTax(-5000, 2000);
const result2 = calculateTax(7000, 7000);
const result3 = calculateTax(10000, 3000);
const result4 = calculateTax(34000, 1753);
const result5 = calculateTax(5000, 1500);
const result6 = calculateTax(6000, -1500);
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
