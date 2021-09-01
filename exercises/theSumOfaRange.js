function range(start, end, step=0){
    let arr = [];
    let counter = start;
    
    if(start < end){
        while(counter <= end){
            arr.push(counter)
            if(step === 0){
                counter++ 
            } else {
                counter += step; 
            }
            
        }
    } else {
        while(counter >= end){
            arr.push(counter)
            if(step === 0){
                counter++ 
            } else {
                counter += step; 
            }
            
        } 
    }
    
    return arr
  }
  
  function sum(arr){
    let sum = 0;
    for(let val of arr){
      sum += val; 
    }
    
    return sum 
  }
  
 console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
 console.log(sum(range(1, 10)));
  // → 55