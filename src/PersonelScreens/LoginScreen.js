/*
    Here the login screen that displayed at the beginning.Allows to user login , remember me and forgot password.
    In addition company logo displayed at the top.
*/
import React from "react";
import Logo from "./SystemImages/CompanyLogo.png";
import {Link} from "react-router-dom";
import setOnlineUser from "../actions/userLoginActions";
import {connect} from "react-redux";


const axios = require('axios');

const mapStateToProps = (state) => {
    return {
        userID: state.userLoginReducer.userID,
        userMail: state.userLoginReducer.userMail,
        personalName: state.userLoginReducer.personalName,
        userStatus: state.userLoginReducer.userStatus,
        userArea: state.userLoginReducer.userArea
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => {
            dispatch(setOnlineUser(user));
        }
    }
};

const api = axios.create({
    baseURL: `http://localhost:4000`
})
let passRegex = /^[a-zA-Z0-9]{5,12}$/
// eslint-disable-next-line no-control-regex
let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

class loginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            userMail: "",
            userPassword: "",
            loginStat: false,
            mes: ""
        }
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.checkLoginData = this.checkLoginData.bind(this);
        this.validateForPassword = this.validateForPassword.bind(this);
        this.validateForEmail = this.validateForEmail.bind(this);
    }

    updateEmail(event) {
        this.setState({userMail: event.target.value})
    }

    updatePassword(event) {
        this.setState({userPassword: event.target.value})
    }

<<<<<<< HEAD
    validateForEmail(emailInput){
        if(emailInput.length<10){
=======
    validateForEmail(emailInput) {
        if (emailInput.length < 10) {
>>>>>>> afc6ef183330791b7b938b778eee5e497b0f89e7
            return ({
                mes: "Mail adresi çok kısa !",
                stat: false
            })
<<<<<<< HEAD
        }
        else if(emailInput.length>50){
=======
        } else if (emailInput.length > 50) {
>>>>>>> afc6ef183330791b7b938b778eee5e497b0f89e7
            return ({
                mes: "Mail adresi çok uzun !",
                stat: false
            })
<<<<<<< HEAD
        }
        else if (!emailRegex.test(emailInput)){
=======
        } else if (!emailRegex.test(emailInput)) {
            return ({
                mes: "Mail adresi abc@desird.com.tr formatında olmalıdır !",
                stat: false
            })
        } else if (emailInput.split("@")[1] !== "orema.com.tr" && emailInput.split("@")[1] !== "desird.com.tr") {
            return ({
                mes: "Mail adresi abc@desird.com.tr formatında olmalıdır !",
                stat: false
            })
        } else {
            return ({
                mes: "E Mail Validasyonu Okey",
                stat: true
            })
        }

    }

    validateForPassword(passwordInput) {
        if (passwordInput.length < 5) {
            return ({
                mes: "Şifre 5 karakterden kısa olamaz !",
                stat: false
            })
        } else if (passwordInput.length > 12) {
>>>>>>> afc6ef183330791b7b938b778eee5e497b0f89e7
            return ({
                mes: "Şifre 12 karakterden uzun olamaz !",
                stat: false
            })
        } else if (!passRegex.test(passwordInput)) {
            return ({
                mes: "Şifrede özel karakter bulunamaz !",
                stat: false
            })
        } else {
            return ({
                mes: "Giriş Başarılı",
                stat: true
            })
        }
    }

    validateForPassword(passwordInput) {
        if (passwordInput.length < 5) {
            return ({
                mes: "Şifre 5 karakterden kısa olamaz !",
                stat: false
            })
        } else if (passwordInput.length > 12) {
            return ({
                mes: "Şifre 12 karakterden uzun olamaz !",
                stat: false
            })
        } else if (!passRegex.test(passwordInput)) {
            return ({
                mes: "Şifrede özel karakter bulunamaz !",
                stat: false
            })
        } else {
            return ({
                mes: "Giriş Başarılı",
                stat: true
            })
        }
    }

    checkLoginData(userMail, userPassword) {
        if (!this.validateForEmail(userMail).stat) {
            this.setState({
                mes: this.validateForEmail(userMail).mes
            })
        } else if (!this.validateForPassword(userPassword).stat) {
            this.setState({
                mes: this.validateForPassword(userPassword).mes
            })
        } else {
            api.post('/login',
                {
                    userMail: userMail,
                    userPassword: userPassword,
                }).then(res => {

                if (res.data.stat) {

                    this.setState({
                        loginStat: true
                    })

                    this.props.setUser(res.data.onlineUser)

                    if (this.props.userStatus === "1") {
                        this.props.history.push({
                            pathname: '/PersonelScreens/PersonelNavigation',
                        })
                    } else {
                        this.props.history.push({
                            pathname: '/PersonelScreens/NavigateTheChief',
                        })
                    }

                } else if (!res.data.stat) {
                    console.log(res.data.mes)
                    this.setState({
                        mes: res.data.mes
                    })
                }
            })

        }
    }


    /*
           Here the main div of the login screen.
       */
    render() {

        return (
            <div style={{
                display: "flex",
                flex: 4,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "0px"
            }}>
                {/*
            Here the company logo.
        */}
                <img src={Logo} style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                    flex: 1,
                    height: "20vh",
                    margin: "10px"
                }}
                     alt="Logo"/>
                <form style={{margin: "10px"}}>
                    {/*
                Here the header of the login screen.
            */}
                    <h3 style={{
                        textAlign: "center",
                        margin: "10px"
                    }}> İZİN BİLGİ SİSTEMİ</h3>
                    {/*
                Here we take e-mail address of the user as a input.
            */}
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="E-Posta"
                               onChange={this.updateEmail}/>
                    </div>
                    {/*
                Here we take password of the user as a input.
            */}
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Şifre"
                               onChange={this.updatePassword}/>
                    </div>
                    {/*
               Here the remember me part as a check-box.
            */}
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                            <label className="custom-control-label" htmlFor="customCheck1">Beni hatırla</label>
                        </div>
                    </div>
                    {/*
                Here the login button that allows to user login.
            */}

                    <button className="btn btn-primary btn-block" type="button"
                            onClick={() => {
                                this.checkLoginData(this.state.userMail, this.state.userPassword)
                            }}>Giriş
                    </button>
                    {/*
                Here the part of I forgot my password.
            */}
                    <p className="forgot-password text-right">
                        <Link to="/PersonelScreens/ResetThePassword"> Şifremi unuttum</Link>
                    </p>
                    <p style={{textAlign: "center"}}>
                        {this.state.mes}
                    </p>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)

(
    loginScreen
)
;
