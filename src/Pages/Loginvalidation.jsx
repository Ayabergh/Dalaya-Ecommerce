function validation(values){
        const Error={};
        const email_pattern=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
   
        if (values.email===""){
           Error.email="email should not be empty";
        }
        else if (!email_pattern.test(values.email)){
           Error.email="invalid email";
        }
        else{
           Error.email="";
        }
        {/**password *******/}
        if(values.password===""){
           Error.password="password should not be empty";
        } else if(!password_pattern.test(values.password)){
           Error.password="invalid password";
        }
        else{
           Error.password="";  
        }
        return Error;
   
   }
  


export default validation