import React from "react";
import {Link} from "react-router-dom";
function dispNavAftPreCrea() {
    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            textAlign:"center",
            flex:4
        }}>
            <h1 style={{
                display:"flex",
                justifyContent:"center",
                fontFamily:"Scada",
                fontSize:"35px",
                borderBottom:"1px solid black",
                margin:"auto",
                color:"rgb(5,73,5)",
                flex:3,
                marginTop:"15px"
            }}>
             REVİZE MEKTUBUNUZ BAŞARIYLA YARATILMIŞTIR
            </h1>
            <Link to="PreviousPermissons" style={{
                textDecoration: "none",
                display: "flex",
                flex: 1,
                margin:"20px"
            }}>
                <button type="button" className="btn btn-outline-success" style={{display:"flex", flex:1}}>İZİN TALEPLERİNİ GÖTÜNTÜLEMEYE DÖN</button>
            </Link>
        </div>
    )
}
export default dispNavAftPreCrea;
