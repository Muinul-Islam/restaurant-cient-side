import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth.jsx";
import useAxiosPublic from "../../Hooks/useAxiosPublic.jsx";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      console.log(res.user);
      const userInfo = {
        name: res.user?.displayName,
        email: res.user?.email,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div>
      <hr />
      <div className="p-4">
        <button onClick={handleGoogleSignIn} className="btn btn-block">
          <FaGoogle></FaGoogle>
          Login
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
