import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from "react-router-dom";
import Logo from "./PersonelScreens/CompanyLogo.png";
import PersonelNavigation from "./PersonelScreens/PersonelNavigation";
import PermissionDisplay from "./PersonelScreens/PermissionDisplay";
import PreviousPermissons from "./PersonelScreens/PreviousPermissons";
import PermissionFilling from "./PersonelScreens/PermissionFilling";
import NavPrevPer from "./PersonelScreens/SuccesDisplaying";
import SuccesDisplaying from "./PersonelScreens/SuccesDisplaying";
import ChiefNavigation from "./PersonelScreens/ChiefNavigation";
import PreviousPermissonsChief from "./PersonelScreens/PreviousPermissionsChief";
import PermissionToAccept from "./PersonelScreens/PermissionToAccept";
import reviseMessage from "./PersonelScreens/ReviseMessageSending";
import myApp from "./PersonelScreens/myApp";

/*
const counter = useSelector(state => state.counter);
const isLogged = useSelector(state => state.isLogged);
const dispatch = useDispatch();

onClick{}

*/
function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={LoginScreen}/>
                    <Route path="/PersonelScreens/PersonelNavigation" component={PersonelNavigation}/>
                    <Route path="/PersonelScreens/PermissionDisplay" component={PermissionDisplay}/>
                    <Route path="/PersonelScreens/PreviousPermissons" component={PreviousPermissons}/>
                    <Route path="/PersonelScreens/PermissionFilling" component={PermissionFilling}/>
                    <Route path="/PersonelScreens/PersonelNavigation" component={NavPrevPer} />
                    <Route path="/PersonelScreens/SuccesDisplaying" component={SuccesDisplaying} />
                    <Route path="/PersonelScreens/ChiefNavigation" component={ChiefNavigation} />
                    <Route path="/PersonelScreens/PreviousPermissionsChief" component={PreviousPermissonsChief} />
                    <Route path="/PersonelScreens/PermissionToAccept" component={PermissionToAccept}/>
                    <Route path="/PersonelScreens/ReviseMessageSending" component={reviseMessage}/>
                    <Route path="/PersonelScreens/myApp" component={myApp}/>

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
        justifyContent: "center",
        alignItems:"center",
        margin:"0px"
    }}>

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
            <h3 style={{
                textAlign:"center",
                margin:"10px"
            }}> İZİN BİLGİ SİSTEMİ</h3>

            <div className="form-group">
                <input type="email" className="form-control" placeholder="E-Posta" />
            </div>

            <div className="form-group">
                <input type="password" className="form-control" placeholder="Şifre" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Beni hatırla</label>
                </div>
            </div>
            <Link to="/PersonelScreens/PersonelNavigation">
                <button type="submit" className="btn btn-primary btn-block">Giriş</button>
                <p className="forgot-password text-right">
                    Şifremi <a href="#">unuttum</a>
                </p>
            </Link>
        </form>
    </div>
)

export default App;
