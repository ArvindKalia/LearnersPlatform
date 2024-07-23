const topics=
`
 <div class="topics">
                <div class="animate__animated animate__zoomIn">
                    <div class="grid">
                        <div class="table-responsive p-4 md:col-span-3 shadow-sm bg-white">
                            <div class="grid md:grid-cols-4 gap-4 border-b py-4 justify-between items-center">
                                <h5 class="text-xl font-semibold">Topic List</h5>
                                <select class="topic-cat-select form-select">
                                    <option value="choose category" hidden>Choose Category</option>
                                </select>
                                <select class="topic-course-select form-select">
                                    <option value="choose category" hidden>Choose Course</option>
                                </select>
                                <div class="text-right">
                                    <button data-bs-toggle="modal" data-bs-target="#topic-modal"
                                        class="btn-add-topic btn bg-red-400 rounded-full text-white">
                                        <i class="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <div class=" mt-3">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Sr</th>
                                            <th>Category</th>
                                            <th>Course</th>
                                            <th>Topic Name</th>
                                            <th>Created at</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody class="topic-list">


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="animate__animated animate__zoomIn modal" id="topic-modal">
                    <div class="modal-lg modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="text-xl font-semibold">Create New Topic</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form class="topic-form">
                                    <div class="row mb-3">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <select class="form-select category-select" name="category">
                                                    <option hidden value="choose category">Choose Category</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <select class="form-select course-select" name="course">
                                                    <option hidden value="choose course">Choose Course</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div>
                                            <input class="form-control" name="name" placeholder="Topic Name">
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
            </div>
`

export default topics