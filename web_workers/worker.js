function compute(num){
    let sum = 0;
    for(let i=0;i<num;i++){
        sum += i;
    }
    return sum;
};


self.onmessage = (event)=>{
    // throw new Error();
    const {data} = event;
    const result = compute(data);
    console.log(result);
    self.postMessage(result);

    /* usage of Message Queue of optimisation

    const result = computer(event.data);
    messageQueue.push(result);

    if(messageQueue.length > 10){
    self.postMessage(messageQueue); 
    messageQueue = [];
    }

    */
}