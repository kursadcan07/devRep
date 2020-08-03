import React from "react";
import Logo from "./logok.png";
import DropDownAreas from "./DropDown";
import DateTimePicker from 'react-datetime-picker';

function PerPerDemScreen() {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    flex: 1
                }}>
                {headPart()}
            </div>

            <div style={{
                display: "flex",
                flex: 1
            }}>
                {underHeadPart()}
            </div>
            <div style={{
                display: "flex",
                flex: 1
            }}>
                {personelInfoPart()}
            </div>
            <div style={{
                display: "flex",
                flex: 1
            }}>
                {personelDatesAndExp()}
            </div>
            <div style={{
                display: "flex",
                flex: 1
            }}>
                {vhcUsageOfPers()}
            </div>
        </div>
    )
}


//ÜSTTEN 2.BLOK KOMPONENT İZİN TÜRÜ ALINIR, BİR KOMPONENTİ DE İÇERDE YARATIR.
function underHeadPart() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "100%",
            margin:"0.1vw",
            alignItems: "row",
            justifyContent: "flex-start"
        }}>
            <div style={{
                display: "flex",
                border: "1px solid black",
                borderRadius: "2%",
                textAlign:"center",
                height: "100%",
            }}>
                <h1 style={{
                    display: "flex",
                    fontFamily: "Roboto",
                    fontSize: "2vw",
                    textAlign: "center",
                    fontWeight: "500",
                    padding: "0.2vw",
                    margin:"0.8vw"
                }}>İZİN TÜRÜ</h1>
            </div>
            <div style={{
                display: "flex",
                width: "100%"
            }}>
                {perAccCompt()}
            </div>
        </div>
    );
}
//İZİN TİPİ SEÇME COMPONENTİ
function perAccCompt() {
    return (
        <div style={{width: "100%"}}>
            <div style={{
                display: "flex",
                flex: 1,
                borderRadius: "2%",
                flexDirection: "row",
                height: "50%",
                width: "100%"
            }}
            >
                <div style={{
                    display: "flex",
                    flex: 1,
                    borderRadius: "2%",
                    alignItems: "center",
                    border: "0.7px solid black",
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 0.5,
                        fontFamily: "Roboto",
                        fontSize: "1.7vw",
                        fontWeight: "normal",
                        paddingLeft: "1vw"
                    }}>Yıllık İzin</h1>
                    <input style={{
                        display: "flex",
                        flex: 0.5,
                        height: "50%"
                    }} type="checkbox"/>
                </div>
                <div style={{
                    display: "flex",
                    flex: 1,
                    borderRadius: "2%",
                    alignItems: "center",
                    border: "0.7px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 0.5,
                        fontFamily: "Roboto",
                        fontSize: "1.7vw",
                        fontWeight: "normal",
                        paddingLeft: "1vw"
                    }}>Görevli</h1>
                    <input style={{
                        display: "flex",
                        flex: 0.5,
                        height: "50%"
                    }} type="checkbox"/>
                </div>
                <div style={{
                    display: "flex",
                    flex: 1,
                    borderRadius: "2%",
                    alignItems: "center",
                    border: "0.7px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 0.5,
                        fontFamily: "Roboto",
                        fontSize: "1.7vw",
                        fontWeight: "normal",
                        paddingLeft: "1vw"
                    }}>Diğer</h1>
                    <input style={{
                        display: "flex",
                        flex: 0.5,
                        height: "50%"
                    }} type="checkbox"/>
                </div>

            </div>
            <div style={{
                display: "flex",
                flex: 1,
                borderRadius: "2%",
                flexDirection: "row",
                height: "53%",
                width: "100%"
            }}
            >
                <div style={{
                    display: "flex",
                    flex: 1,
                    borderRadius: "2%",
                    alignItems: "center",
                    border: "0.7px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 0.5,
                        fontFamily: "Roboto",
                        fontSize: "1.7vw",
                        fontWeight: "normal",
                        paddingLeft: "1vw"
                    }}>Ücretsiz İzin</h1>
                    <input style={{
                        display: "flex",
                        flex: 0.5,
                        height: "50%"
                    }} type="checkbox"/>
                </div>
                <div style={{
                    display: "flex",
                    flex: 1,
                    borderRadius: "2%",
                    alignItems: "center",
                    border: "0.7px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 0.5,
                        fontFamily: "Roboto",
                        fontSize: "1.7vw",
                        fontWeight: "normal",
                        paddingLeft: "1vw",
                    }}>Ücretli İzin</h1>
                    <input style={{
                        display: "flex",
                        flex: 0.5,
                        height: "50%"
                    }} type="checkbox"/>
                </div>
                <div style={{
                    display: "flex",
                    flex: 1,
                    borderRadius: "2%",
                    alignItems: "center",
                    border: "0.7px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 0.5,
                        fontFamily: "Roboto",
                        fontSize: "1.1vw",
                        fontWeight: "normal",
                        paddingLeft: "1vw"
                    }}>2 Ay İçinde Telafi Çalışması Yapacak Şekilde İzin </h1>
                    <input style={{
                        display: "flex",
                        flex: 0.5,
                        height: "50%"
                    }} type="checkbox"/>
                </div>

            </div>
        </div>
    )
}
//ÜST BAŞLIĞIN OLDUĞU KOMPONENT
function headPart() {
    let folderNumb = "551";
    return (
        <div style={{
            display: "flex",
            width: "100%",
            height: "20vw"

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
                    justifyContent: "flex-start"
                }}>
                    <img src={Logo} alt="Logo" style={{
                        display: "flex",
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
                            justifyContent: "center",
                            paddingTop:"0.5vw"
                        }}>DESIRD TASARIM</h1>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "2vw",
                            flex: 1
                        }}>
                            <div style={{
                                display:"flex",
                                flex: 1,
                                border:"1px solid black",
                                alignItems:"center",
                                textAlignment:"center"
                            }}>
                                <h1 style={{
                                    display:"flex",
                                    flex:1,
                                    fontSize:"1vw"
                                }}>(SB)</h1>
                            </div>
                        </div>
                    </div>
                    <div  style={{display: "flex",
                    flex: 5 }}
                    >
                        <div style={{
                            display: "flex",
                            flex: 5,
                            border: "1.35px solid black",
                            borderRadius: "2%",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems:"center"
                        }}>
                            <h1 style={{
                                fontSize: "1.9vw",
                                display: "flex",
                                fontWeight: "bold",
                                flex: 2,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingTop:"0.5vw"
                            }}>PERSONEL İZİN BELGESİ FORMU</h1>
                            <h1 style={{
                                display: "flex",
                                fontSize: "1.3vw",
                                flex: 1,
                                border: "0.1px solid black",
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
//BLOCK THREE
function personelInfoPart() {
    let personelAdSoyad = "Zozan Kartal";
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flex: 6,
            width: "100%"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flex:4,
                flexWrap:"nowrap",
                justifyContent:"flex-start",
                alignItems:"center",
                border: "1px solid black",
                borderTop: "1px solid black",
                borderRight: "0.2px solid black"
            }}>
                <h1 style={{
                    display: "flex",
                    flexWrap:"nowrap",
                    fontFamily: "Roboto",
                    fontSize: "1.65vw",
                    fontWeight: "normal",
                    paddingLeft: "4vw",
                    paddingTop:"0.8vw"
                }}
                >PERSONEL ADI SOYADI : </h1>
                <h1 style={{
                    display: "flex",

                    fontFamily: "Roboto",
                    fontSize: "1.65vw",
                    fontWeight: "normal",
                    paddingLeft: "5vw",
                    paddingTop:"0.8vw"
                }}>
                    {personelAdSoyad}
                    </h1>

            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flex: 2,
                height: "100%"
            }}>
                <input type="date" style={{
                    display: "flex",
                    width: "100%",
                    textAlign: "center",
                    border: "1px solid black"
                }}
                />
            </div>
        </div>
    );
}
//BLOCK FOUR
function personelDatesAndExp() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flex:3
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 3,
            }}>
                <div style={{
                    display: "flex",
                    flex: 1,
                    border: "0.2px solid black"
                }}>
                    <h1 style={{
                        fontSize: "1.7vw",
                        padding: "1.1vw"
                    }}>  </h1>
                </div>

                <div style={{
                    display: "flex",
                    flex: 1,
                    border: "0.2px solid black",
                    textAlign:"center",
                    justifyContent:"center"
                }}>
                    <h1 style={{
                        fontSize: "1.6vw",
                        padding:"0.4vw"
                    }}>
                        TARİHİ
                    </h1>
                </div>

                <div style={{
                    display: "flex",
                    flex: 1,
                    border: "0.2px solid black",
                    textAlign:"center",
                    justifyContent:"center"
                }}>
                    <h1 style={{
                        fontSize: "1.6vw",
                        padding:"0.35vw"
                    }}>
                        SAATİ
                    </h1>
                </div>
            </div>


            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 3,
                height: "10vw"
            }}>
                <div style={{
                    display: "flex",
                    flex: 1,
                    border: "0.2px solid black",
                    textAlign:"center",
                    justifyContent:"center"
                }}>
                    <h1 style={{
                        paddingTop:"0.2vw",
                        fontSize: "1.7vw"
                    }}>İZİN BAŞLANGIÇ</h1>
                </div>

            <div style={{
                display:"flex",
                justifyContent:"center",
                flex:1,
                alignItems:"center",
                padding:"0.4vw",
                border:"1px solid black"
            }}>
                <h1 style={{
                    fontSize: "1vw",
                    padding: "0.3vw"
                }}>-----</h1>

            </div>
                <div style={{
                    display:"flex",
                    justifyContent:"center",
                    flex:1,
                    alignItems:"center",
                    padding:"0.4vw",
                    border:"1px solid black"
                }}>
                    <h1 style={{
                        fontSize: "1vw",
                        padding: "0.3vw"
                    }}>-----</h1>
                </div>

            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 3,
                height: "10vw",
                textAlign:"center"
            }}>
                <div style={{
                    display: "flex",
                    flex: 1,
                    border: "0.2px solid black",
                    textAlign:"center",
                    justifyContent:"center"
                }}>
                    <h1 style={{
                        paddingTop:"0.2vw",
                        fontSize: "1.7vw"
                    }}>İZİN BİTİŞ</h1>
                </div>

                <div style={{
                    display: "flex",
                    flex: 1,
                    border: "0.2px solid black",
                    justifyContent:"center",
                    alignItems:"center",
                    padding:"0.4vw"
                }}>
                    <h1 style={{
                        fontSize: "1vw",
                        padding: "0.3vw"
                    }}>-----</h1>
                </div>

                <div style={{
                    display: "flex",
                    flex: 1,
                    border: "0.2px solid black",
                    justifyContent:"center",
                    alignItems:"center",
                    padding:"0.4vw"
                }}>
                    <h1 style={{
                        fontSize: "1vw",
                        textAlign: "center",
                        padding: "0.3vw"
                    }}>
                        ------

                    </h1>
                </div>
            </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 3,
                    width: "100%",
                    height: "10vw"
                }}>
                    <div style={{
                        display: "flex",
                        flex: 1,
                        border: "0.2px solid black",
                        textAlign:"center",
                        justifyContent:"center"
                    }}>
                        <h1 style={{
                            paddingTop:"0.2vw",
                            fontSize: "1.7vw"
                        }}>İZİN SÜRESİ</h1>
                    </div>

                    <div style={{
                        display: "flex",
                        flex: 2,
                        border: "0.2px solid black"
                    }}>
                        <h1 style={{
                            fontSize: "1vw",
                            padding: "2.5vw"
                        }}>
                            ------
                        </h1>
                    </div>
                </div>
            </div>
    );
}

function vhcUsageOfPers() {
    return(
            <div style={{
                display:"flex",
                flexDirection:"row",
                flex:4,
                border: "0.2px solid black"
            }}>
                <h1 style={{
                    flex:6
                }}>
                    MERHABALAT MERHABALR
                </h1>

            </div>
    );
}

export default PerPerDemScreen;
