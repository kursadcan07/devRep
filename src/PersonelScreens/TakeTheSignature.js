import React from "react";
import setSignatureAction from "../actions/setUsersSignature";
import {connect} from "react-redux";
const axios = require('axios');
{
    /*
    * This class takes signature from user and makes operations with it.
    * */
}
const mapDispatchToProps = (dispatch) => {
    return {
        setSignature: (signatureData) => {
            dispatch(setSignatureAction(signatureData));
        }
    }
};
const mapStateToProps = (state) => {
    return {
        userID: state.userLoginReducer.userID,
        signature:state.userLoginReducer.signature,
        userMail: state.userLoginReducer.userMail,
        personalName: state.userLoginReducer.personalName,
        userStatus: state.userLoginReducer.userStatus,
        chiefID: state.userLoginReducer.chiefID,
        generalManagerID: state.userLoginReducer.generalManagerID,
        userArea: state.userLoginReducer.userArea
    }
};
const api = axios.create({
    baseURL: `http://localhost:4000`
})

class takeSignature extends React.Component{
    constructor(props) {
        super(props);
        this.getBase64 = this.getBase64.bind(this);
        this.state = {
            imgUpload: '',
        }
    }
    getBase64(e) {
        let file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            this.setState({
                imgUpload: reader.result
            })
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        }

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
                            LÜTFEN İMZANIZI YÜKLEYİNİZ
                        </h1>
                    </div>
                    {/*
                    This part displays file browser to user.
                */}
                    <div style={{display: "flex", justifyContent: "center", textAlign: "center", margin: "10px"}}>
                        <input type="file" className="input-file" name="imgUpload" accept='.png' onChange={this.getBase64} />
                    </div>
                    {/*
                    This part contains submit button to take signature from user.Then navigates the user to
                    navigation screen.
                */}
                    <div style={{display: "flex", justifyContent: "center", textAlign: "center", margin: "10px"}}>

                        <button type="button" onClick={ ()=> {
                            this.props.setSignature(this.state.imgUpload)
                            api.post('setSignatureOfUser/'+this.props.userID,
                                {imgUpload:this.state.imgUpload})
                                .then(res=>{
                                    console.log("GELEN RESPONSEEEEEEEE")
                                    console.log(res)
                                    console.log("GELEN RESPONSEEEEEEEE")
                                })
                                .then(
                                this.props.history.push({
                                    pathname: '/PersonelScreens/PersonelNavigation',
                                }))
                        }

                        } style={{margin: "auto"}} className="btn btn-primary btn-block">İMZAYI YÜKLE
                        </button>

                    </div>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(takeSignature);
