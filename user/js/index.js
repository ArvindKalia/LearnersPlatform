import {getDataFunc,registerFn} from "../../admin/module/module.js"
let userInfo;

//check user login or not
if(sessionStorage.getItem("__au__")!=null)
{
    userInfo=JSON.parse(sessionStorage.getItem("__au__"))
    console.log(userInfo)
}
else{
    window.location="../../index.html"
}

//global variables

let logoutBtn=document.querySelector(".logout-btn")
let profileEl=document.querySelector(".profile")
let userNameEl=document.querySelector(".user-name")
let courseListEl=document.querySelector(".course-list")
let letterEl=document.querySelector(".letter-name")
let userMForm=document.querySelector(".user-m-form")
let userMBtn=document.querySelector(".user-m-btn")
let allMFInput= userMForm.querySelectorAll("input")

//get data
let {course}=getDataFunc()
let {usersMsg}=getDataFunc()
let userCourse=userInfo.course


//logout
logoutBtn.onclick=()=>{
    logoutBtn.innerText="Please Wait...";
    sessionStorage.removeItem("__au__")
    setTimeout(()=>{
        window.location="../../index.html"

    },2000)
}

//show profile and name
profileEl.src=userInfo.profile
userNameEl.innerText=userInfo.name
letterEl.innerText=userInfo.name[0]

//filter course
let filter= course.filter((item)=>userCourse.includes(item.name))
filter.forEach((item,index)=>{
    courseListEl.innerHTML +=
    `
     <div class="card flex gap-y-4 p-3 bg-white shadow">
                <img src="${item.profile}" alt="">
                <div class="flex justify-between">
                    <h1 class="font-bold capitalize">${item.name}</h1>
                    <p>
                        <i class="fa fa-rupee"></i>
                        3000
                    </p>
                </div>
                <div class="flex justify-between">
                    <button class="btn ${item.free? "bg-green-400" : "bg-pink-400"} text-white">${item.free? "Free" : "Paid"}</button>
                    <button class="btn ${item.live? "bg-red-400" : "bg-yellow-500"} text-white">${item.live? "Live" : "Completed"}</button>
                    <a href="${item.link}">
                        <button class="btn bg-blue-400 text-white">Course Link</button>
                    </a>
                </div>
                <button class="btn bg-green-500 text-white">Syllabus</button>
            </div>
    `
})

//send message from user
userMBtn.onclick=()=>{
    allMFInput[1].value= userInfo.name;
    allMFInput[2].value= userInfo.email;
}

userMForm.onsubmit=(e)=>{
    e.preventDefault()
    registerFn(userMForm,usersMsg,"usersMsg")
}