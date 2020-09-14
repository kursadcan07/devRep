import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const axios = require('axios');
const api = axios.create({
    baseURL: `http://localhost:4000`
})

const mapStateToProps = (state) => {
    return {
        userID: state.userLoginReducer.userID,
        userMail: state.userLoginReducer.userMail,
        proxyChiefID:state.userLoginReducer.proxyChiefID,
        personalName: state.userLoginReducer.personalName,
        userStatus: state.userLoginReducer.userStatus,
        userSignature:state.userLoginReducer.userSignature,
        chiefID: state.userLoginReducer.chiefID,
        generalManagerID: state.userLoginReducer.generalManagerID,
        userArea: state.userLoginReducer.userArea
    }
};

class GenerateProxyManager extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newPasswordOfGivenUser: "",
            userMail:"",
        }
        this.setNewPass = this.setNewPass.bind(this);
        this.getProxyMail=this.getProxyMail.bind(this);
        this.getProxyPassword=this.getProxyPassword.bind(this);
        this.displayBackButton=this.displayBackButton.bind(this);

        this.getProxyMail().then((data)=>{
            this.setState({
                userMail:data,
            })
        })

        this.getProxyPassword().then((data)=>{
            this.setState({
                newPasswordOfGivenUser:data,
            })
        })

    }
    displayBackButton() {

        return(
            <div style={{
                display: "flex",
                flex: 1,
                marginTop: "4px",
                paddingLeft:"100px",
                marginBottom: "4px"
            }}>
                <Link to={"/PersonelScreens/NavigateTheChief"}>
                    <Fab style={{
                        display:"flex",
                        width: "70px",
                        height: "70px",
                    }}>
                        <ArrowBackIcon/>
                    </Fab>
                </Link>
            </div>
        )
    }

    getProxyMail(){
        return api.get("/GetUserMailOfProxyChief/"+this.props.proxyChiefID)
            .then(
                function (response) {
                    return response.data.chiefProxyEmail.userMail;
                }
            )
    }


    getProxyPassword(){
        return api.get("/GetUserMailOfProxyChief/"+this.props.proxyChiefID)
            .then(
                function (response) {
                    return response.data.chiefProxyEmail.userPassword;
                }
            )
    }

    setNewPass() {

        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < 10; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        this.setState({
            newPasswordOfGivenUser:result,
        })
        return result
    }


    render() {
        return (
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <form
                    style={{background: "rgba(239,236,236,0.5)", margin: "auto", borderRadius: "5%", padding: "15px"}}>
                    {/*
                    This part displays header to user.
                */}
                    <div style={{display: "flex", justifyContent: "center", textAlign: "center"}}>
                        <h1>
                            VEKALET HESAP EKRANI
                        </h1>
                    </div>
                    {/*
                    This part displays file browser to user.
                */}
                    <div style={{
                        display: "flex",
                        justifyContent: "left",
                        padding: "5px",
                        textAlign: "left",
                        margin: "10px",
                        background: "rgb(241,235,235)",
                        borderRadius: "5%",
                    }}>
                        <h1 style={{
                            display: "flex",
                            fontFamily: "Arya",
                            fontSize: "18px",

                        }}>
                            VEKALET HESAP E-MAİL :{this.state.userMail}
                        </h1>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "left",
                        padding: "5px",
                        textAlign: "left",
                        margin: "10px",
                        background: "rgb(241,235,235)",
                        borderRadius: "5%"
                    }}
                    >
                        <h1 style={{
                            display: "flex",
                            fontFamily: "Arya",
                            fontSize: "18px",

                        }}>
                            VEKALET HESAP ŞİFRE :{this.state.newPasswordOfGivenUser}
                        </h1>
                    </div>
                    {/*
                    This part contains submit button to take signature from user.Then navigates the user to
                    navigation screen.
                */}
                    <div style={{display: "flex", justifyContent: "center", textAlign: "center", margin: "10px"}}>

                        <button type="button" onClick={() => {


                            api.put("/resetProxyChiefsPassword/" + this.props.proxyChiefID, {
                                userPassword:this.setNewPass(),
                            }).then(r =>
                                console.log(r)
                            )

                        }
                        } style={{margin: "auto"}} className="btn btn-primary btn-block">ŞİFRE RESETLE
                        </button>

                    </div>
                </form>
                {this.displayBackButton()}
            </div>
        )
    }
}
export default connect(mapStateToProps)(GenerateProxyManager);
