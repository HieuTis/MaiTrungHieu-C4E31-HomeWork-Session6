3.
let newPost = {
    "name":"Hieu",
    "salary":"3000",
    "age":"22",
    
}



// let name = document.getElementById('name');
// let salary = document.getElementById('salary');
// let age = document.getElementById('age');
// let button = document.getElementById('button');
// let myForm = document.getElementById('myForm')

// let newPost = {
//     "name" : name,
//     "salary": salary,
//     "age": age,
// }

// myForm.addEventListener('submit',() => {

fetch(`http://dummy.restapiexample.com/api/v1/create`, {
    method: 'post',
    body: JSON.stringify(newPost)

})

.then(function(response){
    return response.json()
})

.then(function(data){
    console.log('post request response data',data)
})
