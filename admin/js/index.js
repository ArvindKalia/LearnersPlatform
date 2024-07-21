// start all global variable
let togglerBtn = document.querySelector(".toggler-btn")
let sideNav = document.querySelector(".side-nav")
let pageContent = document.querySelector(".page-content")
let page = document.querySelector(".page")
let menuItem = document.querySelectorAll(".menu-items")
// end all global variable

// start toggler coding
// togglerBtn.addEventListener("click",()=>{
// sideNav.classList.toggle("active")
// pageContent.classList.toggle("active")
// })
togglerBtn.onclick = () => {
    sideNav.classList.toggle("active")
    pageContent.classList.toggle("active")

}
// end toggler coding

//Import routes from pages folder

import dashboard from "../pages/dashboard.js"
import courses from "../pages/courses.js"
import users from "../pages/users.js"
import settings from "../pages/settings.js"
import notFound from "../pages/not-found.js"

//Import js-file for routes

import { dashboardFn } from "../pages/js/dashboard.js"
import { usersFn } from "../pages/js/users.js"
import { courseFunc,categoryFunc } from "../pages/js/courses.js"

const routes={
    "/":dashboard,
    "/courses":courses,
    "/users":users,
    "/settings":settings
}



//handle route changes
const handleRouteChange = () => {
    // console.log(window.location.hash)
    let path = window.location.hash.replace("#", "") || "/"
    // console.log(path)
    page.innerHTML = routes[path] || notFound
    if(path=="/")
    {
        dashboardFn()
    }
    else if(path=="/users")
    {
        usersFn()
    }
    else if(path=="/courses")
    {
        courseFunc()
        categoryFunc()
    }

}

//set event listener for navigation links
menuItem.forEach(item => {
    item.onclick = () => {
        menuItem.forEach(el => {
            el.classList.remove("active")
        })
        // console.log(item)
        let path = item.getAttribute("to")
        window.location.hash = path
        item.classList.add("active")

    }
})

// //handle hash
window.onhashchange = () => {
    handleRouteChange()
}

//load initial route
handleRouteChange()