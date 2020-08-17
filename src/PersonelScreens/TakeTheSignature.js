import React from "react";
import {Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function takeSignature() {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <form style={{background:"rgba(239,236,236,0.5)",margin:"auto",borderRadius:"5%",padding:"15px"}}>
                <div style={{display: "flex", justifyContent: "center", textAlign: "center"}}>
                    <h1>
                        LÜTFEN İMZANIZI YÜKLEYİNİZ
                    </h1>
                </div>
                <div style={{display: "flex", justifyContent: "center", textAlign: "center",margin:"10px"}} >
                    <input type="file" id="exampleFormControlFile1"/>
                </div>
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
