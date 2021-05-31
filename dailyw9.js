//Instructions
//Create two functions that use promises which can be chained.
//The first function called makeAllCaps(), should take an array of words as an argument and capitalize them.
//The second function called sortWords(), should sort the words in alphabetical order.
//If the array contains anything but strings, it should throw an error.



const makeAllCaps = (array) => {
  return new Promise((resolve,reject)=>{
    let capsArray = array.map(word=>{
      if(typeof word == 'string'){
        return word.toUpperCase();
      }
      else{
        reject('error: Not all words in the array are strings')
      }
    })
    resolve(capsArray)
  })
}
const sortWords = (array) => {
  return new Promise((resolve,reject) => {
    if(array){
      resolve(array.sort());
    }
    else{
      reject('error: somthing went wrong with sorting the array')
    }
  })
}
const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
const complicatedArray = ['cucumber', 44, true]
makeAllCaps(complicatedArray)
.then(res => {
  return sortWords(res)
})
.then(res => {
  console.log(res);
})
.catch(err=>{
  console.log(err);
})







































