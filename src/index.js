let myTitle=document.getElementById('card-title')
let  myImg=document.getElementById('card-image')
document.addEventListener('DOMContentLoaded',()=>{
document.getElementById('comments-list').innerText=''
fetchData()
likes()
addComment()
})
function fetchData(){

fetch('http://localhost:3000/images')
.then(response=>response.json())
.then(data=>{data.forEach(mydata=>{
    displayDetails(mydata)
    console.log(mydata)
   })
})
fetch('http://localhost:3000/comments')
.then(response=>response.json())
.then(data=>{data.forEach(mydata=>{
    displayComments(mydata.content)
   })
   
})
}

function displayDetails(data){
   
    myImg.src=data.image
    myTitle.innerText=data.title

    let myLikesBtn=document.getElementById('like-count')
    myLikesBtn.innerText=data.likes

  
}
function displayComments(mydata){
    let myComments =document.getElementById('comments-list')
    myComments.innerHTML+= `<li>${mydata} </li>`
}
function likes(){

    let count = 0;
    let myBtn=document.getElementById('like-button')
    myBtn.addEventListener('click',()=>{
        count=count+1
        let mySpan = document.getElementById('like-count')
        mySpan.textContent=`${count} likes`;
        
    })
}
function addComment()  {
    let form = document.getElementById('comment-form')
   form.addEventListener('submit', (event) => {
       let input = document.getElementById('comment');
       let myComments = document.getElementById('comments-list');
       myComments.innerHTML += `<li>${input.value}</li>`;
       
       event.preventDefault();
       form.reset();
   });
   }
   
