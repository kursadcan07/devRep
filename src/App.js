import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from "react-router-dom";
import Logo from "./PersonelScreens/SystemImages/CompanyLogo.png";
import PersonelNavigation from "./PersonelScreens/PersonelNavigation";
import PreviousPermissons from "./PersonelScreens/PreviousPermissons";
import FillingThePermissionForm from "./PersonelScreens/FillingThePermissionForm";
import NavPrevPer from "./PersonelScreens/SuccesDisplaying";
import SuccesDisplaying from "./PersonelScreens/SuccesDisplaying";
import NavigateTheChief from "./PersonelScreens/NavigateTheChief";
import DisplayPermissionsForChief from "./PersonelScreens/DisplayPermissionsForChief";
import DisplayThePermissionForm from "./PersonelScreens/DisplayThePermissionForm";
import reviseMessage from "./PersonelScreens/ReviseMessageSending";
import StickyHeadTable from "./PersonelScreens/StickyHeadTable";


/*
This class includes <Router> component with in <Route>.Which describes the paths of the portal.
Login screen created and given as default page here as well.

*/
function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={LoginScreen}/>
                    <Route path="/PersonelScreens/PersonelNavigation" component={PersonelNavigation}/>
                    <Route path="/PersonelScreens/PreviousPermissons" component={PreviousPermissons}/>
                    <Route path="/PersonelScreens/FillingThePermissionForm" component={FillingThePermissionForm}/>
                    <Route path="/PersonelScreens/PersonelNavigation" component={NavPrevPer} />
                    <Route path="/PersonelScreens/SuccesDisplaying" component={SuccesDisplaying} />
                    <Route path="/PersonelScreens/ChiefNavigation" component={NavigateTheChief} />
                    <Route path="/PersonelScreens/DisplayPermissionsForChief" component={DisplayPermissionsForChief} />
                    <Route path="/PersonelScreens/DisplayThePermissionForm" component={DisplayThePermissionForm}/>
                    <Route path="/PersonelScreens/ReviseMessageSending" component={reviseMessage}/>
                    <Route path="/PersonelScreens/StickyHeadTable" component={StickyHeadTable}/>
                </Switch>
            </div>
        </Router>
    )
}
/*
    Here the login screen that displayed at the beginning.Allows to user login , remember me and forgot password.
    In addition company logo displayed at the top.
*/
const LoginScreen = () => (
    /*
        Here the main div of the login screen.
    */
    <div style={{
        display: "flex",
        flex: 4,
        flexDirection:"column",
        justifyContent: "center",
        alignItems:"center",
        margin:"0px"
    }}>
        {/*
            Here the company logo.
        */}
        <img src={Logo} style={{
            display: "flex",
            flexWrap:"wrap",
            flexDirection:"column",
            flex:1,
            height:"20vh",
            margin:"10px"
            }}
             alt="Logo"/>
        <form style={{ margin:"10px"}}>
            {/*
                Here the header of the login screen.
            */}
            <h3 style={{
                textAlign:"center",
                margin:"10px"
            }}> İZİN BİLGİ SİSTEMİ</h3>
            {/*
                Here we take e-mail address of the user as a input.
            */}
            <div className="form-group">
                <input type="email" className="form-control" placeholder="E-Posta" />
            </div>
            {/*
                Here we take password of the user as a input.
            */}
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Şifre" />
            </div>
            {/*
               Here the remember me part as a check-box.
            */}
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Beni hatırla</label>
                </div>
            </div>
            {/*
                Here the login button that allows to user login.
            */}
            <Link to="/PersonelScreens/PersonelNavigation">
                <button type="submit" className="btn btn-primary btn-block">Giriş</button>
            </Link>
            {/*
                Here the part of I forgot my password.
            */}
            <p className="forgot-password text-right">
               <a href="#">  Şifremi unuttum</a>
            </p>
        </form>
    </div>
)

export default App;
