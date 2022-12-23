function listNumbers(beginning, end) {
    let timerId = setInterval (() => {
      console.log (beginning)
      if (beginning === end){
       clearInterval(timerId)
      }
      beginning++
    }, 1000) 
  }
                              
  listNumbers (5, 15)                             