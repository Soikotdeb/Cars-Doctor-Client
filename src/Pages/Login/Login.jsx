import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from './../../Providers/AuthProvider';

const Login = () => {
    const {signIn}=useContext(AuthContext)


const handleLogin = event =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value
    const password = form.password.value
    console.log(email,password);
    signIn(email,password)
    .then(result=>{
        const user = result.user;
        console.log(user);
    })
    .then(error=>{
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
              <p className='text-center mt-3 font-bold'>Or LogIn With</p>
              <div className='flex text-center justify-between mt-4'>

                <Link> <FaFacebook></FaFacebook> </Link>
                <Link> <FaGithub></FaGithub> </Link>
                <Link> <FaLinkedin></FaLinkedin> </Link>
                <Link> <FaGoogle></FaGoogle> </Link>
              </div>
              <div className='mt-3 text-center'>
                <h3>Have an New User? <Link className='font-bold text-orange-600' to="/signUp">Sign Up</Link> </h3>
              </div>
         </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;