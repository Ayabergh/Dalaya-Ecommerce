function validation(values){
    const Error={};
    const email_pattern=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    {/**first name */}
    if (values.firstname===""){
        Error.firstname="FirstName should not be empty";
     }
     else{
        Error.firstname="good";
     }
     {/** last name */}
     if (values.lastname===""){
        Error.lastname="Lastname should not be empty";
     }
     else{
        Error.lastname="good";
     }
     {/**email *******/}

    if (values.email===""){
       Error.email="email should not be empty";
    }
    else if (!email_pattern.test(values.email)){
       Error.email="invalid email";
    }
    else{
       Error.email="good";
    }

    {/**password *******/}

    if(values.password===""){
       Error.password="password should not be empty";
    } else if(!password_pattern.test(values.password)){
       Error.password="invalid password";
    }
    else{
       Error.password="good";  
    }
    return Error;

}



export default validation