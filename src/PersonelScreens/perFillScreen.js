import React from "react";
import ReactDOM from "react-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { InputGroup, Input } from "reactstrap";
import Form from "reactstrap/es/Form";


const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
const days = ['Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct', 'Pz']

const locale = {
    localize: {
        month: n => months[n],
        day: n => days[n],

    },
    formatLong: {}
}

class perFillPerScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            sltcPrmType: "İzin Tipinizi Seçiniz",
            perVhcUsg:"Araç Kullanım Durumu Seçiniz",
            startDate: null,
            price:"",
            distance:"",
            endDate:null,
            dispEntPriBox:false,
            dispEntDisBox:false
        }
        this.handleClicki = this.handleClicki.bind(this);
        this.handleStartDate = this.handleStartDate.bind(this);
        this.handleEndDate = this.handleEndDate.bind(this);
        this.handleVhcSel = this.handleVhcSel.bind(this);
        this.takePrice = this.takePrice.bind(this);
        this.takeDistance = this.takeDistance.bind(this);
        inputForBus = inputForBus.bind(this);
        inputForDist= inputForDist.bind(this);
    }

    handleClicki(event) {
        this.setState({
            sltcPrmType: event.target.name
        })
    }

    takeDistance(event) {
        this.setState({
            distance: event.target.value
        });
    }
    takePrice(event) {
        this.setState({
            price: event.target.value
        });
    }
    handleVhcSel(event) {
        this.setState({
            perVhcUsg: event.target.name,
        })
       if(event.target.id==="v3"){
           this.setState({
               dispEntPriBox: true
           })
       }
       else{
           this.setState({
               dispEntPriBox: false
           })
       }

       if (event.target.id==="v4"){
           this.setState({
               dispEntDisBox: true
           })
       }
       else{
           this.setState({
               dispEntDisBox: false
           })
       }


    }

    handleStartDate(date) {
        this.setState({
            startDate: date
        })
    }

    handleEndDate(date) {
        this.setState({
            endDate: date
        })
    }

    render() {
        return (
            <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Col>
                    <Row  className="justify-content-center" style={{marginTop:"4vw" , marginBottom:"2vw"}}>
                        <DropdownButton id="dropdown-item-button" title={this.state.sltcPrmType}>
                            <Dropdown.Item id="i1" name="Yıllık" as="button"
                                           onClick={this.handleClicki}>Yıllık</Dropdown.Item>
                            <Dropdown.Item id="i2" as="button" name="Görevli"
                                           onClick={this.handleClicki}>Görevli</Dropdown.Item>
                            <Dropdown.Item id="i3" as="button" name="Ücretli"
                                           onClick={this.handleClicki}>Ücretli</Dropdown.Item>
                            <Dropdown.Item id="i4" as="button" name="2 Ay İçinde Telafisi Yapılacak"
                                           onClick={this.handleClicki}>2 Ay İçinde Telafisi Yapılacak</Dropdown.Item>
                            <Dropdown.Item id="i5" as="button" name="Ücretsiz"
                                           onClick={this.handleClicki}>Ücretsiz</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item id="i6" as="button" name="Diğer"
                                           onClick={this.handleClicki}>Diğer</Dropdown.Item>
                        </DropdownButton>
                    </Row>
                    <Row className="justify-content-center"  style={{margin:"2vw"}}>
                        <DatePicker
                            withPortal
                            locale={locale}
                            onChange={this.handleStartDate}
                            placeholderText="İzin Başlangıç Tarihi       "
                            selected={this.state.startDate}
                            timeCaption="Saat"
                            isClearable
                            showTimeSelect
                            timeIntervals={1}
                            timeFormat="HH:mm"
                            dateFormat="d MMMM yyyy | HH:mm "
                        />
                    </Row>

                    <Row className="justify-content-center" style={{margin:"2vw"}} >
                        <DatePicker
                            withPortal
                            locale={locale}
                            onChange={this.handleEndDate}
                            placeholderText="İzin Bitiş Tarihi       "
                            selected={this.state.endDate}
                            timeCaption="Saat"
                            isClearable
                            showTimeSelect
                            timeIntervals={1}
                            timeFormat="HH:mm"
                            dateFormat="d MMMM yyyy | HH:mm "
                        />
                    </Row>

                    <Row className="justify-content-center"  style={{margin:"2vw"}} >

                        <DropdownButton id="dropdown-item-button" title={this.state.perVhcUsg} >
                            <Dropdown.Item id="v1" name="Araç Kullanılmayacak" as="button"
                                           onClick={this.handleVhcSel}>Araç Kullanılmayacak</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item id="v2" as="button" name="Şirket Aracı Kullanılacak"
                                           onClick={this.handleVhcSel}>Şirket Aracı Kullanılacak</Dropdown.Item>
                            <Dropdown.Item id="v3" as="button" name="Otobus/Tramvay Kullanılacak"
                                           onClick={this.handleVhcSel}>Otobus/Tramvay Kullanılacak </Dropdown.Item>
                            <Dropdown.Item id="v4" as="button" name="Şahsi Araç Kullanılacak"
                                           onClick={this.handleVhcSel}>Şahsi Araç Kullanılacak</Dropdown.Item>

                        </DropdownButton>
                        {inputForBus(this.state.dispEntPriBox)}
                        {inputForDist(this.state.dispEntDisBox)}
                    </Row>
                    <Row className="justify-content-center" md={3} style={{margin:"2vw"}}>
                        <div>
                            <textarea placeholder="İzin Açıklamanızı Doldurunuz" maxLength="500" className="form-control" rows="4"/>
                        </div>
                    </Row>
                </Col>
            </Container>
        )
    }
}


function inputForBus(flag) {
    if (flag){
        return(
            <div>
                <input type="text" style={{height:"100%"}} placeholder="Ücret (₺)" value={this.state.price} onChange={this.takePrice}  />
            </div>
        )
    }
    else{
        return null;
    }
}

function inputForDist(flag) {
    if (flag){
        return(
            <div>
                <input type="text" style={{height:"100%"}} placeholder="Gidiş-Geliş (km)" value={this.state.distance} onChange={this.takeDistance} />
            </div>
        )
    }
    else{
        return null;
    }
}

export default perFillPerScreen;
