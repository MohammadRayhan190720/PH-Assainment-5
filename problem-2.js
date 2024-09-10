function sendNotification(email) {
  if (!email.includes('@')) {
    return "Invalid Email"; 
  }

  const words = email.split('@');
  // return words;
  const userName = words[0];
  const domainName = words[1];
  
  const creatNotification = userName + " sent you an eamil form " + domainName;
  return creatNotification;

  // You have to write your code here
}
const result = sendNotification("zihad@gmail.com");
const result2 = sendNotification("farhan34@yahoo.com");
const result3 = sendNotification("nadim.naem5@outlook.com");
const result4 = sendNotification("fahim234.hotmail.com");
const result5 = sendNotification("sadia8icloud.com");
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);