const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
    System.import('./image_viewer').then(module=>{
        console.log(module);
    });
    //special function es2015
    //browser will look for image_viewer
    //server backs to the client
    //assynchronous call
};

document.body.appendChild(button);