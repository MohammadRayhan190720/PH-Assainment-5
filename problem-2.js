function sendNotification(email) {
 const atPosition = email.indexOf('@');
  if (!email.includes('@')) {
    return "Invalid Email"; 
  }else if ( atPosition <= 0 || atPosition !== email.lastIndexOf("@") || atPosition >= email.length -1){
     return "Invalid Email";
  }
  

  const userDomainSplit = email.split('@');
  
  const userName = userDomainSplit[0];
  const domainName = userDomainSplit[1];
  
  
  const notificationMessage = userName + " sent you an email from " + domainName;
  return notificationMessage;

  
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