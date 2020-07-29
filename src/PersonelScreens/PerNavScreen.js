import React from "react";
import {Link} from "react-router-dom";

function PerNavScreen() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flex: 4,
            flexWrap: "wrap",
            justifyContent: "flex-start",
            height: "80vh",
            width: "100%",
            marginLeft: "1%",
            marginRight: "1%"
        }}>

            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%"
            }}>
                <Link to="PerPerDemScreen" style={{display:"flex",flex:2,textDecoration:"none"}}>
                    <button
                        style={{
                            display: "flex",
                            background: "#CFC2C2",
                            borderRadius: "2%",
                            fontFamily: "Roboto",
                            textAlign: "center",
                            borderWidth: "1.1px",
                            flex: 2

                        }}>
                        <h1 style={{flex: 2}}>
                            İZİN <br/>TALEBİ <br/> OLUŞTUR
                        </h1>

                    </button>
                </Link>
                <Link to="PerPrevPerDisScreen" style={{display:"flex",flex:2,textDecoration:"none"}}>
                    <button style={{
                        alignContent: "center",
                        display: "flex",
                        textAlign: "center",
                        flex: 2,
                        background: "#CFC2C2",
                        borderRadius: "2%",
                        borderWidth: "1.1px",
                        fontFamily: "Roboto"
                    }}>

                        <h1 style={{flex: 2}}>
                            GEÇMİŞ <br/> İZİNLERİ <br/> GÖRÜNTÜLE
                        </h1>

                    </button>
                </Link>
                <br/>
            </div>
        </div>


    )
}

export default PerNavScreen;
