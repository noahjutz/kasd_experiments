const myPromise = () => {
  return Promise.resolve().then((v) => {
    let i = 0;
    while (i < 1000000) {
      i++;
    }
    return "Billion loops done";
  });
};

const t1 = () => {
  console.log("Synchronous 1");
  setTimeout(() => console.log("Timeout 2"), 0);
  Promise.resolve().then(() => console.log("Promise 3"));
  console.log("Synchronous 4");
};

export default myPromise;

// testing out ES modules
// const add = (a, b) => a + b;
// export { add };
// export default (a, b) => a - b;
