import React from "react";

class DropDownAreas extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            value:""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        console.log(this.state.value);
        return (
            <form style={{width: "100%", height: "100%"}}>
                    <select style={{
                        backgroundColor: "rgba(173,139,139,0.11)",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "center",
                        height: "100%",
                        width: "100%",
                        fontSize: "2vw",
                        textAlignment: "center"
                    }} value={this.state.value} onChange={this.handleChange}>
                        <option value="default" hidden>BÖLGE SEÇİN</option>
                        <option value="SB">SERBEST BÖLGE</option>
                        <option value="AS">ASPENDOS</option>
                        <option value="VL">VİLLA</option>
                    </select>
            </form>

        );
    }

}


export default DropDownAreas;
