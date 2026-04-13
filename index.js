const userInfo = {
    username : "user1",
    password : "password123"
}

function createLoginTracker (x){
    let attemptCount=0

  return function innerFunction (passwordAttempt){
     attemptCount++ 
console.log(attemptCount)

    if(passwordAttempt === x.password && attemptCount<=3) {return "Login successful"} else if(attemptCount<=3){return `Attempt ${attemptCount}: Login failed`} ;

  }( else(attemptCount >3) { return "Account locked due to too many failed login attempts"})

}
const login = createLoginTracker(userInfo)
console.log(login("password123"))
console.log(login("password1234"))
console.log(login("password12347"))
console.log(login("password1234"))

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};