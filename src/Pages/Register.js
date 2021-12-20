import { Link } from "react-router-dom";
import Input from "../Components/Input";
import "./Login.css";
import { useForm } from "react-hook-form";

function Register(){
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <div>
            <h1>Create Account</h1>
            <div className="Container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name = "Name" type = "text" register = {{...register("name")}}></Input>
                    <Input name = "Lastname" type = "text" register = {{...register("lastname")}}></Input>
                    <Input name = "Email" type = "email" register = {{...register("email")}}></Input>
                    <Input name = "Username" type = "text" register = {{...register("username")}}></Input>
                    <Input name = "Password" type = "password" register = {{...register("password")}}></Input>
                    <button type="submit" className="LoginButton">Login</button>
                </form>
            </div>
            <p>We dont know how autenticate and redirect you to our Home Page</p>
            <p>So <Link to="/home">click here</Link> to be redirected to Home, sorry for the incovenience!</p>
        </div>
    )
}

export default Register;