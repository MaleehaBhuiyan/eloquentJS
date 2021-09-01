function reverseArray(arr){
    let reversedArr = [];
    
    for(let i = arr.length - 1; i >= 0; i--){
      reversedArr.push(arr[i])
    }
    
    return reversedArr
  } 

  function reverseArrayInPlace(arr){
      for(let i = Math.ceil(arr.length / 2); i < arr.length; i++){
         arr.unshift(arr[i])
          arr.pop()
          arr.unshift(arr[i])
          console.log(arr[i])
          // arr[arr.length - 1 - i];
      }
  }
  
  // console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
   console.log(arrayValue);
  // → [5, 4, 3, 2, 1]