let data = {};
//check for data in local storage
export const getDataFunc = () => {
    if (localStorage.getItem("data") != null) {
        data = JSON.parse(localStorage.getItem("data"))
        return data
    }
}

// store image/thumbnail
export const processImage = (img, array, index) => {
    let data = array[index]
    // console.log(data)
    // // console.log(img)
    return new Promise((resolve, reject) => {
        if (index == undefined) {
            if (img.name) {
                let freader = new FileReader();
                freader.readAsDataURL(img);
                freader.onload = (e) => {
                    let url = e.target.result;
                    resolve(url)
                }
            } else {
                resolve("../../assets/images/avatar-1.svg")
            }
        }
        else {
            if (img.name) {
                let freader = new FileReader();
                freader.readAsDataURL(img);
                freader.onload = (e) => {
                    let url = e.target.result;
                    resolve(url)
                }
            } else {
                resolve(data.profile)
            }
        }
    })
}

//register data in form
export const registerFn = async (form, array, key, index) => {
    let formData = new FormData(form)
    let courses = []
    let tmp = {
        createdAt: new Date()
    }
    for (let data of formData.entries()) {
        let props = data[0]
        let value = data[1]
        let imgUrl = typeof (value) == "object" && await processImage(value, array, index)


        props == "course" && courses.push(value)

        if (props == "course") {
            tmp[props] = courses
        }
        else if (imgUrl) {
            tmp[props] = imgUrl
        }
        else {
            tmp[props] = value.trim().toLowerCase()
        }
    }
    if (index == undefined) {
        array.push(tmp)
        data[key] = array
        localStorage.setItem("data", JSON.stringify(data))
        form.reset("")
        swal("Data Inserted", "Successfully", "success")
    }
    else {
        array[index] = tmp
        data[key] = array
        localStorage.setItem("data", JSON.stringify(data))
        form.reset("")
        swal("Data Updated", "Successfully", "success")
    }
}

//update code
export const updateDataFunc = (array, key) => {
    data[key] = array
    localStorage.setItem("data", JSON.stringify(data))
}

//format date
export const formatDateFunc = (data, isTime) => {

    let date = new Date(data);
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear();
    let time = date.toLocaleTimeString()
    dd = dd < 10 ? '0' + dd : dd
    mm = mm < 10 ? '0' + mm : mm
    return `${dd}-${mm}-${yy} ${isTime ? time : ""}`

}

//live data add in select tag
export const createOptionsFunc = (data, el, key) => {
    el.innerHTML = `<option value="">Choose ${key}</option>`
    data.forEach((item, index) => {
        el.innerHTML += `<option value="${item[key]}">${item[key]}</option>`
    })
}

// confirmation code

export const isConfirmFunc = () => {
    return new Promise((resolve, reject) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    resolve(true)
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    resolve(false)
                    swal("Your imaginary file is safe!");
                }
            });
    })
}