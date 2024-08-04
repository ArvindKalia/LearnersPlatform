import {getDataFunc,createOptionsFunc, registerFn} from "../../admin/module/module.js"
export const register=()=>{
    const data=getDataFunc()
    // console.log(data)
    let courses= data && data.course
    let users= data && data.users
    //all global variable
    let registerEl=document.querySelector(".register")
    let regForm=registerEl.querySelector(".register-form")
    let allregSEl=regForm.querySelectorAll("select")
    let allInput=regForm.querySelectorAll("input")
    let togglePBtn=regForm.querySelector(".toggle-p-btn")

    //show course in form
    createOptionsFunc(courses,allregSEl[1],"name")

    //Register Data
    regForm.onsubmit=(e)=>{
        e.preventDefault()
        let email=users.find((item)=>item.email==allInput[3].value.trim().toLowerCase())
        if(email==undefined)
        {
            registerFn(regForm,users,"users")
        }
        else{
            swal("User exists","This email already registered !","warning")
        }
    }

     //toggle password
     togglePBtn.onclick = () => {
        if (allInput[4].type == "password") {
            allInput[4].type = "text"
            togglePBtn.innerHTML = `<i class="fa fa-eye"></i>`
        }
        else {
            allInput[4].type = "password"
            togglePBtn.innerHTML = `<i class="fa fa-eye-slash"></i>`
        }
    }
}