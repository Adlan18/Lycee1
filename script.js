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

async function addHomework(){

let text =
document.getElementById(
"homeworkInput"
).value;

if(text.trim() !== ""){

await addDoc(

collection(
window.db,
"homework"
),

{

text:text

}

);

loadHomework();

}

}

async function loadHomework(){

let list =
document.getElementById(
"homeworkList"
);

list.innerHTML = "";

const querySnapshot =
await getDocs(

collection(
window.db,
"homework"
)

);

querySnapshot.forEach((doc)=>{

let div =
document.createElement("div");

div.classList.add("message");

div.innerText =
doc.data().text;

list.appendChild(div);

});

}

async function addGrade(){

let name =
document.getElementById(
"studentName"
).value;

let grade =
document.getElementById(
"studentGrade"
).value;

await addDoc(

collection(
window.db,
"grades"
),

{

name:name,
grade:grade

}

);

loadGrades();

}

async function loadGrades(){

let list =
document.getElementById(
"gradesList"
);

list.innerHTML = "";

const querySnapshot =
await getDocs(

collection(
window.db,
"grades"
)

);

querySnapshot.forEach((doc)=>{

let div =
document.createElement("div");

div.classList.add("message");

div.innerText =

doc.data().name
+
" — "
+
doc.data().grade;

list.appendChild(div);

});

}

async function addTopStudent(){

let text =
document.getElementById(
"topInput"
).value;

await addDoc(

collection(
window.db,
"topStudents"
),

{

text:text

}

);

loadTopStudents();

}

async function loadTopStudents(){

let list =
document.getElementById(
"topStudents"
);

list.innerHTML = "";

const querySnapshot =
await getDocs(

collection(
window.db,
"topStudents"
)

);

querySnapshot.forEach((doc)=>{

let div =
document.createElement("div");

div.classList.add("message");

div.innerText =
doc.data().text;

list.appendChild(div);

});

}

async function addNotification(){

let text =
document.getElementById(
"notificationInput"
).value;

await addDoc(

collection(
window.db,
"notifications"
),

{

text:text

}

);

loadNotifications();

}

async function loadNotifications(){

let list =
document.getElementById(
"notifications"
);

list.innerHTML = "";

const querySnapshot =
await getDocs(

collection(
window.db,
"notifications"
)

);

querySnapshot.forEach((doc)=>{

let div =
document.createElement("div");

div.classList.add("message");

div.innerText =
doc.data().text;

list.appendChild(div);

});

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

loadHomework();

loadGrades();

loadTopStudents();

loadNotifications();

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

}
