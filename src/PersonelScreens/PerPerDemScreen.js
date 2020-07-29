import React from "react";
import Logo from "../logok.png";
import DropDownAreas from "./DropDown";


const items = [
    {
        id: 1,
        value: "VİLLA"
    },
    {
        id: 2,
        value: "SERBEST BÖLGE"
    },
    {
        id: 3,
        value: "ASPENDOS"
    }
]


function PerPerDemScreen() {
    let folderNumb = "551";

    return (
        <div><headPart/></div>
    )
}

const headPart = () => {
    return (
        <div style={{
            display: "flex",
            width: "100%",
            height: "10vw"

        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                flex: 12,
                width: "100%",
                height: "100%"
            }}>
                <div style={{
                    display: "flex",
                    flex: 2,
                    border: "1.35px solid black",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    height: "97%"
                }}>
                    <img src={Logo} style={{
                        display: "flex",
                        height: "95%",
                        flex: 2
                    }}/>
                </div>
                <div style={{
                    flex: 10,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start"
                }}>
                    <div style={{
                        display: "flex",
                        flex: 5,
                        border: "1.35px solid black",
                        borderRadius: "2%",
                        flexDirection: "row",
                        justifyContent: "center"
                    }}>
                        <h1 style={{
                            display: "flex",
                            fontSize: "1.8vw",
                            flex: 4,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>DESIRD TASARIM</h1>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "2vw",
                            flex: 1.5
                        }}>
                            <DropDownAreas/>
                        </div>


                    </div>
                    <div>
                        <div style={{
                            display: "flex",
                            flex: 5,
                            border: "1.35px solid black",
                            borderRadius: "2%",
                            flexDirection: "row",
                            justifyContent: "center"
                        }}>
                            <h1 style={{
                                fontSize: "2vw",
                                display: "flex",
                                fontWeight: "bold",
                                flex: 2.7,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>PERSONEL İZİN BELGESİ FORMU</h1>
                            <h1 style={{
                                display: "flex",
                                fontSize: "1.5vw",
                                flex: 1,
                                border: "1.35px solid black",
                                borderRadius: "2%",
                                alignItems: "center",
                                justifyContent: "center"
                            }}> {folderNumb}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PerPerDemScreen;
{/*
<h1 style={{
                                display: "flex",
                                fontSize:"1.5vw",
                                flex: 1,
                                border: "1.35px solid black",
                                borderRadius: "2%",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                            </h1>




*/
}
