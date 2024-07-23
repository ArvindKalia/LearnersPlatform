import { createOptionsFunc, formatDateFunc, getDataFunc, isConfirmFunc, registerFn, updateDataFunc } from "../../module/module.js";

let data = getDataFunc()
// console.log(data)
let category = data && data.category ? data.category : []
let course = data && data.course ? data.course : []
// console.log(data)

export const topicFunc = () => {
    let topic = data && data.topic ? data.topic : []
    let topicEl = document.querySelector(".topics")
    let topicModal = topicEl.querySelector("#topic-modal")
    let topicForm = topicEl.querySelector(".topic-form")
    let topicCloseBtn = topicModal.querySelector(".btn-close")
    let topicCategoryEl = topicForm.querySelector(".category-select")
    let topicCourseEl = topicForm.querySelector(".course-select")
    let topicCategorySEl = topicEl.querySelector(".topic-cat-select")
    let topicCourseSEl = topicEl.querySelector(".topic-course-select")
    let topicList= topicEl.querySelector(".topic-list")
    let addTopicBtn= topicEl.querySelector(".btn-add-topic")
    let allFormInput = topicForm.querySelectorAll("input")
    let allFormSelect = topicForm.querySelectorAll("select")
    let allFormBtn= topicForm.querySelectorAll("button")

    //register/add code
    topicForm.onsubmit = (e) => {
        e.preventDefault()
        registerFn(topicForm, topic, "topic")
        setTimeout(() => {
            topicCloseBtn.click()
            readTopic()
        }, 100)
    }


    //show option in select tags
    createOptionsFunc(category, topicCategoryEl, "category")
    topicCategoryEl.onchange = () => {
        let filter = course.filter((item) => (item.category == topicCategoryEl.value))
        createOptionsFunc(filter, topicCourseEl, "name")
        
    }
    createOptionsFunc(category, topicCategorySEl, "category")
    topicCategorySEl.onchange=()=>{
        let filter=course.filter((item)=>(item.category==topicCategorySEl.value))
        createOptionsFunc(filter, topicCourseSEl, "name")
    }

    topicCloseBtn.onclick=()=>{
        allFormBtn[0].classList.remove("d-none")
        allFormBtn[1].classList.add("d-none")
        topicForm.reset('')
    }

    //delete function
    const deleteTopic=()=>{
        let allDelBtn=topicList.querySelectorAll(".del-btn")
        allDelBtn.forEach((btn,index)=>{
            btn.onclick=async()=>{
                let cnf= await isConfirmFunc()
                if (cnf)
                {
                    topic.splice(index,1)
                    updateDataFunc(topic,"topic")
                    readTopic()
                }
            }
        })
    }

    const editTopic=()=>{
        let allEditBtn= topicList.querySelectorAll(".edit-btn")
        allEditBtn.forEach((btn,index)=>{
            btn.onclick=()=>{
                addTopicBtn.click()
                let string=btn.getAttribute("data")
                let data= JSON.parse(string)
                allFormInput[0].value=data.name
                allFormSelect[0].value=data.category
                allFormSelect[1].innerHTML=`<option>${data.course}</option>`
                allFormBtn[0].classList.add("d-none")
                allFormBtn[1].classList.remove("d-none")
                allFormBtn[1].onclick=()=>{
                    registerFn(topicForm,topic,"topic",index)
                    setTimeout(()=>{
                        topicCloseBtn.click()
                        readTopic()
                    },100)
                }
            }
        })
    }

    //read function
    const readTopic=()=>{
        topicList.innerHTML=""
        topic.forEach((item,index)=>{
            let stringData= JSON.stringify(item)
            topicList.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.category}</td>
                <td>${item.course}</td>
                <td>${item.name}</td>
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
        deleteTopic()
        editTopic()
    }
    readTopic()

    

}
