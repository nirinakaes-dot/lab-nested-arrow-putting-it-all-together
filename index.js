const userInfo = {
    username : "user1",
    password : "password123"
}

function createLoginTracker (x){
    let attemptCount=0

  return function innerFunction (passwordAttempt){
     attemptCount++ 
console.log(attemptCount)
    if(passwordAttempt === userInfo.password && attemptCount<=3) {return "Login succesfull"} else if(attemptCount<=3){return ${attemptCount}"Login failed"} else{ return "Account locked due to too many failed login attempts"}

  }

}
const login = createLoginTracker(userInfo)
console.log(login("password12345"))
console.log(login("password1234"))
console.log(login("password12347"))
console.log(login("password1234"))

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};