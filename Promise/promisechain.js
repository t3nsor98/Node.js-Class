let promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Digbijaya", email: "z6bqA@example.com" });
    } else {
      reject("Error:Something went wrong");
    }
    resolve();
  }, 2000);
});

promiseFour.then((user) => {
  console.log(user);
  return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Promise is either resolved or rejected.");
})
