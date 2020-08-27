/*
    Here the login screen that displayed at the beginning.Allows to user login , remember me and forgot password.
    In addition company logo displayed at the top.
*/
import React from "react";
import Logo from "./SystemImages/CompanyLogo.png";
import {Link} from "react-router-dom";
import setOnlineUser from "../actions/userLoginActions";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => {
            dispatch(setOnlineUser(user));
        }
    }
};

class loginScreen extends React.Component {
     constructor() {
         super();
         this.state = {
             userMail: "Initial Mail",
             userPassword: "Inital Password"
         }
         this.updateEmail = this.updateEmail.bind(this);
         this.updatePassword = this.updatePassword.bind(this);
     }

    updateEmail(event){
        this.setState({userMail : event.target.value})
    }
    updatePassword(event){
        this.setState({userPassword : event.target.value})
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
                        <input type="email" className="form-control" placeholder="E-Posta" onChange={this.updateEmail}/>
                    </div>
                    {/*
                Here we take password of the user as a input.
            */}
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Şifre" onChange={this.updatePassword} />
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
                    <Link to="/PersonelScreens/PersonelNavigation">
                        <button className="btn btn-primary btn-block" onClick={()=>{
                            this.props.setUser(this.state.userMail);
                        }} >Giriş
                        </button>
                    </Link>
                    {/*
                Here the part of I forgot my password.
            */}
                    <p className="forgot-password text-right">
                        <Link to="/PersonelScreens/ResetThePassword"> Şifremi unuttum</Link>
                    </p>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(loginScreen);
