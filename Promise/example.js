const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise resolved");
        resolve();
    }, 1000);
});

myPromise.then(() => {
    console.log("Promise completed");
});
