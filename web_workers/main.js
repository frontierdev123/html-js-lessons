const calcBtn = document.getElementById('btn-calc');
const colorBtn = document.getElementById('btn-color');
const termBtn = document.getElementById('btn-term');

let worker;

function compute(num){
    let sum = 0;
    for(let i=0;i<num;i++){
        sum += i;
    }
    return sum;
};

worker.onmessage = (event)=>{
    console.log(event.data)
}

worker.onerror = (error)=>{
    console.error("Error happened ", error);
}
calcBtn.addEventListener('click',()=>{
    // const result = compute(10000000000);
    // console.log(result);
    if(!worker){
        worker = new Worker('worker.js');
        setWebWorker();
    }
    worker.postMessage(10000000)
})

termBtn.addEventListener('click',()=>{
    worker.terminate();
    worker = undefined;
})
colorBtn.addEventListener('click', ()=> {
    const currentColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = currentColor === 'red' ? 'green' :'red';
})

console.log("hello");

function setWebWorker(){
    worker.onmessage = (event)=>{
        console.log(event.data)
    }

    worker.onerror = (error)=>{
        console.error("Error happened ", error);
    }
}
// onmessage, postMessage