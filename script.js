function toggleTheme(){

document.body.classList.toggle(
"light"
);

}

function loginAdmin(){

let password =
document.getElementById(
"adminPassword"
).value;

if(password === "1234"){

document
.getElementById("adminPanel")
.style.display = "block";

localStorage.setItem(
"adminLogged",
"true"
);

}else{

alert("Неверный пароль ❌");

}

}

function logoutAdmin(){

document
.getElementById("adminPanel")
.style.display = "none";

localStorage.removeItem(
"adminLogged"
);

}

async function addNews(){

let text =
document.getElementById(
"newsInput"
).value;

if(text.trim() !== ""){

await addDoc(

collection(
window.db,
"news"
),

{

text:text

}

);

loadNews();

}

}

async function loadNews(){

let newsList =
document.getElementById(
"newsList"
);

newsList.innerHTML = "";

const querySnapshot =
await getDocs(

collection(
window.db,
"news"
)

);

querySnapshot.forEach((doc)=>{

let div =
document.createElement("div");

div.classList.add("message");

div.innerText =
doc.data().text;

newsList.appendChild(div);

});

}

function addHomework(){

let text =
document.getElementById(
"homeworkInput"
).value;

if(text.trim() !== ""){

let div =
document.createElement("div");

div.classList.add("message");

div.innerText = text;

document
.getElementById("homeworkList")
.appendChild(div);

localStorage.setItem(
"homeworkData",
document
.getElementById("homeworkList")
.innerHTML
);

}

}

function addGrade(){

let name =
document.getElementById(
"studentName"
).value;

let grade =
document.getElementById(
"studentGrade"
).value;

if(name && grade){

let div =
document.createElement("div");

div.classList.add("message");

div.innerText =
name + " — " + grade;

document
.getElementById("gradesList")
.appendChild(div);

localStorage.setItem(
"gradesData",
document
.getElementById("gradesList")
.innerHTML
);

}

}

function addTopStudent(){

let text =
document.getElementById(
"topInput"
).value;

let div =
document.createElement("div");

div.classList.add("message");

div.innerText = text;

document
.getElementById("topStudents")
.appendChild(div);

localStorage.setItem(
"topData",
document
.getElementById("topStudents")
.innerHTML
);

}

function addNotification(){

let text =
document.getElementById(
"notificationInput"
).value;

let div =
document.createElement("div");

div.classList.add("message");

div.innerText = text;

document
.getElementById("notifications")
.appendChild(div);

localStorage.setItem(
"notificationData",
document
.getElementById("notifications")
.innerHTML
);

}

function askAI(){

let text =
document.getElementById(
"aiInput"
).value.toLowerCase();

let response = "";

if(text.includes("привет")){

response = "Привет 😎";

}else if(text.includes("дз")){

response = "Домашнее задание есть 📖";

}else if(text.includes("расписание")){

response = "Смотри расписание 📚";

}else{

response = "Я пока не знаю 😅";

}

document
.getElementById("aiResponse")
.innerText = response;

}

function saveNote(){

let note =
document.getElementById(
"noteInput"
).value;

localStorage.setItem(
"savedNote",
note
);

document
.getElementById("savedNote")
.innerText = note;

}

document
.getElementById("uploadPhoto")
.addEventListener("change",function(event){

let file =
event.target.files[0];

if(file){

let reader =
new FileReader();

reader.onload = function(e){

let img =
document.createElement("img");

img.src = e.target.result;

document
.getElementById("realGallery")
.appendChild(img);

};

reader.readAsDataURL(file);

}

});

async function registerUser(){

let email =
document.getElementById(
"email"
).value;

let password =
document.getElementById(
"password"
).value;

try{

await createUserWithEmailAndPassword(
window.auth,
email,
password
);

document
.getElementById("userStatus")
.innerText =
"Аккаунт создан 😎";

}catch(error){

alert(error.message);

}

}

async function loginUser(){

let email =
document.getElementById(
"email"
).value;

let password =
document.getElementById(
"password"
).value;

try{

await signInWithEmailAndPassword(
window.auth,
email,
password
);

document
.getElementById("userStatus")
.innerText =
"Вы вошли 😎";

}catch(error){

alert(error.message);

}

}

async function logoutUser(){

await signOut(window.auth);

document
.getElementById("userStatus")
.innerText =
"Вы вышли 😅";

}

for(let i=0;i<120;i++){

let star =
document.createElement("div");

star.classList.add("star");

star.style.left =
Math.random()*100+"%";

star.style.top =
Math.random()*100+"%";

star.style.animationDuration =
20 + Math.random()*50 + "s";

document
.querySelector(".stars")
.appendChild(star);

}

window.onload = function(){

loadNews();

if(
localStorage.getItem(
"adminLogged"
)==="true"
){

document
.getElementById("adminPanel")
.style.display = "block";

}

let note =
localStorage.getItem(
"savedNote"
);

if(note){

document
.getElementById("savedNote")
.innerText = note;

}

let homework =
localStorage.getItem(
"homeworkData"
);

if(homework){

document
.getElementById("homeworkList")
.innerHTML = homework;

}

let grades =
localStorage.getItem(
"gradesData"
);

if(grades){

document
.getElementById("gradesList")
.innerHTML = grades;

}

let top =
localStorage.getItem(
"topData"
);

if(top){

document
.getElementById("topStudents")
.innerHTML = top;

}

let notifications =
localStorage.getItem(
"notificationData"
);

if(notifications){

document
.getElementById("notifications")
.innerHTML = notifications;

}

}
