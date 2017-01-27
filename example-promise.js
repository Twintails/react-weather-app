// function getTempCallback(location, cb) {
//   cb(undefined, 78)
//   cb('City not found')
// }
//
// getTempCallback('Georgetown', function (err, temp){
//   if (err) {
//     console.log('ERROR', err)
//   } else {
//     console.log('SUCCESS', temp)
//   }
// })
//
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function(){
//       resolve(79)
//       reject('City not found')
//     },2000)
//
//   })
// }
//
// getTempPromise('Georgetown').then(function (temp) {
//   console.log('Promise SUCCESS', temp)
// }, function (err) {
//   console.log('Promise ERROR', err)
// })


//CHALLENGE Promise
function addPromise (a, b) {
  return new Promise( function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b)
    } else {
      reject('Pass in numbers only')
    }
  })
}

addPromise(2, 6).then(function(result){
  console.log(result);
}, function(error){
  console.log(error);
})

addPromise(2, 'cows').then(function(result){
  console.log(result);
}, function(error){
  console.log(error);
})

addPromise('cows', 6).then(function(result){
  console.log(result);
}, function(error){
  console.log(error);
})

addPromise('gurgle', 'foo').then(function(result){
  console.log(result);
}, function(error){
  console.log(error);
})
