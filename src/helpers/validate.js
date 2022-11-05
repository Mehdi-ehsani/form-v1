export const validate = data => {
    const errors = {};

    if(!data.name.trim()) {
        errors.name = "نام کاربری وارد کنید"
    }else {
        delete errors.name;
    }

    if(!data.email) {
        errors.email = "ایمیل وارد کنید"
    }else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email))) {
        errors.email = "ایمیل معتبر نیست"
    }else {
       delete errors.email;
    }

    if(!data.password) {
        errors.password = "رمز وارد کنید"
    }else if(data.password.length < 6) {
        errors.password = "رمز باید شش کاراکتر یا بیشتر باشد"
    }else {
        delete errors.password
    }

    if (!data.confirmPassword) {
        errors.confirmPassword = "رمز را تایید کنید"
    }else if (data.confirmPassword !== data.password) {
        errors.confirmPassword = "رمز یکسان نمی باشد"
    }else {
        delete errors.confirmPassword;
    }

    if(!data.isAccepted) {
        errors.isAccepted = "قوانین را تایید کنید"
    }else {
        delete errors.isAccepted;
    }

    return errors;
} 