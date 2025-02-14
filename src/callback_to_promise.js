// function fetchData(callback) {
//   setTimeout(() => {
//     callback(null, 'Data fetched successfully!');
//   }, 1000);
// }

// fetchData((err, data) => {
//   if (err) {
//     console.error('Error:', err);
//   } else {
//     console.log('Result:', data);
//   }
// });

// // below is the promise base implementation of above callback function
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Data fetched successfully!');
//     }, 1000);
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data fetched successfully!');
      }, 1000);
    });
  }
  
  async function getData() {
    let data = await fetchData();
    return data;
  }
  
  // Call and log the result properly
  getData().then(console.log); // ✅ Corrected
  