const dashboard = `
 <div class="dashboard">
                <div class="animate__animated animate__zoomIn grid md:grid-cols-4 gap-4">
                    <div class="p-4 grid grid-cols-2 bg-white shadow-sm">
                        <div class="flex flex-column items-center border-r gap-3">
                            <button class="btn bg-red-600 text-white rounded-full w-11 h-11">
                                <i class="fa-regular fa-user"></i>
                            </button>
                            <h5 class="text-xl font-semibold text-red-500">Students</h5>
                        </div>
                        <div class="flex gap-3 flex-column items-center">
                            <h5 class="text-5xl font-semibold text-red-400">36K</h5>
                            <p class="text-lg text-gray-500">35,555</p>
                        </div>
                    </div>
                    <div class="p-4 grid grid-cols-2 bg-white shadow-sm">
                        <div class="flex flex-column items-center border-r gap-3">
                            <button class="btn bg-green-600 text-white rounded-full w-11 h-11">
                                <i class="fa-regular fa-user"></i>
                            </button>
                            <h5 class="text-xl font-semibold text-green-500">Courses</h5>
                        </div>
                        <div class="flex gap-3 flex-column items-center">
                            <h5 class="text-5xl font-semibold text-green-400">13K</h5>
                            <p class="text-lg text-gray-500">12,555</p>
                        </div>
                    </div>
                    <div class="p-4 grid grid-cols-2 bg-white shadow-sm">
                        <div class="flex flex-column items-center border-r gap-3">
                            <button class="btn bg-pink-600 text-white rounded-full w-11 h-11">
                                <i class="fa-regular fa-user"></i>
                            </button>
                            <h5 class="text-xl font-semibold text-pink-500">Files</h5>
                        </div>
                        <div class="flex gap-3 flex-column items-center">
                            <h5 class="text-5xl font-semibold text-pink-400">16K</h5>
                            <p class="text-lg text-gray-500">15,555</p>
                        </div>
                    </div>
                    <div class="p-4 grid grid-cols-2 bg-white shadow-sm">
                        <div class="flex flex-column items-center border-r gap-3">
                            <button class="btn bg-blue-600 text-white rounded-full w-11 h-11">
                                <i class="fa-regular fa-user"></i>
                            </button>
                            <h5 class="text-xl font-semibold text-blue-500">Sales</h5>
                        </div>
                        <div class="flex gap-3 flex-column items-center">
                            <h5 class="text-5xl font-semibold text-blue-400">65K</h5>
                            <p class="text-lg text-gray-500">64,555</p>
                        </div>
                    </div>
                    <div class="p-4 column-chart md:col-span-4 bg-white shadow-sm"></div>
                    <div class="p-4 area-chart md:col-span-2 bg-white shadow-sm"></div>
                    <div class="p-4 bg-white shadow-sm">
                        <div class="border-b my-3">
                            <h5 class="mb-3 font-semibold">
                                Recent Students
                            </h5>
                        </div>
                        <div class="recent-students">

                        </div>
                    </div>
                    <div class="p-4 bg-white shadow-sm">
                        <div class="border-b my-3">
                            <h5 class="mb-3 font-semibold">
                                Recent Courses
                            </h5>
                        </div>
                        <div class="recent-courses">


                        </div>
                    </div>
                </div>
            </div>
`

export default dashboard