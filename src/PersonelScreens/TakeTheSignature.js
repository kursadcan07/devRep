import React from "react";
import {Row} from "react-bootstrap";
import {Link} from "react-router-dom";
{
    /*
    * This class takes signature from user and makes operations with it.
    * */
}
function takeSignature() {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <form style={{background:"rgba(239,236,236,0.5)",margin:"auto",borderRadius:"5%",padding:"15px"}}>
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
                <div style={{display: "flex", justifyContent: "center", textAlign: "center",margin:"10px"}} >
                    <input type="file" id="exampleFormControlFile1"/>
                </div>
                {/*
                    This part contains submit button to take signature from user.Then navigates the user to
                    navigation screen.
                */}
                <div style={{display: "flex", justifyContent: "center", textAlign: "center",margin:"10px"}} >
                    <Link to="/PersonelScreens/PersonelNavigation" style={{display:"flex",justifyContent:"center",margin:"auto"}}>
                        <button type="submit" style={{margin:"auto"}} className="btn btn-primary btn-block" >İMZAYI YÜKLE</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default takeSignature;
