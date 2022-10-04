import React from 'react'
import './adminlogin.css'

const adminlogin = () => {
  return (
    <div class="container col-xl-10 col-xxl-8  py-5">  
      <div class="row align-items-center g-lg-5 py-5">

        <div class="col-md-10 mx-auto col-lg-5" >
          <form class="p-4 p-md-5  rounded-3 ">
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label for="floatingInput"><i>Admin FÆUCT</i></label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
              <label for="floatingPassword"><i>Contraseña</i></label>
            </div>
            <hr class="my-4"/>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button>
          </form>      
        </div>  
      </div>
    </div>
  )
}

export default adminlogin