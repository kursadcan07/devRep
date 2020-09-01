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
        userMail:state.userLoginReducer.userMail,
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
    baseURL: `http://localhost:5000`
})

class loginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            userMail: "",
            userPassword: "",
            loginStat: false,
            mes:""
        }
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.checkLoginData = this.checkLoginData.bind(this);
    }

    updateEmail(event) {
        this.setState({userMail: event.target.value})
    }
    updatePassword(event) {
        this.setState({userPassword: event.target.value})
    }

    checkLoginData(userMail, password) {
        api.post('/login',
            {
                userMail: userMail,
                password: password,
            }).then(res => {

            if (res.data.stat) {

                this.setState({
                    loginStat: true
                })

                this.props.setUser(res.data.onlineUser)

                if(this.props.userStatus==="1"){
                    this.props.history.push({
                        pathname: '/PersonelScreens/PersonelNavigation',
                    })
                }

                else{
                    this.props.history.push({
                        pathname: '/PersonelScreens/NavigateTheChief',
                    })
                }

            }
            else if(!res.data.stat){
                console.log("var2")
                this.setState({
                    mes:res.data.mes
                })
            }
        })

    }


    /*
           Here the main div of the login screen.
       */
        render()
        {

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
                                onClick={ () =>{
                                    this.checkLoginData(this.state.userMail, this.state.userPassword)
                                }}>Giriş
                        </button>
                        {/*
                Here the part of I forgot my password.
            */}
                        <p className="forgot-password text-right">
                            <Link to="/PersonelScreens/ResetThePassword"> Şifremi unuttum</Link>
                        </p>
                        <p style={{textAlign:"center"}}>
                            {this.state.mes}
                        </p>
                    </form>
                </div>
            )
        }
    }

    export
    default

    connect(mapStateToProps, mapDispatchToProps)

(
    loginScreen
)
    ;
