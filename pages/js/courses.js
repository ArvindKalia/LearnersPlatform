import { getDataFunc } from "../../admin/module/module.js"

//get data
let data = getDataFunc()
const courseArr = data.course

export const courses = () => {
    let courseList = document.querySelector(".course-list");
    courseArr.forEach((item, index) => {
        courseList.innerHTML += `
        <div class="card flex gap-y-4 p-3 bg-white shadow">
                     <img src="${item.profile}" alt="">
                     <div class="flex justify-between">
                            <h1 class="capitalize font-bold">${item.name}</h1>
                            <p>
                                   <i class="fa fa-rupee"></i>
                                   ${item.price}
                            </p>
                     </div>
                     <div class="flex justify-between">
                    <button class="btn ${item.free ? "bg-green-400" : "bg-pink-400"} text-white">${item.free ? "Free" : "Paid"}</button>
                    <button class="btn ${item.live ? "bg-red-400" : "bg-yellow-500"} text-white">${item.live ? "Live" : "Completed"}</button>
                    <a href="${item.link}">
                        <button class="btn bg-blue-400 text-white">Course Link</button>
                    </a>
                     </div>
                     <button class="btn bg-green-500 text-white">Syllabus</button>
              </div>
        `
    })
}
