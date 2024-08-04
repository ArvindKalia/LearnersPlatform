// start all global variable
let page = document.querySelector(".page")
let menuItem = document.querySelectorAll(".menu-items")
// end all global variable

// start toggler coding
// togglerBtn.addEventListener("click",()=>{
// sideNav.classList.toggle("active")
// pageContent.classList.toggle("active")
// })

// end toggler coding

//Import routes from pages folder
import registerFunc from "../pages/register.js"
import loginFunc from "../pages/login.js"
import notFound from "../pages/not-found.js"

import { login } from "../pages/js/login.js"
import {register} from "../pages/js/register.js"
// import { usersFn } from "../pages/js/users.js"
// import { courseFunc,categoryFunc } from "../pages/js/courses.js"
// import { topicFunc } from "../pages/js/topics.js"
// import { chapterFunc } from "../pages/js/chapter.js"
// import { settingFunc } from "../pages/js/settings.js"

const routes={
    "/":"/",
    "/register":registerFunc,
    "/login":loginFunc

}



//handle route changes
const handleRouteChange = () => {
    // console.log(window.location.hash)
    let path = window.location.hash.replace("#", "") || "/"
    // console.log(path)
    page.innerHTML = routes[path] || notFound
    if(path=="/")
    {
        // dashboardFn()
    }
    else if(path=="/register")
        {
        register()
    }
    else if(path=="/login")
        {
        login()
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