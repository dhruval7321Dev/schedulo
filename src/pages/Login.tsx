import {
    signInWithPopup,
  } from "firebase/auth";
  
  import { auth, provider } from "../firebase";
  
  const Login = () => {
    const handleGoogleLogin = async () => {
      try {
        const result = await signInWithPopup(
          auth,
          provider
        );
  
        console.log(result.user);
  
        alert("Login Success");
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div className="h-screen flex items-center justify-center">
        <button
          onClick={handleGoogleLogin}
          className="bg-black text-white px-5 py-3 rounded-xl"
        >
          Login With Google
        </button>
      </div>
    );
  };
  
  export default Login;