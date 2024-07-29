import { registerFn, getDataFunc, formatDateFunc, isConfirmFunc, updateDataFunc } from "../../module/module.js"

export const usersFn = () => {
    let data = getDataFunc()
    // let users=data ? data.users? data.users : [] : []
    let users = data && data.users ? data.users : []
    let usersMsg = data && data.usersMsg ? data.usersMsg : []
    let usersEl = document.querySelector(".users")
    let modal = usersEl.querySelector("#users-modal")
    let btnClose = modal.querySelector(".btn-close")
    let userForm = usersEl.querySelector(".users-form")
    let userList = usersEl.querySelector(".user-list")
    let addUserBtn = usersEl.querySelector(".add-user-btn")
    let allFormInput = userForm.querySelectorAll("input")
    let allFormSelect = userForm.querySelectorAll("select")
    let textAreaEl = userForm.querySelector("textarea")
    let allFormBtn = userForm.querySelectorAll("button")
    let togglePBtn = userForm.querySelector(".toggle-p-btn")
    let userMModal = usersEl.querySelector("#user-m-modal")
    let mBtnClose = userMModal.querySelector(".btn-close")
    let userMForm = userMModal.querySelector(".user-m-form")
    let allUMFormInput = userMForm.querySelectorAll("input")

    //user register coding
    userForm.onsubmit = (e) => {
        e.preventDefault()
        let email = users.find((item) => item.email == allFormInput[3].value.trim().toLowerCase())
        if (email == undefined) {
            registerFn(userForm, users, "users")
            setTimeout(() => {
                btnClose.click()
                readUser(users)
            }, 100)
        }
        else {
            swal("User Exist", "This email already exists!", "warning")
        }
    }

    //toggle password
    togglePBtn.onclick = () => {
        if (allFormInput[4].type == "password") {
            allFormInput[4].type = "text"
            togglePBtn.innerHTML = `<i class="fa fa-eye"></i>`
        }
        else {
            allFormInput[4].type = "password"
            togglePBtn.innerHTML = `<i class="fa fa-eye-slash"></i>`
        }
    }

    btnClose.onclick = () => {
        allFormBtn[0].classList.remove("d-none")
        allFormBtn[1].classList.add("d-none")
        userForm.reset('')
    }

    //send user message code
    const sendUserMsg = () => {
        let allUserMBtn = userList.querySelectorAll(".user-m-btn")
        allUserMBtn.forEach((btn, index) => {
            btn.onclick = () => {
                let name = btn.getAttribute("name")
                let email = btn.getAttribute("email")
                allUMFormInput[1].value = name
                allUMFormInput[2].value = email
            }
        })
    }

    //store user message code
    userMForm.onsubmit = (e) => {
        e.preventDefault()
        registerFn(userMForm, usersMsg, "usersMsg")
        setTimeout(() => {
            mBtnClose.click()
            readUser(users)
        }, 100)
    }

    //read user code
    const readUser = (array) => {
        userList.innerHTML = ""
        array.forEach((item, index) => {
            // console.log(item)
            let stringData = JSON.stringify(item)
            userList.innerHTML += `
            <div class="p-4 bg-white shadow-sm">
                        <div class="flex border-b py-3 justify-between items-center">
                            <div class="flex justify-center items-center gap-3">
                                <img src="${item.profile}" width="50" alt="">
                                <div>
                                    <h5 class="font-semibold">${item.name}</h5>
                                    <p class="text-gray">
                                        <i class="fa fa-location"></i>
                                        ${item.address}
                                    </p>
                                </div>
                            </div>
                            <div class="dropdown dropstart">
                                <button role="button" data-bs-toggle="dropdown"
                                    class="btn bg-gray-100 rounded-full w-11 h-11">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                <div class="dropdown-menu">
                                    <button data='${stringData}' class="flex edit-btn items-center justify-between dropdown-item text-blue-600">
                                        <i class="fa fa-edit"></i>
                                    </button>
                                    <button class="flex del-btn items-center justify-between dropdown-item text-red-600">
                                        <i class="fa fa-trash"></i>

                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between items-center my-3">
                            <div class="flex justify-between items-center gap-3 ">
                                <button
                                    class="rounded-full w-9 h-9 btn bg-green-100 text-green-600 flex justify-center items-center">
                                    <i class="fa-solid fa-indian-rupee-sign"></i>
                                </button>
                                <h5>Payments</h5>
                            </div>
                            <div>
                                <h5 class="text-gray-500 font-semibold">${item.price}</h5>
                            </div>
                        </div>
                        <div class="flex justify-between items-center my-3">
                            <div class="flex justify-between items-center gap-3 ">
                                <button
                                    class="rounded-full w-9 h-9 btn bg-red-100 text-red-600 flex justify-center items-center">
                                    <i class="fa-solid fa-video"></i>
                                </button>
                                <h5>Total Course</h5>
                            </div>
                            <div>
                                <h5 class="text-gray-500 font-semibold">
                                ${item.course ? item.course.length : 0}
                                </h5>
                            </div>
                        </div>
                        <div class="flex justify-between items-center my-3">
                            <div class="flex justify-between items-center gap-3 ">
                                <button
                                    class="rounded-full w-9 h-9 btn bg-blue-100 text-blue-600 flex justify-center items-center">
                                    <i class="fa-regular fa-calendar"></i>
                                </button>
                                <h5>Joined</h5>
                            </div>
                            <div>
                                <h5 class="text-gray-500 font-semibold">${formatDateFunc(item.createdAt)}</h5>
                            </div>
                        </div>
                        <div class="flex justify-between items-center my-3">
                            <div class="flex justify-between items-center gap-3 ">
                                <button
                                    class="rounded-full w-9 h-9 btn bg-pink-100 text-pink-600 flex justify-center items-center">
                                    <i class="fa-solid fa-user"></i>
                                </button>
                                <h5>Type</h5>
                            </div>
                            <div>
                                <h5 class="text-gray-500 font-semibold">${item.type ? item.type : none}</h5>
                            </div>
                        </div>
                        <div class="flex justify-center items-center">
                            <div class="border-b w-full"></div>
                            <div class="flex items-center justify-between w-full">
                                <button name="${item.name}" email="${item.email}"
                                data-bs-toggle="modal" 
                                data-bs-target="#user-m-modal" 
                                class="user-m-btn btn bg-blue-50 text-blue-600 rounded-full">
                                    <i class="fa-regular fa-envelope"></i>
                                </button>
                                <div class="border-b w-full"></div>
                                <button class="btn bg-red-50 ${item.status ? "d-none" : ""} text-red-600 rounded-full">
                                    <i class="fa-solid fa-ban"></i>
                                </button>
                                <button class="btn bg-green-50 text-green-600 ${item.status ? "" : "d-none"} rounded-full">
                                    <i class="fa-solid fa-check"></i>
                                </button>
                            </div>
                            <div class="border-b w-full"></div>
                        </div>
                    </div>
            `
        })
        deleteFunc()
        editFunc()
        sendUserMsg()
    }
    readUser(users)

    //delete code
    function deleteFunc() {
        let allDelBtn = userList.querySelectorAll(".del-btn")
        allDelBtn.forEach((btn, index) => {
            btn.onclick = async () => {
                let cnf = await isConfirmFunc()
                if (cnf) {
                    users.splice(index, 1)
                    updateDataFunc(users, "users")
                    readUser(users)
                }
            }
        })

    }

    //edit code
    function editFunc() {
        // console.log(users)
        let allEditBtn = userList.querySelectorAll(".edit-btn")
        allEditBtn.forEach((btn, index) => {
            btn.onclick = () => {
                addUserBtn.click()
                let stringData = btn.getAttribute('data')
                const data = JSON.parse(stringData)
                allFormInput[1].value = data.name
                allFormInput[2].value = data.mobile
                allFormInput[3].value = data.email
                allFormInput[4].value = data.password
                allFormInput[5].value = data.father
                data.status ? allFormInput[6].checked = true : allFormInput[6].checked = false
                data.type == "admin" ? allFormInput[7].checked = true : allFormInput[7].checked = false
                data.type == "teacher" ? allFormInput[8].checked = true : allFormInput[8].checked = false
                data.type == "user" ? allFormInput[9].checked = true : allFormInput[9].checked = false
                allFormInput[10].value = data.price
                allFormSelect[0].value = data.qualifications
                let options = allFormSelect[1].querySelectorAll("option")
                options.forEach((op, index) => {
                    if (data.course && data.course.includes(op.value)) {
                        op.selected = true
                    }
                })
                textAreaEl.value = data.address;
                allFormBtn[0].classList.add("d-none")
                allFormBtn[1].classList.remove("d-none")
                allFormBtn[1].onclick = () => {
                    registerFn(userForm, users, "users", index, readUser)
                    btnClose.click()
                }
            }
        })
    }

}