const os = require('os');
const {from}=require('rxjs');

const pSystemCheck=new Promise((resolve,reject)=>{
    if(os.totalmem<4*1024*1024*1024)
        reject("This app needs at least 4 GB of RAM");
    if(os.cpus().length<2)
        reject("Processor is not supported");

    resolve("System is checked successfully");
});

function checkSystem()
{
    console.log("Checking your system ...");
    pSystemCheck.then((val)=>{console.log(val)}).catch((err)=>{console.log(err)});
      
}
checkSystem();


//2. Using Observables
/*function checkSystemObservable()
{
    console.log("Checking your system ...");
    var myObservable=from(pSystemCheck);
    myObservable.subscribe((val)=>console.log(val),(err)=>console.log(err));
}
checkSystemObservable();
*/