function toggleTheme(){
document.body.classList.toggle("light");
}

function openRegister(){
document.getElementById("registerBox").style.display="block";
}

function registerUser(){

alert("Аккаунт создан 🚀");

document.getElementById("registerBox").style.display="none";
}

function sendMessage(){

let input=document.getElementById("messageInput");

if(input.value.trim()!=""){

let div=document.createElement("div");

div.classList.add("message");

div.innerText=input.value;

document.getElementById("messages").appendChild(div);

input.value="";
}

}

function loginAdmin(){

let password=document.getElementById("adminPassword").value;

if(password==="1234"){

document.getElementById("adminPanel").style.display="block";

alert("Админ панель открыта 😎");

}else{

alert("Неверный пароль");

}

}

function addNews(){

let text=document.getElementById("newsInput").value;

if(text!=""){

let p=document.createElement("p");

p.innerText=text;

document.getElementById("newsList").appendChild(p);

}

}

function changeSchedule(){

let text=document.getElementById("scheduleInput").value;

document.getElementById("scheduleText").innerHTML=
text.replace(/\n/g,"<br>");

alert("Расписание обновлено 🚀");

}

function addPhoto(){

let url=document.getElementById("photoInput").value;

if(url!=""){

let img=document.createElement("img");

img.src=url;

img.style.width="100%";

img.style.borderRadius="25px";

img.style.marginTop="20px";

document.querySelector(".gallery").appendChild(img);

}

.student{
padding:40px;
border-radius:30px;
background:
rgba(255,255,255,0.05);

backdrop-filter:blur(20px);

transition:0.4s;
}

.student:hover{
transform:scale(1.05);
}

.card{
backdrop-filter:blur(20px);
}
document
.getElementById("uploadPhoto")
.addEventListener("change",function(event){

let file=event.target.files[0];

if(file){

let reader=new FileReader();

reader.onload=function(e){

let img=document.createElement("img");

img.src=e.target.result;

img.style.width="100%";

img.style.borderRadius="25px";

img.style.marginTop="20px";

document
.getElementById("realGallery")
.appendChild(img);

}

reader.readAsDataURL(file);

}

});