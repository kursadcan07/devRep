import React, {useState} from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import TimePicker from 'react-time-picker';

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


/*
    This function takes time input from user as a input.In format of HH:mm .
*/
function TakeTime() {
    const [value, onChange] = useState('9:00');
    return (
        <div>
            <TimePicker
                onChange={onChange}
                value={value}
                format="HH:mm"
                hourPlaceholder="saat"
                minutePlaceholder="dk"
                minTime="00:00:01"
                maxTime="23:59:59"/>
        </div>
    );
}
/*
    This components are created for converting DateTime into Turkish language.
*/
const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
const days = ['Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct', 'Pz']
const locale = {
    localize: {
        month: n => months[n],
        day: n => days[n],

    },
    formatLong: {}
}

/*
    This class created for filling the form of permission demand.
 */
class FillingThePermissionForm extends React.Component {
    /*
        Constructor defines state with attributes and binds the functions in it.
    */
    constructor() {
        super();
        this.state = {
            sltcPrmType: "İzin Tipinizi Seçiniz",
            perSel: 0,
            perVhcUsg: "Araç Kullanım Durumu Seçiniz",
            startDate: null,
            price: "",
            distance: "",
            endDate: null,
            dispEntPriBox: false,
            dispEntDisBox: false
        }
        this.selectTheTypeOfPermission = this.selectTheTypeOfPermission.bind(this);
        this.handleBeginDateOfPermission = this.handleBeginDateOfPermission.bind(this);
        this.handleEndDateOfPermission = this.handleEndDateOfPermission.bind(this);
        this.handleTheSelectionOfVhecile = this.handleTheSelectionOfVhecile.bind(this);
        this.takePriceForBusAndTrain = this.takePriceForBusAndTrain.bind(this);
        this.takeTotalDistanceForIndividualCar = this.takeTotalDistanceForIndividualCar.bind(this);
        inputForBus = inputForBus.bind(this);
        inputForDist = inputForDist.bind(this);
    }

    selectTheTypeOfPermission(event) {
        this.setState({
            sltcPrmType: event.target.name
        })
    }

    takeTotalDistanceForIndividualCar(event) {
        this.setState({
            distance: event.target.value
        });
    }

    takePriceForBusAndTrain(event) {
        this.setState({
            price: event.target.value
        });
    }

    handleTheSelectionOfVhecile(event) {
        this.setState({
            perVhcUsg: event.target.name,
        })
        if (event.target.id === "v3") {
            this.setState({
                dispEntPriBox: true
            })
        } else {
            this.setState({
                dispEntPriBox: false
            })
        }

        if (event.target.id === "v4") {
            this.setState({
                dispEntDisBox: true
            })
        } else {
            this.setState({
                dispEntDisBox: false
            })
        }
    }

    handleBeginDateOfPermission(date) {
        this.setState({
            startDate: date
        });
    }

    handleEndDateOfPermission(date) {
        this.setState({
            endDate: date
        })
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
                        <DropdownButton id="dropdown-item-button" title={this.state.sltcPrmType}>
                            <Dropdown.Item id="i1" name="Yıllık" as="button"
                                           onClick={this.selectTheTypeOfPermission}>Yıllık</Dropdown.Item>
                            <Dropdown.Item id="i2" as="button" name="Görevli"
                                           onClick={this.selectTheTypeOfPermission}>Görevli</Dropdown.Item>
                            <Dropdown.Item id="i3" as="button" name="Ücretli"
                                           onClick={this.selectTheTypeOfPermission}>Ücretli</Dropdown.Item>
                            <Dropdown.Item id="i4" as="button" name="2 Ay İçinde Telafisi Yapılacak"
                                           onClick={this.selectTheTypeOfPermission}>2 Ay İçinde Telafisi Yapılacak</Dropdown.Item>
                            <Dropdown.Item id="i5" as="button" name="Ücretsiz"
                                           onClick={this.selectTheTypeOfPermission}>Ücretsiz</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item id="i6" as="button" name="Diğer"
                                           onClick={this.selectTheTypeOfPermission}>Diğer</Dropdown.Item>
                        </DropdownButton>
                    </Row>
                    {/* Here the date picker part for begin date of permission */}
                    <Row className="justify-content-center" style={{margin: "10px"}}>
                        <DatePicker
                            locale={locale}
                            onChange={this.handleBeginDateOfPermission}
                            placeholderText="İzin Başlangıç Tarihi"
                            selected={this.state.startDate}
                            timeCaption="Saat"
                            isClearable
                            dateFormat="d MMMM yyyy"
                            withPortal
                        />
                        <TakeTime/>
                    </Row>
                    {/* Here the end date part of permission */}
                    <Row className="justify-content-center" style={{margin: "10px"}}>
                        <DatePicker
                            locale={locale}
                            onChange={this.handleEndDateOfPermission}
                            placeholderText="İzin Bitiş Tarihi"
                            selected={this.state.endDate}
                            timeCaption="Saat"
                            isClearable
                            timeFormat="HH:mm"
                            dateFormat="d MMMM yyyy"
                            withPortal
                        />
                        <TakeTime/>
                    </Row>
                    {/* Here the vehicle usage selection part as dropdown */}
                    <Row className="justify-content-center" style={{margin: "10px"}}>
                        <DropdownButton id="dropdown-item-button" title={this.state.perVhcUsg}>
                            <Dropdown.Item id="v1" name="Araç Kullanılmayacak" as="button"
                                           onClick={this.handleTheSelectionOfVhecile}>Araç Kullanılmayacak</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item id="v2" as="button" name="Şirket Aracı Kullanılacak"
                                           onClick={this.handleTheSelectionOfVhecile}>Şirket Aracı Kullanılacak</Dropdown.Item>
                            <Dropdown.Item id="v3" as="button" name="Otobus/Tramvay Kullanılacak"
                                           onClick={this.handleTheSelectionOfVhecile}>Otobus/Tramvay Kullanılacak </Dropdown.Item>
                            <Dropdown.Item id="v4" as="button" name="Şahsi Araç Kullanılacak"
                                           onClick={this.handleTheSelectionOfVhecile}>Şahsi Araç Kullanılacak</Dropdown.Item>
                        </DropdownButton>
                        {/* This component are rendering with control condition as following :
                            1)When employee selects  "Otobus travmay kullanılacak" first component becomes active to take
                                input of price.
                            2)When employee selects  "Şahsi Araç Kullanılacak" second components becomes active to take
                                total distance of journey as KM.
                        */}
                        {inputForBus(this.state.dispEntPriBox)}
                        {inputForDist(this.state.dispEntDisBox)}
                    </Row>
                    {/*
                        This components allows to fill explanation of permission demand.
                    */}
                    <Row className="justify-content-center" md={3} style={{margin: "10px"}}>
                        <div>
                            <textarea placeholder="İzin Açıklamanızı Doldurunuz" maxLength="500"
                                      className="form-control" rows="4"/>
                        </div>
                    </Row>
                    {/*
                        This component navigates the user to display permission demand before send as a demand.
                        Navigates to "DisplayThePermissionForm" class.
                    */}
                    <Row className="justify-content-center">
                        <Link to="DisplayThePermissionForm">
                            <Button variant="primary" size="lg" active onClick={() => {
                                console.log("SelamınAleyküm");
                            }}>
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

function inputForBus(flag) {
    if (flag) {
        return (
            <div className="justify-content-center">
                <input type="text" style={{height: "100%", margin: "0.1vw"}} placeholder="Ücret (₺)"
                       value={this.state.price} onChange={this.takePrice}/>
            </div>
        )
    } else {
        return null;
    }
}

function inputForDist(flag) {
    if (flag) {
        return (
            <div>
                <input type="text" style={{height: "100%", margin: "0.1vw"}} placeholder="Gidiş-Geliş (km)"
                       value={this.state.distance} onChange={this.takeDistance}/>
            </div>
        )
    } else {
        return null;
    }
}

export default FillingThePermissionForm;
