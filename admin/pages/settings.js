const settings=`
<div class="settings">

    <div class="grid gap-4 animate__animated animate__zoomIn">
        <div class="grid">
            <div class="table-responsive p-4 md:col-span-2 shadow-sm bg-white">
                <div class="flex border-b py-2 justify-between items-center">
                    <h5 class="text-xl font-semibold">Page Notification List</h5>
                    <button data-bs-toggle="modal" data-bs-target="#page-n-modal"
                        class="btn-page-n-add btn bg-red-400 rounded-full text-white">
                        <i class="fa fa-plus"></i>
                    </button>
                </div>
                <div class="mt-3">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Sr</th>
                                <th>Notifcation</th>
                                <th>Page</th>
                                <th>Created at</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody class="page-n-list">
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
    <div class="animate__animated animate__zoomIn modal" id="page-n-modal">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="text-xl font-semibold">Create New Notification</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="flex justify-center items-center page-n-preview p-4 my-3">
                        <h1 class="text-xl font-semibold"></h1>
                    </div>
                    <form class="page-n-form">
                        <div class="mb-3 form-group">
                            <textarea name="notification" class="form-control" placeholder="Notification"></textarea>
                        </div>
                        <div class="row mb-3">
                            <div class="col-4 mt-3">
                                <input type="text" name="page" class="form-control" placeholder="page name">
                            </div>
                            <div class="col-4">
                                <label for="bgcolor">Bg Color</label>
                                <input type="color" name="bgcolor" class="form-control" placeholder="">

                            </div>
                            <div class="col-4">
                                <label for="textcolor">Text Color</label>
                                <input type="color" name="textcolor" class="form-control" placeholder="">

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

export default settings