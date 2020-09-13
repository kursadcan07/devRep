import React from "react";
import setSignatureAction from "../actions/setUsersSignature";
import {connect} from "react-redux";

const axios = require('axios');

const api = axios.create({
    baseURL: `http://localhost:4000`
})


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
        userSignature: state.userLoginReducer.userSignature,
        userMail: state.userLoginReducer.userMail,
        personalName: state.userLoginReducer.personalName,
        userStatus: state.userLoginReducer.userStatus,
        chiefID: state.userLoginReducer.chiefID,
        generalManagerID: state.userLoginReducer.generalManagerID,
        userArea: state.userLoginReducer.userArea
    }
};

class takeSignature extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imgUpload:undefined,
            imgUploadForblod:undefined,
        }

        this.onFileChange = this.onFileChange.bind(this)
        this.onFileUpload = this.onFileUpload.bind(this);

    }

    onFileChange(event) {
        this.setState({imgUpload: event.target.files[0]});
        this.setState({imgUploadForblod: URL.createObjectURL(event.target.files[0])});


    }

    onFileUpload() {

        let imgFormObj = new FormData();
        imgFormObj.append("imageName","multer-image-" + Date.now());
        imgFormObj.append("imageData",this.state.imgUpload)

        api.post("/uploadmulter/"+this.props.userID,imgFormObj).then(
            (data)=>{

                console.log(data,"ŞEKLİNDE İMZA KAYDEDİLDİ")

            }
        )
        if(this.props.userStatus===1) {
            this.props.history.push({
                pathname: '/PersonelScreens/PersonelNavigation',
            })
        }else{
            this.props.history.push({
                pathname: '/PersonelScreens/NavigateTheChief',
            })
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
                        <input type="file" className="input-file" name="imgUpload" accept='.png'
                               onChange={this.onFileChange}/>
                    </div>
                    {/*
                    This part contains submit button to take signature from user.Then navigates the user to
                    navigation screen.
                */}
                    <div style={{display: "flex", justifyContent: "center", textAlign: "center", margin: "10px"}}>

                        <button type="button" onClick={this.onFileUpload
                        } style={{margin: "auto"}} className="btn btn-primary btn-block">İMZAYI YÜKLE
                        </button>

                    </div>
                </form>
                <img src={this.state.imgUploadForblod} alt="upload-image" className="process__image" />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(takeSignature);
