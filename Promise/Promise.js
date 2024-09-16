const newPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async operation is done");
    resolve({
        username: 'Digbijaya',
        email: 'z6bqA@example.com'
    });
  }, 2000);
});


newPromise.then(function (user) {
  console.log("Promise is resolved");
  console.log(user);
});
