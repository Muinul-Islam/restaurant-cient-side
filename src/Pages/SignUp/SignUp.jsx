import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data?.email, data?.password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);

        updateUser(data.name, data.photoURL)
          .then(() => {
            console.log("User Updated");
            reset();
            alert("User Created");
          })
          .catch((error) => {
            console.log(error);
          });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // const handleSignUp = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;

  //   console.log(name, email, password);
  // };

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  {...register("name", { required: true })}
                  name="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">This Field Is Required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  {...register("photoURL", { required: true })}
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-500">This Field Is Required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  name="email"
                  className="input input-bordered"
                />{" "}
                {errors.email && (
                  <span className="text-red-500">This Field Is Required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-500">This Field Is Required</span>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <span className="text-red-500">
                    Password must be at least 6 characters
                  </span>
                )}
                {errors.password && errors.password.type === "maxLength" && (
                  <span className="text-red-500">
                    Password must be less then 20 characters
                  </span>
                )}
                {errors.password && errors.password.type === "pattern" && (
                  <span className="text-red-500">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center">
              Already Have An Account?{" "}
              <Link to="/login" className="text-red-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
