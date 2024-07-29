import { createOptionsFunc, formatDateFunc, getDataFunc, isConfirmFunc, registerFn, updateDataFunc } from "../../module/module.js";

// console.log(data)
// console.log(data)

export const settingFunc = () => {
    let data = getDataFunc()
    let pageNoti = data && data.pageNoti ? data.pageNoti : []
    let settingEl = document.querySelector(".settings")
    let modal = settingEl.querySelector("#page-n-modal")
    let settingForm = settingEl.querySelector(".page-n-form")
    let settingCloseBtn = modal.querySelector(".btn-close")
    let allFormInput = settingForm.querySelectorAll("input")
    let allFormBtn = settingForm.querySelectorAll("button")
    let textAreaEl = settingForm.querySelector("textarea")
    let pageNPreview = settingEl.querySelector(".page-n-preview")
    let h1El = pageNPreview.querySelector("h1")
    let pageNList = settingEl.querySelector(".page-n-list")
    let addPageNBtn = settingEl.querySelector(".btn-page-n-add")



    //page n preview code
    textAreaEl.oninput = () => {
        h1El.innerHTML = textAreaEl.value
    }
    allFormInput[1].oninput = () => {
        pageNPreview.style.backgroundColor = allFormInput[1].value
    }
    allFormInput[2].oninput = () => {
        pageNPreview.style.color = allFormInput[2].value
    }

    //register/add code
    settingForm.onsubmit = (e) => {
        e.preventDefault()

        registerFn(settingForm, pageNoti, "pageNoti")
        setTimeout(() => {
            settingCloseBtn.click()
            readPage(pageNoti)
        }, 100)


    }

    settingCloseBtn.onclick = () => {
        allFormBtn[0].classList.remove("d-none")
        allFormBtn[1].classList.add("d-none")
        settingForm.reset('')
        h1El.innerHTML = ""
        pageNPreview.style.backgroundColor = ""
        h1El.style.color = ""

    }



    //delete function
    const deletePage = () => {
        let allDelBtn = pageNList.querySelectorAll(".del-btn")
        allDelBtn.forEach((btn, index) => {
            btn.onclick = async () => {
                let cnf = await isConfirmFunc()
                if (cnf) {
                    pageNoti.splice(index, 1)
                    updateDataFunc(pageNoti, "pageNoti")
                    readPage(pageNoti)
                }
            }
        })
    }

    const editPage = () => {
        let allEditBtn = pageNList.querySelectorAll(".edit-btn")
        allEditBtn.forEach((btn, index) => {
            btn.onclick = () => {
                addPageNBtn.click()
                let string = btn.getAttribute("data")
                let data = JSON.parse(string)
                console.log(data)
                h1El.innerHTML = data.notification
                pageNPreview.style.backgroundColor = data.bgcolor
                h1El.style.color = data.textcolor
                textAreaEl.value = data.notification
                allFormInput[0].value = data.page
                allFormInput[1].value = data.bgcolor
                allFormInput[2].value = data.textcolor
                allFormBtn[0].classList.add("d-none")
                allFormBtn[1].classList.remove("d-none")
                allFormBtn[1].onclick = () => {
                    registerFn(settingForm, pageNoti, "pageNoti", index, readPage)
                    topicCloseBtn.click()
                }
            }
        })
    }

    //read function
    const readPage = (array) => {
        pageNList.innerHTML = ""
        array.forEach((item, index) => {
            let stringData = JSON.stringify(item)
            pageNList.innerHTML += `
            <tr>
                    <td>${index + 1}</td>
                    <td>${item.notification}</td>
                    <td>${item.page}</td>
                    <td>${formatDateFunc(item.createdAt)}</td>
                    <td>
                        <button data='${stringData}' class="btn edit-btn text-green-400">
                            <i class="fa fa-edit"></i>
                        </button>
                        <button class="btn del-btn text-red-400">
                            <i class="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `
        })
        deletePage()
        editPage()
    }
    readPage(pageNoti)



}
