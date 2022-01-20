console.log("hii you are under ajax.js")

let fetchbtn = document.getElementById('fetchbtn');
fetchbtn.addEventListener('click',buttonclickHandler)


function buttonclickHandler() {

  console.log("you have clicked the fetchbtn");

  // Instantiate an xhr object
  const xhr = new XMLHttpRequest();


  //open the object ('ture' = asynchronous)
  xhr.open('get', 'text.txt', true);
  xhr.open('get','https://jsonplaceholder.typicode.com/todos/1', true);
  

  // for post request 
  // xhr.open('post','http://dummy.restapiexample.com/api/v1/create', true);
  // xhr.getAllResponseHeaders('content-type','application/json')



  // what to do when response is ready
  xhr.onload = function() {

    if(this.status === 200){
      console.log(this.responseText);

    }
    else{
      console.log("some error occured");
    }

  }

  // params
  // params = `{"name":"test3","salary":"123","age":"23"}`

  //send the response
  // xhr.send(params);
  xhr.send();


}


let lists = document.getElementById('popBtn');
lists.addEventListener('click',popHandler)

function popHandler() {
  // Instantiate an xhr object
  const xhr = new XMLHttpRequest();


  //open the object ('ture' = asynchronous)
  xhr.open('get','http://dummy.restapiexample.com/api/v1/employees', true);
  



  // what to do when response is ready
  xhr.onload = function() {

    if(this.status === 200){
     let obj = JSON.parse(this.responseText);
     console.log(obj)

     let list  = document.getElementById('list');
     str = "";
     for (key in obj)
     {
        str += `<li>${obj[key].employee_name}</li>`;

     }
     list.innerHTML = str;

    }
    else{
      console.log("some error occured");
    }

  }

  xhr.send();
}