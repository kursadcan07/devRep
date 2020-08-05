import React from "react";
import Logo from "./logok.png";
import {Link} from "react-router-dom";


function PerPerDemScreen() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            flex: 8
        }}>
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
            flex:6
        }}>
            <div style={{
                display: "flex",
                flex:1,
                justifyContent:"center",
                border: "0.5px solid black",
                borderRadius: "2%",
                textAlign: "center"
            }}>
                <h1 style={{
                    display:"flex",
                    flex:1,
                    fontFamily:"Scada",
                    fontSize:"22px",
                    margin:"auto",
                    justifyContent:"center"
                }}>
                    İZİN TÜRÜ
                </h1>

            </div>
            <div style={{
                display: "flex",
                flex:5
            }}>
                {perAccCompt()}
            </div>
        </div>
    );
}

//İZİN TİPİ SEÇME COMPONENTİ
function perAccCompt() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            flex: 6,
            border: "0.2px solid black"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flex: 3
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    borderRight: "0.1px solid black",
                    borderBottom: "0.1px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        justifyContent: "center",
                        flex: 0.8,
                        fontFamily:"Scada",
                        fontSize: "18px",
                        margin:"auto"
                    }}>
                        Yıllık İzin
                    </h1>

                    <input type="checkbox" style={{
                        margin:"auto",
                        display: "flex",
                        flex: 0.2,
                        height:"80%",
                    }}/>
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    borderRight: "0.1px solid black",
                    borderBottom: "0.1px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 0.8,
                        justifyContent: "center",
                        fontFamily:"Scada",
                        fontSize: "18px",
                        margin:"auto"
                    }}>
                        Görevli
                    </h1>

                    <input type="checkbox" style={{
                        display: "flex",
                        flex: 0.2,
                        height:"80%",
                        margin:"auto"
                    }}/>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    borderBottom: "0.1px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 0.8,
                        justifyContent: "center",
                        fontFamily:"Scada",
                        fontSize: "18px",
                        margin:"auto"
                    }}>
                        Diğer
                    </h1>
                    <input type="checkbox" style={{
                        display: "flex",
                        flex: 0.2,
                        height:"80%",
                        margin:"auto"
                    }}/>
                </div>
            </div>
            <div style= {{
                display: "flex",
                flexDirection: "row",
                flex: 3
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    borderRight:"0.1px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        justifyContent: "center",
                        flex: 0.8,
                        fontSize: "14px",
                        margin:"auto",
                        fontFamily:"Scada"
                    }}>
                        Ücretsiz İzin
                    </h1>

                    <input type="checkbox" style={{
                        margin:"auto",
                        display: "flex",
                        flex: 0.2,
                        height:"80%",
                    }}/>
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    borderRight: "0.1px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 0.8,
                        justifyContent: "center",
                        fontSize: "16px",
                        fontFamily:"Scada",
                        margin:"auto"
                    }}>
                        Ücretli İzin
                    </h1>

                    <input type="checkbox" style={{
                        display: "flex",
                        flex: 0.2,
                        height:"80%",
                        margin:"auto"
                    }}/>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 0.8,
                        justifyContent: "center",
                        fontSize: "12px",
                        fontFamily:"Scada",
                        margin:"auto"
                    }}>
                        2 Ay İçinde Telafi Yapılacak
                    </h1>
                    <input type="checkbox" style={{
                        display: "flex",
                        flex: 0.2,
                        height:"80%",
                        margin:"auto"
                    }}/>
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
            flexDirection: "row",
            flex: 5,
            border: "0.1px solid black"
        }}>
            <img src={Logo} alt="Logo" style={{
                display: "flex",
                flex: 1,
                width: "200px",
                height: "100px",
                margin: "0.1vw",
                border: "0.1px solid black",
                borderRadius: "2%"
            }}/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 4,

            }}>
                <div style={{
                    display: "flex",
                    flex: 2,
                    justifyContent: "flex-start",
                    border: "0.1px solid black",
                    margin: "0.1vw",

                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 1.8,
                        justifyContent: "center",
                        fontSize: "3vw",
                        fontWeight: "normal",
                        margin: "auto",
                        fontFamily: "Scada"
                    }}>
                        DESIRD TASARIM
                    </h1>

                    <h1 style={{
                        display: "flex",
                        flex: 0.2,
                        fontSize: "2.5vw",
                        justifyContent: "center",
                        margin: "auto",
                        fontFamily: "Scada"
                    }}>
                        (AS)
                    </h1>
                </div>

                <div style={{
                    display: "flex",
                    flex: 2,
                    justifyContent: "flex-start",
                    border: "0.1px solid black",
                    margin: "0.1vw",

                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 1.9,
                        textAlign: "center",
                        justifyContent: "center",
                        fontSize: "2.5vw",
                        fontWeight: "normal",
                        margin: "auto",
                        fontFamily: "Scada"
                    }}>
                        PERSONEL İZİN BELGESİ FORMU
                    </h1>

                    <h1 style={{
                        display: "flex",
                        flex: 0.1,
                        fontSize: "2.5vw",
                        justifyContent: "center",
                        margin: "auto",
                        border: "0.5px solid black",
                        fontFamily: "Scada"
                    }}>
                        No:50
                    </h1>
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
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flex: 4.333,
                border:"0.5px solid black"

            }}>
                <h1 style={{
                    display: "flex",
                    justifyContent:"center",
                    flex:1,
                    textAlign:"center",
                    fontFamily: "Scada",
                    margin:"auto",
                    fontSize: "18px",
                    borderTop:"0px",
                    fontWeight: "normal"
                }}
                >AD SOYAD</h1>
                <div style={{
                        display: "flex",
                        justifyContent:"center",
                        flex:3.333,
                        border:"0.5px solid black",
                        borderLeft:"1px solid black",
                        borderTop:"0px"

                    }}
                    >
                    <h1 style={{
                        display: "flex",
                        flex:3.333,
                        justifyContent:"center",
                        margin:"auto",
                        fontFamily: "Scada",
                        fontSize: "15px",
                        textAlign:"center"
                    }}
                    >
                        KARTAL DUMAN
                    </h1>
                 </div>
            </div>
            <div style={{
                display: "flex",
                flex:1.666,
                justifyContent:"center"
            }}>
                <h1 style={{
                    display: "flex",
                    flex:1.667,
                    justifyContent:"center",
                    textAlign:"center",
                    margin:"auto",
                    fontSize:"18px",
                    fontFamily:"Scada",
                    borderBottom:"0.5px solid black",
                    borderRight:"0.5px solid black"
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
            flex: 3
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
                    borderTop: "0px",
                    fontSize: "1.6vw",
                    padding: "0.35vw"
                }}>
                    .
                </div>

                <div style={{
                    display: "flex",
                    flex: 1,
                    border: "0.2px solid black",
                    textAlign: "center",
                    justifyContent: "center",
                    fontSize: "1.6vw"
                }}>
                    TARİHİ
                </div>

                <div style={{
                    display: "flex",
                    flex: 1,
                    border: "0.2px solid black",
                    textAlign: "center",
                    justifyContent: "center",
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
                    textAlign: "center",
                    justifyContent: "center",
                    borderTop: "0px"
                }}>
                    <h1 style={{
                        paddingTop: "0.5vw",
                        fontSize: "1.7vw"
                    }}>İZİN BAŞLANGIÇ</h1>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    alignItems: "center",
                    border: "0.2px solid black"
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
                textAlign: "center"
            }}>
                <div style={{
                    display: "flex",
                    flex: 1,
                    border: "0.2px solid black",
                    textAlign: "center",
                    justifyContent: "center",
                    borderTop: "0px"
                }}>
                    <h1 style={{

                        paddingTop: "0.5vw",
                        fontSize: "1.7vw"
                    }}>İZİN BİTİŞ</h1>
                </div>

                <div style={{
                    display: "flex",
                    flex: 1,
                    border: "0.2px solid black",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    ---------
                </div>

                <div style={{
                    display: "flex",
                    flex: 1,
                    border: "0.2px solid black",
                    justifyContent: "center",
                    alignItems: "center"
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
                    textAlign: "center",
                    justifyContent: "center",
                    borderTop: "0px"
                }}>
                    <h1 style={{
                        display: "flex",
                        paddingTop: "0.5vw",
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
    let compvhcUsg = "EVET"
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flex: 4,
            border: "0.2px solid black",
        }}>
            <div style={{
                display: "flex",
                flex: 2,
                justifyContent: "center",
                textAlignment: "center",
                fontSize: "1.5vw",
                fontFamily: "roboto"
            }}
            >
                GÖREVLİ İSE ŞİRKET ARACI KULLANACAK MI :
            </div>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                flex: 0.60,
                paddingLeft: "30px",
                borderLeft: "0.1px solid black",
                textAlignment: "center",
                fontFamily: "roboto",
                fontSize: "2vw"
            }}
            >
                EVET
                <input style={{
                    display: "flex",
                    flex: 0.3,
                }} type="checkbox"/>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                flex: 0.60,
                alignItems: "center",
                paddingLeft: "20px",
                borderLeft: "0.1px solid black",
                textAlignment: "center",
                fontSize: "2vw",
                fontFamily: "Roboto"
            }}
            >
                HAYIR
                <input style={{
                    display: "flex",
                    flex: 0.40
                }} type="checkbox"/>

            </div>

        </div>
    );
}

//HERE THE EXPLANATION OF PERMISSON DEMAND THAT DESCRIBED BY PERSONEL
function perExplPart() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            flex: 1
        }}>
            <h1 style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 15,
                flex: 0.1,
                padding: "0.1vw",
                border: "0.2px solid black",
                height: "100%"
            }}>Açıklama : </h1>
            <textarea style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                flex: 0.9
            }} placeholder="İzin Açıklamanızın bulunduğu kısım" maxLength="500"/>
        </div>
    )
}

//HERE WE TAKE
function vhclUsgInfo() {
    return (
        <div style={{
            display: "flex",
            flex: 4,
            flewDirection: "row",
            justifyContent: "center",
            border: "0.35px solid black"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
                paddingLeft: "30px",
                borderLeft: "0.1px solid black",
                textAlignment: "center",
                padding: "0.2vw"
            }}
            >
                Kendi Aracı:
                <input style={{
                    display: "flex",
                    flex: 0.4,
                }} type="checkbox"/>
                <p style={{
                    display: "flex",
                    border: "0.2px solid black",
                    alignItems: "center",
                    flex: 0.2,
                    margin: "auto",
                    fontSize: 15
                }}> ___ km</p>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
                paddingLeft: "30px",
                borderLeft: "0.1px solid black",
                textAlignment: "center",
                padding: "0.2vw"
            }}
            >
                Otobus/Tramvay:
                <input style={{
                    display: "flex",
                    flex: 0.40
                }} type="checkbox"/>
                <p style={{
                    display: "flex",
                    border: "0.2px solid black",
                    fontSize: 15,
                    alignItems: "center",
                    textAlignment: "center",
                    flex: 0.2,
                    margin: "auto"
                }}> ___ ₺</p>
            </div>


        </div>
    )
}

function perAccpPart() {
    const imza1 = require('./ornImz.png');
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "row",
            flex: 12,
            marginTop: "0.4vw"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flex: 3,
                textAlignment: "center"
            }}>
                <h1 style={{
                    display: "flex",
                    padding: "5px",
                    margin: "auto",
                    justifyContent: "center",
                    flex: 1,
                    fontSize: 15,
                    border: "0.2px solid black"
                }}>
                    İZİNLİ PERSONEL ONAYI
                </h1>

                <h1 style={{
                    display: "flex",
                    padding: "5px",
                    margin: "auto",
                    justifyContent: "center",
                    flex: 1,
                    fontSize: 15,
                    border: "0.2px solid black"
                }}>
                    SORUMLU AMİR ONAYI
                </h1>

                <h1 style={{
                    display: "flex",
                    padding: "5px",
                    margin: "auto",
                    justifyContent: "center",
                    flex: 1,
                    fontSize: 15,
                    border: "0.2px solid black"
                }}>
                    ONAYLAYAN
                </h1>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "row",
                flex: 3,
                textAlignment: "center"
            }}>
                <h1 style={{
                    display: "flex",
                    padding: "15px",
                    margin: "auto",
                    justifyContent: "center",
                    flex: 1,
                    fontSize: 15,
                    border: "0.2px solid black",
                    borderTop: "0px"
                }}>
                    ZOZAN KARTAL
                </h1>

                <h1 style={{
                    display: "flex",
                    padding: "15px",
                    margin: "auto",
                    justifyContent: "center",
                    flex: 1,
                    fontSize: 15,
                    border: "0.2px solid black",
                    borderTop: "0px"
                }}>
                    OZAN KARTAL
                </h1>

                <h1 style={{
                    display: "flex",
                    padding: "15px",
                    margin: "auto",
                    justifyContent: "center",
                    flex: 1,
                    fontSize: 15,
                    border: "0.2px solid black",
                    borderTop: "0px"
                }}>
                    KARTAL ZOZAN
                </h1>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "row",
                flex: 6,
                textAlignment: "center"
            }}>
                <img src={imza1} alt="imza" style={{
                    border: "0.5px solid black",
                    width: "33vw",
                    height: "5vw",
                    display: "flex",
                    justifyContent: "center",
                    flex: 2
                }}/>
                <img src={imza1} alt="imza" style={{
                    border: "0.5px solid black",
                    display: "flex",
                    width: "33vw",
                    height: "5vw",
                    justifyContent: "center",
                    flex: 2
                }}/>
                <img src={imza1} alt="imza" style={{
                    border: "0.5px solid black",
                    width: "33vw",
                    height: "5vw",
                    display: "flex",
                    justifyContent: "center",
                    flex: 2
                }}/>
            </div>

        </div>
    )
}

export default PerPerDemScreen;
