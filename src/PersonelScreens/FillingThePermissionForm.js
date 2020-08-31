import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "react-datepicker/dist/react-datepicker.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import setPermissionAction from "../actions/setPermissionAction";
import {KeyboardDateTimePicker} from "@material-ui/pickers";



/*
   This class allows to user that filling the permission form.
   This class takes several attributes from users that are mainly
   important for Permission Demand process.
   Mentioned attributes are as following :
    1) İzin Tipi Seçiniz (Dropdown component) => [ Yıllık , Görevli ,Ücretli ,2 Ay İçinde İzin Telafisi Yapacak , Ücretsiz ]
    2) İzin Başlangıç Tarihi Seçiniz (DatePicker component) => [d:MMMM:y]
    3) Başlangıç Saat/Dk Seçimi (TimePicker component) => [HH:mm]
    4) İzin Bitiş Tarihi Seçiniz (DatePicker component) => [d:MMMM:y]
    5) Bitiş Saat/Dk Seçimi (TimePicker component) => [HH:mm]
    6) Araç Kullanım Durumu Seçiniz (Dropdown component) =>
        [Araç Kullanılmayacak , Şirket Aracı , Otobus/Travmay (Extra input box occures when selected),Şahsi Araç (Extra input box occures when selected)
    7) İzin Açıklaması Doldurunuz (Textarea Component)
    8) Onaylamaya Geç (Button Component)
    9) Uyarı Alanı (<h1> component)
*/



const mapStateToProps = (state) => {
    return {

        userStatus: state.permissionReducer.userStatus,
        displayStatus:state.permissionReducer.displayStatus,

        userID: state.permissionReducer.userID,
        permissionDescription: state.permissionReducer.permissionDescription,
        personalName: state.permissionReducer.personalName,
        beginDateOfPermission: state.permissionReducer.beginDateOfPermission,
        endDateOfPermission: state.permissionReducer.endDateOfPermission,
        selectVehicleUsageName: state.permissionReducer.selectVehicleUsageName,
        selectVehicleUsageID: state.permissionReducer.selectVehicleUsageID,
        priceOfTrainOrBus: state.permissionReducer.priceOfTrainOrBus,
        totalDistanceOfIndividualCar: state.permissionReducer.totalDistanceOfIndividualCar,

        foldCode:state.permissionReducer.foldCode,
        areaCode:state.permissionReducer.areaCode,

        displayThePermissionName: state.permissionReducer.displayThePermissionName,
        setPermissionType: state.permissionReducer.setPermissionType
    }
};
function inputForBus(usageID) {
    if (usageID==="v3") {
        return (
            <div className="justify-content-center">
                <input type="text" style={{height: "100%", margin: "0.1vw"}} placeholder="Ücret (₺)"
                       value={this.props.priceOfTrainOrBus|| null} onChange={this.takePriceForBusAndTrain}/>
            </div>
        )
    } else {
        return null;
    }
}

function inputForDist(usageID) {
    if (usageID==="v4") {
        return (
            <div>
                <input type="text" style={{height: "100%", margin: "0.1vw"}} placeholder="Gidiş-Geliş (km)"
                       value={this.props.totalDistanceOfIndividualCar|| null} onChange={this.takeTotalDistanceForIndividualCar}/>
            </div>
        )
    } else {
        return null;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPermission: (permissionData) => {
            dispatch(setPermissionAction(permissionData));
        }
    }
};
/*
    This function takes time input from user as a input.In format of HH:mm .
*/
/*
    This components are created for converting DateTime into Turkish language.
*/

/*
    This class created for filling the form of permission demand.
 */
class FillingThePermissionForm extends React.Component {
    /*
        Constructor defines state with attributes and binds the functions in it.
    */
    constructor(props) {
        super(props)


        this.state = {
            displayThePermissionName: props.displayThePermissionName || "İzin Tipinizi Seçiniz",
            setPermissionType: props.setPermissionType,

            userStatus: props.userStatus,
            displayStatus:props.displayStatus,

            beginDateOfPermission:props.beginDateOfPermission || new Date("2020-01-01T00:00"),
            endDateOfPermission: props.endDateOfPermission || new Date("2020-01-01T00:00"),

            selectVehicleUsageName: props.selectVehicleUsageName || "Araç Kullanım Durumu Seçiniz",
            selectVehicleUsageID: props.selectVehicleUsageID || "",

            foldCode:props.foldCode,
            areaCode:props.areaCode,

            priceOfTrainOrBus: 0,
            totalDistanceOfIndividualCar:0,
            displayEnterPriceBox: false,
            displayEnterDistanceBox: false,
            permissionDescription: props.permissionDescription || ""
        }

        this.selectTheTypeOfPermission = this.selectTheTypeOfPermission.bind(this);

        this.handleBeginDateOfPermission = this.handleBeginDateOfPermission.bind(this);
        this.handleEndDateOfPermission = this.handleEndDateOfPermission.bind(this);


        this.handleTheSelectionOfVehicle = this.handleTheSelectionOfVehicle.bind(this);
        this.takePriceForBusAndTrain = this.takePriceForBusAndTrain.bind(this);
        this.updatePermissionDescription = this.updatePermissionDescription.bind(this);
        this.takeTotalDistanceForIndividualCar = this.takeTotalDistanceForIndividualCar.bind(this);

        inputForBus = inputForBus.bind(this);
        inputForDist = inputForDist.bind(this);

    }

    selectTheTypeOfPermission(event) {
        this.setState({
            displayThePermissionName: event.target.name,
            setPermissionType: event.target.id
        })

    }

    takeTotalDistanceForIndividualCar(event) {
        this.setState({
            totalDistanceOfIndividualCar: event.target.value
        });
    }

    takePriceForBusAndTrain(event) {
        this.setState({
            priceOfTrainOrBus: event.target.value
        });
    }

    handleTheSelectionOfVehicle(event) {
        this.setState({
            selectVehicleUsageName: event.target.name,
            selectVehicleUsageID: event.target.id
        })
    }

    updatePermissionDescription(event) {
        this.setState({permissionDescription: event.target.value})
    }

    handleBeginDateOfPermission(date) {
        this.setState({
            beginDateOfPermission: date
        });

    }

    handleEndDateOfPermission(date) {
        this.setState({
            endDateOfPermission: date
        });
    }

    render() {
        return (
            <Container>
                {/*
                    This container contains whole selections of Permission Demand Form.
                    Takes needed inputs from employee.
                */}
                <Col style={{
                    backgroundColor: "rgba(54,35,97,0.07)",
                    paddingBottom: "1vw",
                    margin: "4px",
                    borderRadius: "2%"
                }}>
                    {/* Here the header part as text */}
                    <Row className="justify-content-center" style={{marginTop: "2vw"}}>
                        <p style={{
                            borderBottom: "2px solid rgba(255,255,255,1)",
                            fontStyle: "normal",
                            textAlign: "center",
                            fontSize: 28,
                            color: "rgb(9,7,49)",
                            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                        }}>İZİN TALEBİ YARATMA
                        </p>
                    </Row>
                    {/* Here the permission type selection as dropdown */}
                    <Row className="justify-content-center"
                         style={{color: "black", marginTop: "2px", marginBottom: "8px"}}>
                        <DropdownButton id="dropdown-item-button" title={this.state.displayThePermissionName}>
                            <Dropdown.Item id="1" as="button" name="Yıllık"
                                           onClick={this.selectTheTypeOfPermission}>Yıllık</Dropdown.Item>
                            <Dropdown.Item id="2" as="button" name="Görevli"
                                           onClick={this.selectTheTypeOfPermission}>Görevli</Dropdown.Item>
                            <Dropdown.Item id="3" as="button" name="Ücretli"
                                           onClick={this.selectTheTypeOfPermission}>Ücretli</Dropdown.Item>
                            <Dropdown.Item id="4" as="button" name="2 Ay İçinde Telafisi Yapılacak"
                                           onClick={this.selectTheTypeOfPermission}>2 Ay İçinde Telafisi
                                Yapılacak</Dropdown.Item>
                            <Dropdown.Item id="5" as="button" name="Ücretsiz"
                                           onClick={this.selectTheTypeOfPermission}>Ücretsiz</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item id="6" as="button" name="Diğer"
                                           onClick={this.selectTheTypeOfPermission}>Diğer</Dropdown.Item>
                        </DropdownButton>
                    </Row>
                    {/* Here the date picker part for begin date of permission */}
                    <Row className="justify-content-center" style={{margin: "10px"}}>
                        <KeyboardDateTimePicker
                            value={this.state.beginDateOfPermission}
                            label="İzin Başlangıç"
                            onError={console.log}
                            onChange={this.handleBeginDateOfPermission}
                            format="dd-MM-yyyy HH:mm:ss "
                            ampm={false}
                        />
                    </Row>
                    {/* Here the end date part of permission */}
                    <Row className="justify-content-center" style={{margin: "10px"}}>
                        <KeyboardDateTimePicker
                            value={this.state.endDateOfPermission}
                            label="İzin Bitiş"
                            onError={console.log}
                            onChange={this.handleEndDateOfPermission}
                            format="dd-MM-yyyy HH:mm:ss "
                            ampm={false}
                        />
                    </Row>
                    {/* Here the vehicle usage selection part as dropdown */}
                    <Row className="justify-content-center" style={{margin: "10px"}}>
                        <DropdownButton id="dropdown-item-button" title={this.props.selectVehicleUsageName}>
                            <Dropdown.Item id="v1" name="Araç Kullanılmayacak" as="button"
                                           onClick={this.handleTheSelectionOfVehicle}>Araç
                                Kullanılmayacak</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item id="v2" as="button" name="Şirket Aracı Kullanılacak"
                                           onClick={this.handleTheSelectionOfVehicle}>Şirket Aracı
                                Kullanılacak</Dropdown.Item>
                            <Dropdown.Item id="v3" as="button" name="Otobus/Tramvay Kullanılacak"
                                           onClick={this.handleTheSelectionOfVehicle}>Otobus/Tramvay
                                Kullanılacak </Dropdown.Item>
                            <Dropdown.Item id="v4" as="button" name="Şahsi Araç Kullanılacak"
                                           onClick={this.handleTheSelectionOfVehicle}>Şahsi Araç
                                Kullanılacak</Dropdown.Item>
                        </DropdownButton>
                        {/* This component are rendering with control condition as following :
                            1)When employee selects  "Otobus travmay kullanılacak" first component becomes active to take
                                input of price.
                            2)When employee selects  "Şahsi Araç Kullanılacak" second components becomes active to take
                                total distance of journey as KM.
                        */}
                        {inputForBus(this.state.selectVehicleUsageID)}
                        {inputForDist(this.state.selectVehicleUsageID)}
                    </Row>
                    {/*
                        This components allows to fill explanation of permission demand.
                    */}
                    <Row className="justify-content-center" md={3} style={{margin: "10px"}}>
                        <div>
                            <textarea placeholder="İzin Açıklamanızı Doldurunuz" maxLength="500"
                                      value={this.state.permissionDescription}
                                      className="form-control" rows="4" onChange={this.updatePermissionDescription}/>
                        </div>
                    </Row>
                    {/*
                        This component navigates the user to display permission demand before send as a demand.
                        Navigates to "DisplayPermissionForm" class.
                    */}
                    <Row className="justify-content-center">
                        <Link to="DisplayPermissionForm">
                            <Button variant="primary" size="lg" active onClick={this.props.setPermission(this.state)}>
                                ONAYLAMAYA GEÇ
                            </Button>
                        </Link>
                    </Row>
                    {/* This part for warning for inputs */}
                    <Row className="justify-content-center">
                        <p style={{paddingTop: "1vw"}}>
                            UYARI ALANI
                        </p>
                    </Row>

                </Col>
            </Container>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FillingThePermissionForm);
