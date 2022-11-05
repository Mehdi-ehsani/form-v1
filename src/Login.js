import React , {useState , useEffect} from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


//css
import "./form.css";

//components
import { validate } from './helpers/validate';
import { notification } from './helpers/notification';

//img
import {ReactComponent as PasswordSvg} from "./img/lock-solid.svg";
import {ReactComponent as EmailSvg} from "./img/envelope-solid.svg";


const Login = () =>  {  

  const [data , setData] = useState({
    email: "",
    password: "",
  });
  
  const [errors , setErrors] = useState({});
  const [touched , setTouched] = useState({});
  useEffect(() => {
    setErrors(validate(data , "login"));
  },[data])
  
  const changeHandler = (event) => {
    if(event.target.name === "isAccepted"){
        setData({...data , [event.target.name] : event.target.checked})
    }else {
        setData({...data , [event.target.name] : event.target.value}) 
    }
  }
  const touchHandler = (event) => {
    setTouched({...touched , [event.target.name] : true})
  }
  const submitHandler = (event) => {
    event.preventDefault();
    if(!Object.keys(errors).length){
        notification("success")
    }else {
        notification("error")
        setTouched({
            email: true,
            password: true,
        })
    }
    
  }
  return (
    <div>
     <form className='form' onSubmit={submitHandler}>
        <h1 style={{marginBottom: "30px"}} >ورود </h1>

        <div className={errors.email && touched.email ? "input-container invalid" : "input-container"}>
          <EmailSvg className='input-svg'/>
          <input type="email" autoComplete='off' name='email' value={data.email} placeholder='ایمیل' onChange={changeHandler} onFocus={touchHandler}/>
        </div>
        {touched.email && <span className='errors'>{errors.email}</span>}

        <div className={errors.password && touched.password ? "input-container invalid" : "input-container"}>
          <PasswordSvg className='input-svg'/>
          <input type="password" name='password' value={data.password} placeholder='رمز' onChange={changeHandler} onFocus={touchHandler}/>
        </div>
        {touched.password && <span className='errors'>{errors.password}</span>}

        <div className='button-container login-btn-con'>
           <button type='submit' > ورود</button>
           <Link to="/signup">ثبت نام</Link>
        </div>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Login