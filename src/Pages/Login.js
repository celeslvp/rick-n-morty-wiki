import { Link } from "react-router-dom";
import Input from "../Components/Input";
import "./Login.css";
import { useForm } from "react-hook-form";

function Login(){
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    
    return(
        <div>
            <h1>Rick and Morty Characters</h1>
            <div className="Container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name = "Username" type ="text" register = {{...register("username")}}></Input>
                    <Input name = "Password" type ="password" register = {{...register("password")}}></Input>
                    <button type="submit" className="LoginButton">Login</button>
                </form>
                <p>Dont have an account?</p>
                <p><Link to="/register">Click here to register</Link></p>
            </div>
            <p>We dont know how autenticate and redirect you to our Home Page</p>
            <p>So <Link to="/home">click here</Link> to be redirected to Home, sorry for the incovenience!</p>
        </div>
    )
}

export default Login;