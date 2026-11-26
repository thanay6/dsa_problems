

// // const promise1 = new Promise((resolve) => {
// //     setTimeout(() => resolve("Task 1"), 3000);
// // });

// // const promise2 = new Promise((resolve) => {
// //     setTimeout(() => resolve("Task 2"), 1000);
// // });

// // const promise3 = new Promise((resolve) => {
// //     setTimeout(() => resolve("Task 3"), 2000);
// // });

// // Promise.all([promise1, promise2, promise3])
// //     .then((result) => {
// //         console.log(result);
// //     })
// //     .catch((error) => {
// //         console.log(error);
// //     });

// // console.log("Outside Promise.all");

// const promise1 = new Promise((resolve) => {
//     setTimeout(() => resolve("Task 1"), 3000);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Task 2 Failed"), 1000);
// });

// const promise3 = new Promise((resolve) => {
//     setTimeout(() => resolve("Task 3"), 2000);
// });

// Promise.settle([promise1, promise2, promise3])
//     .then((result) => {
//         console.log("Success:", result);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });

// console.log("Outside Promise.all");