const courses = `
 <div class="courses">
                <div class="animate__animated animate__zoomIn grid gap-4 md:grid-cols-5">
                    <div class="table-responsive p-4 md:col-span-3 shadow-sm bg-white">
                        <div class="flex border-b py-2 justify-between items-center">
                            <h5 class="text-xl font-semibold">Course List</h5>
                            <button data-bs-toggle="modal" data-bs-target="#course-modal"
                                class="btn-add-course btn bg-red-400 rounded-full text-white">
                                <i class="fa fa-plus"></i>
                            </button>
                        </div>
                        <div class=" mt-3">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Sr</th>
                                        <th>Thumbnail</th>
                                        <th>Category</th>
                                        <th>Course Name</th>
                                        <th>Course Link</th>
                                        <th>Price</th>
                                        <th>Duration</th>
                                        <th>Created at</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody class="course-list">


                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="table-responsive p-4 md:col-span-2 shadow-sm bg-white">
                        <div class="flex border-b py-2 justify-between items-center">
                            <h5 class="text-xl font-semibold">Category List</h5>
                            <button data-bs-toggle="modal" data-bs-target="#category-modal"
                                class="btn-category-add btn bg-red-400 rounded-full text-white">
                                <i class="fa fa-plus"></i>
                            </button>
                        </div>
                        <div class="mt-3">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Sr</th>
                                        <th>Category</th>
                                        <th>Created at</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody class="category-list">
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <div class="animate__animated animate__zoomIn modal" id="course-modal">
                    <div class="modal-lg modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="text-xl font-semibold">Create New Course</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form class="course-form">
                                    <div class="row mb-3">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label for="profile">Thumbnail</label>
                                                <input type="file" class="form-control" id="profile" name="profile">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label for="name">Course Name</label>
                                                <input type="text" class="form-control" id="name"
                                                    name="name">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-6">
                                            <div class=" form-group">
                                                <select class="form-select course-category" name="category">
                                                    <option value="">Choose Category</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <select class="form-select" id="duration" name= "duration">
                                                    <option value="">Choose Duration</option>
                                                    <option value="2">2 Month</option>
                                                    <option value="4">4 Month</option>
                                                    <option value="6">6 Month</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label for="link">Course link</label>
                                                <input type="text" class="form-control" id="link"
                                                    name="link">
                                            </div>
                                        </div> 
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label for="price">Price</label>
                                                <input type="number" class="form-control" id="price"
                                                    name="price">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mb-3 form-group col-12">
                                        <label for="desc">Course Description</label>
                                        <textarea class="form-control" name="desc" id="desc"></textarea>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-12 flex gap-4">
                                            <div class="flex gap-1 items-center">
                                                <input type="checkbox" name="live">
                                                <label for="">Is Live</label>
                                            </div>
                                            <div class="flex gap-1 items-center" >
                                                <input type="checkbox" name="free">
                                                <label for="">Is Free</label>
                                            </div>
                                            <div class=""></div>
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
                <div class="animate__animated animate__zoomIn modal" id="category-modal">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="text-xl font-semibold">Create New Category</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form class="category-form">
                                    <div class="mb-3 form-group">
                                        <label for="category">Category Name</label>
                                        <input class="form-control" type="text" id="category" name="category">

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

export default courses