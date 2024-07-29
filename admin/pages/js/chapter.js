import { createOptionsFunc, formatDateFunc, getDataFunc, isConfirmFunc, registerFn, updateDataFunc } from "../../module/module.js";

let data = getDataFunc()
let category = data && data.category ? data.category : []
let course = data && data.course ? data.course : []
let topic = data && data.topic ? data.topic : []

export const chapterFunc = () => {
    let chapter = data && data.chapter ? data.chapter : []
    let chapterEl = document.querySelector(".chapters")
    let chapterModal = chapterEl.querySelector("#chapter-modal")
    let chapterForm = chapterEl.querySelector(".chapter-form")
    let chapterCloseBtn = chapterModal.querySelector(".btn-close")
    let chapterCategoryEl = chapterForm.querySelector(".category-select")
    let chapterCourseEl = chapterForm.querySelector(".course-select")
    let chapterTopicEl = chapterForm.querySelector(".topic-select")
    let chapterCategorySEl = chapterEl.querySelector(".chapter-cat-select")
    let chapterCourseSEl = chapterEl.querySelector(".chapter-course-select")
    let chapterTopicSEl = chapterEl.querySelector(".chapter-topic-select")
    let chapterList = chapterEl.querySelector(".chapter-list")
    let addchapterBtn = chapterEl.querySelector(".btn-add-chapter")
    let allFormInput = chapterForm.querySelectorAll("input")
    let allFormSelect = chapterForm.querySelectorAll("select")
    let allFormBtn = chapterForm.querySelectorAll("button")

    //register/add code
    chapterForm.onsubmit = (e) => {
        e.preventDefault()
        let chapters = chapter.find((item) => {
            return (
                item.course[0] == allFormSelect[1].value &&
                item.topic == allFormSelect[2].value &&
                item.name == allFormInput[0].value.trim().toLocaleLowerCase()
            )
        })
        if (chapters == undefined) {
            registerFn(chapterForm, chapter, "chapter")
            setTimeout(() => {
                chapterCloseBtn.click()
                readChapter(chapter)
            }, 100)
        }
        else {
            swal("Chapter Exist", "This chapter already exists!", "warning")
        }

    }

    //show option in select tags
    createOptionsFunc(category, chapterCategoryEl, "category")
    chapterCategoryEl.onchange = () => {
        let filter = course.filter((item) => (item.category == chapterCategoryEl.value))
        createOptionsFunc(filter, chapterCourseEl, "name")
    }
    chapterCourseEl.onchange = () => {
        let filter = topic.filter((item) => (item.course == chapterCourseEl.value))
        createOptionsFunc(filter, chapterTopicEl, "name")
    }


    createOptionsFunc(category, chapterCategorySEl, "category")
    chapterCategorySEl.onchange = () => {
        let filter = course.filter((item) => (item.category == chapterCategorySEl.value))
        createOptionsFunc(filter, chapterCourseSEl, "name")
    }
    chapterCourseSEl.onchange = () => {
        let filter = topic.filter((item) => (item.course == chapterCourseSEl.value))
        console.log(filter)
        createOptionsFunc(filter, chapterTopicSEl, "name")
    }
    chapterTopicSEl.onchange = () => {
        //this is to add an index number with id property so that we can use it after filter >>>
        let tmp = chapter.map((item, index) => ({ ...item, id: index }))
        let filter = tmp.filter((item) => (
            item.course[0]==chapterCourseSEl.value &&
            item.topic == chapterTopicSEl.value)
        )
        readChapter(filter)
    }

    chapterCloseBtn.onclick = () => {
        allFormBtn[0].classList.remove("d-none")
        allFormBtn[1].classList.add("d-none")
        chapterForm.reset('')
    }

    //delete function
    const deleteChapter = () => {
        let allDelBtn = chapterList.querySelectorAll(".del-btn")
        allDelBtn.forEach((btn) => {
            btn.onclick = async () => {
                let index = btn.getAttribute("index")
                let cnf = await isConfirmFunc()
                if (cnf) {
                    chapter.splice(index, 1)
                    updateDataFunc(chapter, "chapter")
                    readChapter(chapter)
                }
            }
        })
    }

    const editChapter = () => {
        let allEditBtn = chapterList.querySelectorAll(".edit-btn")
        allEditBtn.forEach((btn) => {
            btn.onclick = () => {
                let index = btn.getAttribute("index")
                addchapterBtn.click()
                let string = btn.getAttribute("data")
                let data = JSON.parse(string)
                allFormInput[0].value = data.chapter
                allFormInput[1].value = data.notes
                allFormInput[2].value = data.video
                allFormSelect[0].value = data.category
                allFormSelect[1].innerHTML = `<option>${data.course}</option>`
                allFormSelect[2].innerHTML = `<option>${data.topic}</option>`
                allFormBtn[0].classList.add("d-none")
                allFormBtn[1].classList.remove("d-none")
                allFormBtn[1].onclick = () => {
                    registerFn(chapterForm, chapter, "chapter", index, readChapter)
                    chapterCloseBtn.click()
                }
            }
        })
    }

    //read function
    const readChapter = (array) => {
        chapterList.innerHTML = ""
        array.forEach((item, index) => {
            // console.log(item)
            let stringData = JSON.stringify(item)
            chapterList.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.category}</td>
                <td>${item.course}</td>
                <td>${item.topic}</td>
                <td>${item.chapter}</td>
                <td>
                <a href="${item.notes}">Link</a>
                </td>
                <td>
                <a href="${item.video}">Link</a>
                </td>
                <td>${formatDateFunc(item.createdAt)}</td>
                <td class="text-nowrap">
                    <button index='${item.id ? item.id : index}' data='${stringData}' class=" edit-btn text-green-300">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button index='${item.id ? item.id : index}' class="del-btn text-red-300">
                        <i class="fa-regular fa-trash-can"></i>
            </tr>
            `
        })
        deleteChapter()
        editChapter()
    }
    readChapter(chapter)



}
