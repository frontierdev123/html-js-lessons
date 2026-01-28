const worker = new Worker('./worker.js');
const calcBtn = document.getElementById('btn-calc');
const colorBtn = document.getElementById('btn-color');
const termBtn = document.getElementById('btn-terminate');


calcBtn.addEventListener('click',()=>{
   worker.postMessage(10000000000);
})

worker.onmessage = (event)=>{
    console.log(event.data)
};

worker.onerror = (error)=>{
    console.log("Error happened", error)
}

colorBtn.addEventListener('click', ()=> {
    const currentColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = currentColor === 'red' ? 'green' :'red';
})

termBtn.addEventListener('click',()=>{
    worker.terminate();
})
console.log("hello");

// onmessage , postMessage

// onerror, terminate
