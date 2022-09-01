
let wednesdayAssignment = fetch('https://jsonplaceholder.typicode.com/posts/')
.then(res => res.json()).then(val => {
 let result = val.map(user => `<br><br><li>${user.title}</li>`)

 document.body.innerHTML = result.join("")
})

console.log("checking22222",wednesdayAssignment);