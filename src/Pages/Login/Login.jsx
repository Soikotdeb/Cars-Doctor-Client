import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from './../../Providers/AuthProvider';
import SocialLogin from '../shared/SocialLogin/SocialLogin';

const Login = () => {
    const {signIn}=useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';
 


const handleLogin = event =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value
    const password = form.password.value
    signIn(email,password)
    .then(result=>{
        const user = result.user;
    
        console.log(user);
      navigate(from,{replace:true})



    })
    .catch(error=>{
        console.log(error);
    })
}



    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-1/2 mr-12">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Login</h1>
         <form onSubmit={handleLogin}>
         <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name='email' className="input input-bordered"  required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input  className="btn text-white font-bold bg-orange-600" type="submit" value="Login"  />
              </div>
              <SocialLogin></SocialLogin>
         </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;