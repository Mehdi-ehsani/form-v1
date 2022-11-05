import React , {useState , useEffect} from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//css
import "./form.css";

//components
import { validate } from './helpers/validate';
import { notification } from './helpers/notification';

//img
import {ReactComponent as UserSvg} from "./img/user-solid.svg";
import {ReactComponent as PasswordSvg} from "./img/lock-solid.svg";
import {ReactComponent as EmailSvg} from "./img/envelope-solid.svg";

const SignUp = () =>  {  

  const [data , setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false
  });
  
  const [errors , setErrors] = useState({});
  const [touched , setTouched] = useState({});
  useEffect(() => {
    setErrors(validate(data));
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
            name: true,
            email: true,
            password: true,
            confirmPassword: true,
            isAccepted: true
        })
    }
    
  }
  return (
    <div>
     <form className='form' onSubmit={submitHandler}>
        <h1>ثبت نام</h1>

        <div>
          <UserSvg className='input-svg'/>
          <input type="text" name='name' value={data.name} placeholder='نام کاربری' onChange={changeHandler} onFocus={touchHandler}/>
        </div>
        {touched.name && <span>{errors.name}</span>}
        <div>
          <EmailSvg className='input-svg'/>
          <input type="email" name='email' value={data.email} placeholder='ایمیل' onChange={changeHandler} onFocus={touchHandler}/>
        </div>
        {touched.email && <span>{errors.email}</span>}
        <div>
          <PasswordSvg className='input-svg'/>
          <input type="password" name='password' value={data.password} placeholder='رمز' onChange={changeHandler} onFocus={touchHandler}/>
        </div>
        {touched.password && <span>{errors.password}</span>}
        <div>
          <PasswordSvg className='input-svg'/>
          <input type="password" name='confirmPassword' value={data.confirmPassword} placeholder='تایید رمز' onChange={changeHandler} onFocus={touchHandler}/>
        </div>
        {touched.confirmPassword && <span>{errors.confirmPassword}</span>}
        <div>
          <label >تمامی قوانین را می پذیرم</label>
          <input type="checkbox" name='isAccepted' value={data.isAccepted} onChange={changeHandler}  onFocus={touchHandler}/>
        </div>
        {touched.isAccepted && <span>{errors.isAccepted}</span>}

        <div>
           <button type='submit' >ثبت نام</button>
           <a href='#'>ورود</a>
        </div>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default SignUp