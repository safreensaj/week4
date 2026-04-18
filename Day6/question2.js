//Use Promises to simulate data fetching and handle errors,pls explain the question and how to solve this task in simple way
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success=true;
            if(success){
                resolve("Data fetched successfully")
            }else{
                reject("Error fetching data")
            }
        },2000);
    })
}
fetchData()
.then((data)=>{
  console.log(data);
})
.catch((error)=>{
    console.log(error);
})
function getUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
let success=true;
if(success){
    resolve("User data loaded");
}else{
    reject("Failed to load user")
}
        },3000)
    })
}
getUser()
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
async function run(){
    try{
    let data=await getUser();
    console.log(data)
    }catch{
        console.log(error);
    }
}
run();