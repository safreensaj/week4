let promise= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("done")
    },1000);
})
promise.then(res=>console.log(res));


async function getData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await res.json();
    console.log(data.email);
}

getData();

function throttle(fn, delay) {
    let last = 0;

    return function () {
        let now = Date.now();

        if (now - last > delay) {
            last = now;
            fn();
        }
    };
}

window.addEventListener("scroll", throttle(() => {
    console.log("Scrolling...");
}, 1000));