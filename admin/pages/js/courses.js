import { registerFn, getDataFunc, formatDateFunc, createOptionsFunc, updateDataFunc, isConfirmFunc } from "../../module/module.js"

let data = getDataFunc()
let category = data && data.category ? data.category : []
export const categoryFunc = () => {
    // let category = data ? data.category ? data.category : [] : []

    //global variables
    let courseEl = document.querySelector(".courses")
    let categoryModal = courseEl.querySelector("#category-modal")
    let formBtn = categoryModal.querySelector(".btn-close")
    let categoryForm = courseEl.querySelector(".category-form")
    let categoryList = courseEl.querySelector(".category-list")
    let categoryAddBtn=courseEl.querySelector(".btn-category-add")
    let allFormInput=categoryForm.querySelectorAll("input")
    let allFormBtn = categoryForm.querySelectorAll("button")

    //store category code
    categoryForm.onsubmit = (e) => {
        e.preventDefault()
        registerFn(categoryForm, category, "category")

        setTimeout(() => {
            formBtn.click()
            readCategory()
        }, 100)

        let courseForm = courseEl.querySelector(".course-form")
        let courseCategoryEl = courseForm.querySelector(".course-category")
        //show category in select
        createOptionsFunc(category, courseCategoryEl)

    }

    function deleteFunc(){
        let allDelBtn= categoryList.querySelectorAll(".del-btn")
        allDelBtn.forEach((btn,index)=>{
            btn.onclick= async()=>{
                let cnf= await isConfirmFunc()
                if(cnf)
                {
                    category.splice(index,1)
                    updateDataFunc(category,"category")
                    readCategory()
                }
            }
        })
    }
    
    function editFunc(){
        let allEditBtn = categoryList.querySelectorAll(".edit-btn")
        allEditBtn.forEach((btn,index)=>{
            btn.onclick=()=>{
                categoryAddBtn.click()
                let string= btn.getAttribute('data')
                let data= JSON.parse(string)
                allFormInput[0].value=data.category
                allFormBtn[0].classList.add("d-none")
                allFormBtn[1].classList.remove("d-none")
                allFormBtn[1].onclick=()=>{
                    registerFn(categoryForm,category,"category",index)
                    window.location.reload()
                    formBtn.click()
                }
            }
        })
    }


    //read category code
    const readCategory = () => {
        categoryList.innerHTML = ""
        category.forEach((item, index) => {
            let stringData=JSON.stringify(item)
            categoryList.innerHTML += `
                <tr>
                    <td>${index + 1}</td>

                    <td>${item.category}</td>

                    <td class="text-nowrap">${formatDateFunc(item.createdAt, "time")}</td>
                    <td class="text-nowrap">
                        <button data='${stringData}' class="edit-btn text-green-300">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button class="del-btn text-red-300">
                            <i class="fa-regular fa-trash-can"></i>

                        </button>
                    </td>
                </tr>
            `
        })
        deleteFunc()
        editFunc()
    }
    readCategory()
    
}



export const courseFunc = () => {
    let data = getDataFunc()
    // let course = data ? data.course ? data.course : [] : []
    let course = data && data.course ? data.course : []
    let courseEl = document.querySelector(".courses")
    let courseModal = courseEl.querySelector("#course-modal")
    let formBtn = courseModal.querySelector(".btn-close")
    let courseList = courseEl.querySelector(".course-list")
    let courseForm = courseEl.querySelector(".course-form")
    let courseCategoryEl = courseForm.querySelector(".course-category")
    let addCourseBtn=courseEl.querySelector(".btn-add-course")
    let allFormInput=courseForm.querySelectorAll("input")
    let allFormSelect=courseForm.querySelectorAll("select")
    let textAreaEl=courseForm.querySelector("textarea")
    let allFormBtn=courseForm.querySelectorAll("button")
    
    //register code
    courseForm.onsubmit = (e) => {
        e.preventDefault()
        registerFn(courseForm, course, "course")
        setTimeout(() => {
            formBtn.click()
            readCourse()
        }, 100)
    }
    
    //show category in select
    createOptionsFunc(category, courseCategoryEl)
    
    //delete code
    function deleteFunc (){
        let allDelBtn = courseList.querySelectorAll(".del-btn")
        // console.log(allDelBtn)
        allDelBtn.forEach((btn, index) => {
            btn.onclick = async () => {
                let cnf = await isConfirmFunc()
                if(cnf)
                    {
                        course.splice(index,1)
                        updateDataFunc(course,"courses")
                        readCourse()
                    }
                }
            })
            
        }
        
        
        function editFunc(){
            let allEditBtn=courseList.querySelectorAll(".edit-btn")
            allEditBtn.forEach((btn,index)=>{
            btn.onclick=()=>{
                addCourseBtn.click()
                let string=btn.getAttribute('data')
                let data=JSON.parse(string)
                // console.log(data)
                allFormInput[1].value=data.name
                allFormInput[2].value=data.link
                allFormInput[3].value=data.price
                data.live? allFormInput[4].checked=true : allFormInput[4].checked=false
                data.free? allFormInput[5].checked=true : allFormInput[5].checked=false
                textAreaEl.value=data.desc
                allFormSelect[0].value=data.category
                allFormSelect[1].value=data.duration
                allFormBtn[0].classList.add("d-none")
                allFormBtn[1].classList.remove("d-none")
                allFormBtn[1].onclick=()=>{
                    registerFn(courseForm,course,"courses",index)
                    window.location.reload()
                    formBtn.click()
                }
            }
        })
    }


    //read course code
    const readCourse = () => {
        courseList.innerHTML = ""
        course.forEach((item, index) => {
            let stringData=JSON.stringify(item)
            // console.log(item)
            courseList.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td><img src="${item.profile}" width="40px"></td>
                <td>${item.category}</td>
                <td>${item.name}</td>
                <td><a href="${item.link}">Link</a></td>
                <td>${item.price}</td>
                <td>${item.duration}</td>
                <td>${formatDateFunc(item.createdAt)}</td>
                <td class="text-nowrap">
                    <button data='${stringData}' class=" edit-btn text-green-300">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button class="del-btn text-red-300">
                        <i class="fa-regular fa-trash-can"></i>
            </tr>
            `
        })
        deleteFunc()
        editFunc()
    }
    readCourse()
}