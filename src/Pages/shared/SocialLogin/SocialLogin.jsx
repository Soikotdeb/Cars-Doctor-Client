import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from './../../../Providers/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn}=useContext(AuthContext)

    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
  return (
    <div>
        <p className='text-center mt-3 font-bold'>Or LogIn With</p>
    <div className='flex text-center justify-between mt-4'>

      <Link> <FaFacebook></FaFacebook> </Link>
      <Link> <FaGithub></FaGithub> </Link>
      <Link> <FaLinkedin></FaLinkedin> </Link>
      <Link onClick={handleGoogleSignIn}> <FaGoogle></FaGoogle> </Link>
    </div>
    <div className='mt-3 text-center'>
      <h3>Have an New User? <Link className='font-bold text-orange-600' to="/signUp">Sign Up</Link> </h3>
    </div>
    </div>
  );
};

export default SocialLogin;
