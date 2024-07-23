const chapter=
`
 <div class="chapters">
    <div class="animate__animated animate__zoomIn">
        <div class="grid">
            <div class="table-responsive p-4 md:col-span-3 shadow-sm bg-white">
                <div class="grid md:grid-cols-10 gap-4 border-b py-4 justify-between items-center">
                    <h5 class="text-xl font-semibold">Chapter List</h5>
                    <select class="chapter-cat-select md:col-span-2 form-select">
                        <option value="choose category" hidden>Choose Category</option>
                    </select>
                    <select class="chapter-course-select md:col-span-2 form-select">
                        <option value="choose category" hidden>Choose Course</option>
                    </select>
                    <select class="chapter-topic-select md:col-span-4 form-select">
                        <option value="choose topic" hidden>Choose Topic</option>
                    </select>
                    <div class="text-right">
                        <button data-bs-toggle="modal" data-bs-target="#chapter-modal"
                            class="btn-add-chapter btn bg-red-400 rounded-full text-white">
                            <i class="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="mt-3">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Sr</th>
                                <th>Category</th>
                                <th>Course</th>
                                <th>Topic</th>
                                <th>Chapter</th>
                                <th>Notes url</th>
                                <th>Video url</th>
                                <th>Created at</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody class="chapter-list">


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="animate__animated animate__zoomIn modal" id="chapter-modal">
        <div class="modal-lg modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="text-xl font-semibold">Create New Chapter</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="chapter-form">
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
                            <div class="form-group">
                                <select class="form-select topic-select" name="topic">
                                    <option hidden value="choose topic">Choose Topic</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div>
                                <input class="form-control" type="text" name="chapter" placeholder="Chapter name">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div>
                                <input class="form-control" type="text" name="notes" placeholder="Notes url">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div>
                                <input class="form-control" type="text" name="video" placeholder="Video url">
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

export default chapter