function compute(num){
    let sum = 0;
    for(let i=0;i<num;i++){
        sum += i;
    }
    return sum;
};


const messageQueue = [];
self.onmessage = (event)=>{
    // throw new Error('Some error occured')
   console.log({event});
   const result = compute(event.data);
   self.postMessage(result);

   // Minimize Communication Overhead With Message Batching 
//    if(messageQueue.length > 10){
//      self.postMessage(result);
//      messageQueue = [];
//    }
}