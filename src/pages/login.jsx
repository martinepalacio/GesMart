 import "../style.css";
 import Logo from './components/logo'

 const Login = () => {

    return <div className="container-sm login">
    <form >
      <Logo/>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Usuario</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
  
    <button onClick={() => window.location.replace("http://stackoverflow.com")} type="submit" class="btn btn-primary">Submit</button>
  </form>
  </div>
 }
 export default Login;