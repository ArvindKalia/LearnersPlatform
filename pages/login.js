const login=`
<div class="login flex justify-center animate__animated animate__zoomIn">
        <div class="w-7/12 bg-white p-4 shadow">
            <h1 class="font-bold text-xl mb-3">Login Now</h1>
            <form class="login-form">
               
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
                <div class="mb-3 form-group">
                    <button class="btn w-full bg-blue-400 text-white font-semibold">Submit</button>
                </div>
            </form>
            <div class="text-end">
                <a href="#/register">Don't have an account!</a>
            </div>
           </div>
       </div>
`

export default login