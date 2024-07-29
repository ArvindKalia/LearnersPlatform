const users = `
<div class="users">
    <div class="animate__animated animate__zoomIn user-list grid gap-4 md:grid-cols-3">

    </div>
    <button data-bs-toggle="modal" data-bs-target="#users-modal"
        class="add-user-btn position-fixed z-1 bottom-0 right-0 m-16 bg-red-500 text-white btn w-11 h-11 rounded-full">
        <i class="fa fa-add"></i>
    </button>
    <div class="animate__animated animate__zoomIn modal" id="users-modal">
        <div class="modal-lg modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="text-xl font-semibold">Create New User</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="users-form">
                        <div class="row mb-3">
                            <div class="form-group col-12">
                                <label for="profile">Profile <sup class="text-red-500">*</sup></label>
                                <input class="form-control" type="file" id="profile" name="profile">

                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="form-group col-6">
                                <label for="name">Name <sup class="text-red-500">*</sup></label>
                                <input class="form-control" type="text" id="name" name="name" required>

                            </div>
                            <div class="form-group col-6">
                                <label for="mobile">Mobile <sup class="text-red-500">*</sup></label>
                                <input class="form-control" type="number" id="mobile" name="mobile" required>

                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="form-group col-6">
                                <label for="email">Email <sup class="text-red-500">*</sup></label>
                                <input class="form-control" type="email" id="email" name="email" required>

                            </div>
                            <div class="form-group col-6">
                                <label for="password">Password <sup class="text-red-500">*</sup></label>
                                <div class="input-group">
                                    <input class="form-control" type="password" id="password" name="password" required>
                                    <span style="cursor: pointer;" class="toggle-p-btn input-group-text">
                                        <i class="fa fa-eye-slash"></i>
                                    </span>
                                </div>

                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="form-group col-6">
                                <label for="father">Father's name <sup class="text-red-500">*</sup></label>
                                <input class="form-control" type="text" id="father" name="father" required>

                            </div>
                            <div class="form-group col-6">
                                <label for="qualifications">Qualifications <sup class="text-red-500">*</sup></label>
                                <select class="form-select" name="qualifications" id="qualifications">
                                    <option value="">Select Qualifications</option>
                                    <option value="high">High School</option>
                                    <option value="ug">Under graduate</option>
                                    <option value="pg">Post graduate</option>
                                </select>

                            </div>
                        </div>

                        <div class="row mb-3">

                            <div class="form-group col-12">
                                <label for="course">Course <sup class="text-red-500">*</sup></label>
                                <select class="form-select" name="course" id="course" multiple>
                                    <option value="nodejs">NodeJs</option>
                                    <option value="reactjs">ReactJs</option>
                                    <option value="js">Javascript</option>
                                    <option value="python">Python</option>
                                </select>

                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="form-group col-6 flex gap-3">
                                <div>
                                    <input type="checkbox" name="status">
                                    <label for="status">Is active</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="type" value="admin">
                                    <label for="admin">Admin</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="type" value="teacher">
                                    <label for="teacher">Teacher</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="type" value="user">
                                    <label for="user">User</label>
                                </div>
                            </div>
                            <div class="col-6">
                                <input type="number" placeholder="Price" class="form-control" name="price">
                            </div>

                        </div>
                        <div class="row mb-3">

                            <div class="form-group col-12">
                                <label for="address">Address <sup class="text-red-500">*</sup></label>
                                <textarea class="form-control" name="address" id="address"></textarea>

                            </div>
                        </div>
                        <div class="mb-3 form-group">
                            <button class="btn w-full bg-blue-400 text-white font-semibold">Submit</button>
                            <button type="button"
                                class="d-none btn w-full bg-red-400 text-white font-semibold">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="animate__animated animate__zoomIn modal" id="user-m-modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="text-xl font-semibold">Create New Message</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="user-m-form">
                        <div class="mb-3 form-group">
                            <label for="type">From</label>
                            <input class="form-control" value="admin" readonly type="text" id="type" name="type">

                            </select>
                        </div>
                        <div class="mb-3 form-group">
                            <label for="name">User Name</label>
                            <input class="form-control" readonly id="name" name="name">

                            </select>
                        </div>
                        <div class="mb-3 form-group">
                            <label for="email">User Email</label>
                            <input class="form-control" readonly id="email" name="email">

                            </select>
                        </div>
                        <div class="mb-3 form-group">
                            <label for="title">Title</label>
                            <input class="form-control" id="title" name="title">

                            </select>
                        </div>
                        <div class="mb-3 form-group">
                            <label for="message">Message</label>
                            <textarea name="message" id="message"></textarea>
                            </select>
                        </div>
                        <div class="mb-3 form-group">
                            <button class="btn w-full bg-blue-400 text-white font-semibold">Submit</button>
                            <button type="button"
                                class="d-none btn w-full bg-red-400 text-white font-semibold">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
`

export default users