function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }
   else if (
     obj.name === undefined ||
     obj.testScore === undefined ||
     obj.schoolGrade === undefined ||
     obj.isFFamily === undefined
   ) {
     return "invalid info";
   }
    else if (
     typeof obj.name !== "string" ||
     (typeof obj.testScore !== "number" && testScore <= 50) ||
     (typeof obj.schoolGrade !== "number" && schoolGrade <= 30) ||
     typeof obj.isFFamily !== "boolean"
   ) {
     return "invalid info";
   }

   let scores = obj.testScore + obj.schoolGrade;
   if (info.isFFamily === true){
    scores = scores + 20 ;
   }
   if ( scores >= 80){
    return true;
   }
   else{
    return false;
   }
   
  
}

const info = {
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: true,
}; 
const result = calculateFinalScore(info);
console.log(result);
