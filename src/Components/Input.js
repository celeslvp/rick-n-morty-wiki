function Input(props){
    const label = props.name
    const type = props.type
    const register = props.register

    return(
        <div>
            <label>{label}</label><br></br>
            <input type={type} {...register}></input>
        </div>
        )
}

export default Input