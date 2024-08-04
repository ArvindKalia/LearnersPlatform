const register=`
<div class="register flex justify-center animate__animated animate__zoomIn">
        <div class="w-7/12 bg-white p-4 shadow">
            <h1 class="font-bold text-xl mb-3">Register Now</h1>
            <form class="register-form">
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
                           
                        </select>
    
                    </div>
                </div>
               
                <div class="row mb-3">
    
                    <div class="form-group col-12">
                        <label for="address">Address <sup class="text-red-500">*</sup></label>
                        <textarea class="form-control" name="address" id="address"></textarea>
    
                    </div>
                </div>
                <input type="radio" name="type" value="user" checked hidden>
                <div class="mb-3 form-group">
                    <button class="btn w-full bg-blue-400 text-white font-semibold">Submit</button>
                </div>
            </form>
            <div class="text-end">
                <a href="#/login">Already have an account!</a>
            </div>
           </div>
       </div>
`

export default register