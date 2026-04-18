fetch("https://jsonplaceholder.typicode.com/users?name=Leanne Graham")
.then((res)=>res.json())
.then(data=>console.log(data[0].address.street))