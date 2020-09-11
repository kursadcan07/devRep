import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PersonelNavigation from "./PersonelScreens/PersonelNavigation";
import PreviousPermissions from "./PersonelScreens/PreviousPermissions";
import FillingThePermissionForm from "./PersonelScreens/FillingThePermissionForm";
import SuccesDisplaying from "./PersonelScreens/SuccesMessage";
import NavigateTheChief from "./PersonelScreens/NavigateTheChief";
import DisplayPermissionForm from "./PersonelScreens/DisplayPermissionForm";
import reviseMessage from "./PersonelScreens/ReviseMessageSending";
import StickyHeadTable from "./PersonelScreens/StickyHeadTable";
import ResetThePassword from "./PersonelScreens/ResetThePassword";
import LoginScreen from "./PersonelScreens/LoginScreen";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import trLocale from "date-fns/locale/tr"
import TakeTheSignature from "./PersonelScreens/TakeTheSignature";


/*
This class includes <Router> component with in <Route>.Which describes the paths of the portal.
Login screen created and given as default page here as well.The imported elements that given
above are just imported to add <Route> element.
*/
function App() {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={trLocale}>
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={LoginScreen}  />
                    <Route path="/PersonelScreens/PersonelNavigation" component={PersonelNavigation}/>
                    <Route path="/PersonelScreens/PreviousPermissons" component={PreviousPermissions} />
                    <Route path="/PersonelScreens/FillingThePermissionForm" component={FillingThePermissionForm}/>
                    <Route path="/PersonelScreens/PersonelNavigation" render={(props) => <PersonelNavigation {...props} title={`Props through render`} />}  />
                    <Route path="/PersonelScreens/SuccesDisplaying" component={SuccesDisplaying} />
                    <Route path="/PersonelScreens/NavigateTheChief" component={NavigateTheChief} />
                    <Route path="/PersonelScreens/DisplayPermissionForm" render={(props) => <DisplayPermissionForm {...props} title={`Props through render`} />}/>
                    <Route path="/PersonelScreens/DisplayPermissionForm/:permissionID" render={(props) => <DisplayPermissionForm {...props} title={`Props through render`} />}/>
                    <Route path="/PersonelScreens/ReviseMessageSending" component={reviseMessage}/>
                    <Route path="/PersonelScreens/StickyHeadTable" component={StickyHeadTable}/>
                    <Route path="/PersonelScreens/TakeTheSignature" render={(props) => <TakeTheSignature {...props} title={`Props through render`} />} />
                    <Route path="/PersonelScreens/ResetThePassword" component={ResetThePassword} />
                </Switch>
            </div>
        </Router>
        </MuiPickersUtilsProvider>
    )
}
export default App;
