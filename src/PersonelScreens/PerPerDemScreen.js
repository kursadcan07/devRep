import React from "react";
import Logo from "./logok.png";
import {Link} from "react-router-dom";


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
            <div style={{
                display: "flex",
                flex: 1
            }}>
                {perExplPart()}
            </div>
            <div style={{
                display: "flex",
                flex: 1
            }}>
                {vhclUsgInfo()}
            </div>
            <div style={{
                display: "flex",
                flex: 1
            }}>
                {perAccpPart()}
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
                    justifyContent: "flex-start"
                }}>
                    <img src={Logo} alt="Logo" style={{
                        display: "flex",
                        flex: 2
                    }}/>
                </div>
                <div style={{
                    display: "flex",
                    flex: 10,
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
                            fontWeight: "bold",
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
                            flex: 1,
                            border: "0.35px solid black",
                            margin:"auto"
                        }}>
                            (SB)
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
                    fontSize: "15px",
                    fontWeight: "normal",
                    paddingLeft: "4vw",
                    paddingTop:"0.8vw"
                }}
                >PERSONEL ADI SOYADI : </h1>
                <h1 style={{
                    display: "flex",
                    fontFamily: "Roboto",
                    fontSize: "15px",
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
                textAlignment:"center",
                flex: 2,
                height: "100%"
            }}>
                <h1 style={{
                    display: "flex",
                    flex:2,
                    textAlignment: "center",
                   padding:"1vw",
                    fontSize:"16px",
                    margin:"auto",
                    border: "1px solid black"
                }}
                >Talep Tarih : 22/22/2222</h1>
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
                flex: 3

            }}>
                <div style={{
                    display: "flex",
                    flex: 1,
                    border: "0.2px solid black",
                    borderTop:"0px",
                    fontSize: "1.6vw",
                    padding:"0.35vw"
                }}>
                   .
                </div>

                <div style={{
                    display: "flex",
                    flex: 1,
                    border: "0.2px solid black",
                    textAlign:"center",
                    justifyContent:"center",
                    fontSize: "1.6vw"
                }}>
                        TARİHİ
                </div>

                <div style={{
                    display: "flex",
                    flex: 1,
                    border: "0.2px solid black",
                    textAlign:"center",
                    justifyContent:"center",
                    fontSize: "1.6vw"
                }}>
                        SAATİ
                </div>
            </div>


            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 3
            }}>
                <div style={{
                    display: "flex",
                    flex: 1,
                    border: "0.2px solid black",
                    textAlign:"center",
                    justifyContent:"center",
                    borderTop:"0px"
                }}>
                    <h1 style={{
                        paddingTop:"0.5vw",
                        fontSize: "1.7vw"
                    }}>İZİN BAŞLANGIÇ</h1>
                </div>

            <div style={{
                display:"flex",
                justifyContent:"center",
                flex:1,
                alignItems:"center",
                border:"0.2px solid black"
            }}>
                    ----------
            </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    alignItems: "center",
                    border: "0.2px solid black"
                }}>
                    -------
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 3,
                textAlign:"center"
            }}>
                <div style={{
                    display: "flex",
                    flex: 1,
                    border: "0.2px solid black",
                    textAlign:"center",
                    justifyContent:"center",
                    borderTop:"0px"
                }}>
                    <h1 style={{

                        paddingTop:"0.5vw",
                        fontSize: "1.7vw"
                    }}>İZİN BİTİŞ</h1>
                </div>

                <div style={{
                    display: "flex",
                    flex: 1,
                    border: "0.2px solid black",
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    ---------
                </div>

                <div style={{
                    display: "flex",
                    flex: 1,
                    border: "0.2px solid black",
                    justifyContent:"center",
                    alignItems:"center"
                }}>

                        ------

                </div>
            </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 3,
                }}>
                    <div style={{
                        display: "flex",
                        flex: 1,
                        border: "0.2px solid black",
                        textAlign:"center",
                        justifyContent:"center",
                        borderTop:"0px"
                    }}>
                        <h1 style={{
                            display: "flex",
                            paddingTop:"0.5vw",
                            fontSize: "1.7vw"
                        }}>İZİN SÜRESİ</h1>
                    </div>

                    <div style={{
                        display: "flex",
                        flex: 2,
                        border: "0.2px solid black"
                    }}>

                            ------
                    </div>
                </div>
            </div>
    );
}
function vhcUsageOfPers() {
    let compvhcUsg="EVET"
    return(
            <div style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"center",
                flex:4,
                border: "0.2px solid black",
            }}>
                <div style={{
                    display:"flex",
                    flex:2,
                    justifyContent:"center",
                    textAlignment:"center",
                    fontSize:16
                }}
                >
                    GÖREVLİ İSE ŞİRKET ARACI KULLANACAK MI :
                </div>
                <div style={{
                    display:"flex",
                    justifyContent:"flex-start",
                    flexDirection:"row",
                    alignItems:"center",
                    flex:0.60,
                    paddingLeft:"30px",
                    borderLeft: "0.1px solid black",
                    textAlignment:"center"
                }}
                >
                       EVET
                    <input style={{
                        display:"flex",
                        flex:0.3,
                        }} type="checkbox"/>
                </div>

                <div style={{
                    display:"flex",
                    justifyContent:"flex-start",
                    flex:0.60,
                    alignItems:"center",
                    paddingLeft:"20px",
                    borderLeft: "0.1px solid black",
                    textAlignment:"center"
                }}
                >
                        HAYIR
                    <input style={{
                        display:"flex",
                        flex:0.40
                    }} type="checkbox"/>

                </div>

            </div>
    );
}
//HERE THE EXPLANATION OF PERMISSON DEMAND THAT DESCRIBED BY PERSONEL
function perExplPart() {
    return(
        <div style={{
            display:"flex",
            justifyContent:"center",
            flexDirection:"row",
            flex:1
        }}>
            <h1 style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                fontSize:15,
                flex:0.1,
                padding:"0.1vw",
                border:"0.2px solid black",
                height:"100%"
            }}>Açıklama : </h1>
            <textarea  style={{
                display:"flex",
                justifyContent:"center",
                flexDirection:"row",
                flex:0.9
            }} placeholder="İzin Açıklamanızın bulunduğu kısım" maxLength="500" />
        </div>
    )
 }
function vhclUsgInfo() {
    return(
        <div style={{
            display:"flex",
            flex:4,
            flewDirection:"row",
            justifyContent:"center",
            border:"0.35px solid black"
        }}>
            <div style={{
                display:"flex",
                justifyContent:"flex-start",
                flexDirection:"row",
                alignItems:"center",
                flex:1,
                paddingLeft:"30px",
                borderLeft: "0.1px solid black",
                textAlignment:"center",
                padding:"0.2vw"
            }}
            >
               Kendi Aracı:
                <input style={{
                    display:"flex",
                    flex:0.4,
                }} type="checkbox"/>
               <p style={{ display:"flex",border:"0.2px solid black", alignItems:"center",flex:0.2,margin:"auto",fontSize:15}}> ___ km</p>
            </div>
            <div style={{
                display:"flex",
                justifyContent:"flex-start",
                flexDirection:"row",
                alignItems:"center",
                flex:1,
                paddingLeft:"30px",
                borderLeft: "0.1px solid black",
                textAlignment:"center",
                padding:"0.2vw"
            }}
            >
                Otobus/Tramvay:
                <input style={{
                    display:"flex",
                    flex:0.40
                }} type="checkbox"/>
                <p style={{ display:"flex",border:"0.2px solid black", fontSize:15,alignItems:"center",textAlignment:"center",flex:0.2,margin:"auto"}}> ___ ₺</p>
            </div>


        </div>
    )
 }
function perAccpPart() {
    const imza1 = require('./ornImz.png');
    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"row",
            flex:12,
            marginTop:"0.4vw"
        }}>
            <div style={{
                display:"flex",
                flexDirection:"row",
                flex:3,
                textAlignment:"center"
            }}>
                <h1 style={{display:"flex",padding:"5px", margin:"auto",justifyContent:"center",flex:1 , fontSize:15 , border:"0.2px solid black"}}>
                    İZİNLİ PERSONEL ONAYI
                </h1>

                <h1 style={{display:"flex", padding:"5px",margin:"auto",justifyContent:"center", flex:1 , fontSize:15,border:"0.2px solid black"}}>
                   SORUMLU AMİR ONAYI
                </h1>

                <h1 style={{display:"flex", padding:"5px", margin:"auto",justifyContent:"center", flex:1 , fontSize:15,border:"0.2px solid black"}}>
                    ONAYLAYAN
                </h1>
            </div>

            <div style={{
                display:"flex",
                flexDirection:"row",
                flex:3,
                textAlignment:"center"
            }}>
                <h1 style={{display:"flex",padding:"15px", margin:"auto",justifyContent:"center",flex:1 , fontSize:15 , border:"0.2px solid black", borderTop:"0px"}}>
                    ZOZAN KARTAL
                </h1>

                <h1 style={{display:"flex", padding:"15px", margin:"auto", justifyContent:"center", flex:1 , fontSize:15,border:"0.2px solid black",borderTop:"0px"}}>
                    OZAN KARTAL
                </h1>

                <h1 style={{display:"flex", padding:"15px", margin:"auto",justifyContent:"center", flex:1 , fontSize:15,border:"0.2px solid black",borderTop:"0px"}}>
                    KARTAL ZOZAN
                </h1>
            </div>

            <div style={{
                display:"flex",
                flexDirection:"row",
                flex:6,
                textAlignment:"center"
            }}>

                <img src={imza1} alt="imza" style={{
                    border:"0.5px solid black",
                    width:"33vw",
                    height:"5vw",
                    display: "flex",
                    justifyContent:"center",
                    flex:2
                }}/>
                <img src={imza1} alt="imza" style={{
                    border:"0.5px solid black",
                    display: "flex",
                    width:"33vw",
                    height:"5vw",
                    justifyContent:"center",
                    flex:2
                }}/>
                <img src={imza1} alt="imza" style={{
                    border:"0.5px solid black",
                    width:"33vw",
                    height:"5vw",
                    display: "flex",
                    justifyContent:"center",
                    flex:2
                }}/>
            </div>

        </div>
    )
}


export default PerPerDemScreen;
