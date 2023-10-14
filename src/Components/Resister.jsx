import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Resister = () => {

    const {createUser} = useContext(AuthContext)
     
        
    const handleResister = e => {

        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        //Create user in firebase
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error);
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Resister Now !</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">


                    <form onSubmit={handleResister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input type="text"
                                name="name"
                                placeholder="Your Name"
                                className="input input-bordered"
                                required />

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required />

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Resister</button>
                        </div>
                    </form>

                    <p className="text-center">Already have an account? Please<Link to='/login'>
                        <button className="btn btn-link">Login</button>
                    </Link></p>
                </div>
            </div>
        </div>
    );
};

export default Resister;