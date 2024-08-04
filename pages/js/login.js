import { getDataFunc } from "../../admin/module/module.js"

export const login = () => {
    const data = getDataFunc()
    const users = data && data.users;
    //all global variable

    let loginEl = document.querySelector(".login")
    let loginForm = loginEl.querySelector(".login-form")
    let allInput = loginForm.querySelectorAll("input")
    let togglePBtn = loginForm.querySelector(".toggle-p-btn")

    //login code
    loginForm.onsubmit = (e) => {
        e.preventDefault();
        let email = users.find((item) => item.email == allInput[0].value.trim().toLowerCase())
        if (email != undefined) {
            if (email.password == allInput[1].value.trim().toLowerCase()) {
                if (email.status == "on") {
                    if (email.type == "user") {
                        window.location = "../../user/index.html"
                        sessionStorage.setItem("__au__", JSON.stringify(email));
                    }
                    if (email.type == "teacher") {
                        window.location = "../../admin/index.html"
                        sessionStorage.setItem("__au__", JSON.stringify(email));
                    }
                    if (email.type == "admin") {
                        window.location = "../../admin/index.html"
                        sessionStorage.setItem("__au__", JSON.stringify(email));
                    }
                }
                else {

                    swal("You are blocked", "Please contact your branch", "warning")
                }
            }
            else {
                swal("Wrong credentials", "Please check your login credentials", "warning")
            }
        }
        else {
            swal("Wrong credentials", "Please check your login credentials", "warning")
        }
    }

    //toggle password
    togglePBtn.onclick = () => {
        if (allInput[1].type == "password") {
            allInput[1].type = "text"
            togglePBtn.innerHTML = `<i class="fa fa-eye"></i>`
        }
        else {
            allInput[1].type = "password"
            togglePBtn.innerHTML = `<i class="fa fa-eye-slash"></i>`
        }
    }

}