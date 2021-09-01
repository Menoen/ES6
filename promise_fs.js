const fs = require('fs')
// fs.readfile('./source/context.txt', (err,data) => {
//   if(err) {
//     throw err;
//   }else {
//     console.log(data.toString())
//   }
// })

// Promise形式
let p = new Promise((resolve,reject)=>{
  fs.readfile('./source/context.txt', (err,data) => {
    if(err) {
      reject(err);
    }else {
      resolve(data)
    }
  })
})

p.then(value => {
  console.log(value.toString)
}, reason => {
  console.log(reason)
})
