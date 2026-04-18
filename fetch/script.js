fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(data => console.log(data.email));


  fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(data => console.log(data.name));


  //Same using async/await
async function getUser(){
  let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  let data = await res.json();
  console.log(data.name);
}

getUser();