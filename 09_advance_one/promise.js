const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
});
promiseOne.then(function(){
    console.log('Promise consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    },1000);
}).then(function(){
    console.log("async2 resolved");
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({'avish':1,'saini':2})
    },2000);
}).then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        const error = false;
        if(!error)
        {
            resolve({'username':'avish', 'followes':3});
        }
        else{
            reject("Smething went wrong");
        }
    },1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username;
})
.then(function(userName){
    console.log(userName);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log('The promise is either resolve or rejected');
})

async function consumePromiseive(){
    try {
        const response = await promiseFour
        console.log(response);
    }

    catch(error){
        console.log(error);
    }
}

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log("E:", error);
//     }
// }
// getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary').then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})