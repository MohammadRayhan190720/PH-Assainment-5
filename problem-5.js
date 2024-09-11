function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes)) {
    return "Invalid Input";

  } else if (!serialNumber > waitingTimes || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  let sumofWaitingTimes = 0;
  let lenthOfWaitingTimes = waitingTimes.length;
  

  for (const time of waitingTimes) {
      sumofWaitingTimes += time;
      
    
  }
  const average = Math.round(sumofWaitingTimes / lenthOfWaitingTimes) ;
  const beforeIsratTotalCandidates = serialNumber - 1;
  const afterCandidateIsratSerial = beforeIsratTotalCandidates - waitingTimes.length;
  
  const isratNeedTime = afterCandidateIsratSerial * average ;
  return isratNeedTime ;
  

}

const result = waitingTime([7, 8, 3, 4, 5], "9");
console.log(result);
