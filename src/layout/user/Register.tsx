import React, { useState } from "react";

function Register() {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    //infor process
    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        console.log('submit');
    }

     //error process
    const [userNameError, setUserNameError] = useState('');

    const handleUserNameChange = async (e : React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);

        setUserNameError('');

        const url = `http://localhost:8080/user/search/existsByUsername?username=${e.target.value}`;
        try {
            const response = await fetch(url);
            const data = await response.text();
            
            if(data === "true") {
                console.log('Ten dang nhap da ton tai');
                setUserNameError('Ten dang nhap da ton tai');
                return true;
            }
            setUserNameError('');
            return false;
        } catch (error) {
            setUserNameError('Loi ket noi');
            console.error('Error fetch data')
            return false;
        }
        

    }

    //email

        //error process
        const [MailError, setMailError] = useState('');

        const handleMailChange = async (e : React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
            console.log(e.target.value);
            setMailError('');
    
            const url = `http://localhost:8080/user/search/existsByEmail?email=${e.target.value}`;
            try {
                const response = await fetch(url);
                const data = await response.text();
                
                if(data === "true") {
                    console.log('Email da ton tai');
                    setMailError('Mail da ton tai');
                    return true;
                }
                setUserNameError('');
                return false;
            } catch (error) {
                setUserNameError('Loi ket noi');
                console.error('Error fetch data')
                return false;
            }
            
    
        }

        //password
        const [PasswordError, setPasswordError] = useState('');
        const handlePassword = async (e : React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
            const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
            if(!passwordRegex.test(e.target.value)) {
                setPasswordError('Mat khau phai co it nhat 8 ki tu va 1 ki tu dac biet');
                return false;
            }
            setPasswordError('');
            setPassword(e.target.value);
            return true;
        }

        const [ConfirmPasswordError, setConfirmPasswordError] = useState('');
        const handleConfirmPassword = async (e : React.ChangeEvent<HTMLInputElement>) => {
            setConfirmPassword(e.target.value);
            if(e.target.value !== password) {
                setConfirmPasswordError('Mat khau khong trung khop');
                return false;
            }
            setConfirmPasswordError('');
            return true;
        }


    return (
        <div className="container">
            <h1 className="mt-5 text-center">
                Register
            </h1>
            <div className="mb-3 col-md-6 col-12 mx-auto">
                <form onSubmit={handleSubmit} className="form">
                    <div className="mb-3">
                        <label htmlFor="userName" className="form-label"> Ten Dang Nhap</label>
                        <input 
                            type="text" 
                            id="userName"
                            className="form-control"
                            value={userName}
                            onChange={handleUserNameChange}
                            />
                    </div>
                    <div style={{color:"red"}}>{userNameError}</div>
                </form>
            </div>

            <div className="mb-3 col-md-6 col-12 mx-auto">
                <form onSubmit={handleSubmit} className="form">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"> Email</label>
                        <input 
                            type="text" 
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={handleMailChange}
                            />
                    </div>
                    <div style={{color:"red"}}>{MailError}</div>
                </form>
            </div>

            <div className="mb-3 col-md-6 col-12 mx-auto">
                <form onSubmit={handleSubmit} className="form">
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label"> Password</label>
                        <input 
                            type="text" 
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={handlePassword}
                            />
                    </div>
                    <div style={{color:"red"}}>{PasswordError}</div>
                </form>
            </div>

            <div className="mb-3 col-md-6 col-12 mx-auto">
                <form onSubmit={handleSubmit} className="form">
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label"> Confirm Password</label>
                        <input 
                            type="text" 
                            id="confirmPassword"
                            className="form-control"
                            value={confirmPassword}
                            onChange={handleConfirmPassword}
                            />
                    </div>
                    <div style={{color:"red"}}>{ConfirmPasswordError}</div>
                </form>
            </div>

        </div>
    );


}

export default Register;