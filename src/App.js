import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from "react-router-dom";
import Logo from "./PersonelScreens/logok.png";
import PerNavScreen from "./PersonelScreens/PerNavScreen";
import PerPerDemScreen from "./PersonelScreens/PerPerDemScreen";
import PerPrevPerDisScreen from "./PersonelScreens/PerPrevPerDisScreen";
import TestPage from "./PersonelScreens/testPage";
import perFillPerScreen from "./PersonelScreens/perFillScreen";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={LoginScreen}/>
                    <Route path="/PersonelScreens/PerNavScreen" component={PerNavScreen}/>
                    <Route path="/PersonelScreens/PerPerDemScreen" component={PerPerDemScreen}/>
                    <Route path="/PersonelScreens/PerPrevPerDisScreen" component={PerPrevPerDisScreen}/>
                    <Route path="/PersonelScreens/testPage" component={TestPage}/>
                    <Route path="/PersonelScreens/perFillScreen" component={perFillPerScreen}/>
                </Switch>
            </div>
        </Router>
    )
}

const LoginScreen = () => (
    <div style={{
        display: "flex",
        flex: 4,
        flexDirection:"column",
        justifyContent: "column",
        alignItems:"center",
        width:"100%"
    }}>
        <img src={Logo} style={{
            display: "flex",
            flexWrap:"wrap",
            flexDirection:"column",
            flex:1,
            height:"20vh"
            }}
             alt="Logo"/>
        <div style={{
            display: "flex",
            flexWrap:"wrap",
            flex: 3,
            backgroundColor: "rgba(153, 145, 145, 0.24)",
            padding:"1.4%",
            borderRadius:"2%",
            flexDirection:"column"
        }}>
            <h1 style={{
                display: "flex",
                textAlign:"center",
                fontFamily: "Roboto",
                fontStyle: "normal" ,
                fontWeight:"22px",
                color: "#675B5B",
                fontSize: "36px",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}>
                İZİN BİLGİ SİSTEMİ
            </h1>

            <div style={{
                display: "flex",
                flexDirection:"row",
                alignItems:"center",
                flex:1,
                justifyContent:"center",
                marginLeft:"5%",
                marginRight:"10%",
                marginBottom:"3%"

            }}>
                <h1 style ={{
                    display: "block",
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "18px",
                    color: "#000000",
                    flex:0.35
                }}>
                    E-Posta:
                </h1>
                <input type="text" style={{
                    flex:0.65
                }}/>
            </div>
            <div style={{
                display: "flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"center",
                flex:1,
                marginLeft:"8%",
                marginRight:"10%"
            }}>
                <h1 style ={{
                    display: "flex",
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "18px",
                    color: "#000000",
                    flex:0.35
                }}>
                   Şifre:
                </h1>
                <input type="text" style={{
                    display: "flex",
                    flex:0.65
                }}/>
            </div>
            <div style={{
                display:"flex",
                flex:1,
                justifyContent:"center",
                alignItems:"center",
                margin:"3%"
            }}>
                <Link to="/PersonelScreens/PerNavScreen" style={{textDecoration:"none"}}>
                        <button style={{
                            display:"flex",
                            fontFamily: "Roboto",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontSize: "18px",
                            lineHeight: "21px",
                            textAlign: "center",
                        }}>
                            GİRİŞ
                        </button>
                </Link>
            </div>
        </div>
        <h1 style={{
            display:"flex",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "18px",
            textAlign: "center"

        }}>
            E-Posta/Şifre uyarı alanı.
        </h1>
    </div>
)

export default App;
