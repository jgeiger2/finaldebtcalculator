import React from 'react'

class MakeAPayment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentAmount: 0,
            remainingBalance: props.debtAmount
        }
    }
    
    handleChange = ({ target: { value } }) => this.setState({ 
        paymentAmount: value,
        remainingBalance: this.state.remainingBalance - value
        })
    
    handleSubmit = (e) => {
        e.preventDefault();

        this.setState((state) => { })
        
    }
    render() {
        return (
            <div style={{ marginLeft: "40px" }}>
                <h2 style={{ textAlign: "left" }}>Make a Payment</h2>
                <h3>Payment Amount</h3>
                <input onChange={this.handleChange} type="number" placeholder='Enter whole number' style={{ background: "white", height: "20px" }} />
                <h4>MUST pay at least MIN</h4>
                <button onClick={() => this.props.onClick(this.state.paymentAmount) } style={{ backgroundColor: 'limeGreen', padding: '10px 20px' }}>
                    SUBMIT<br></br>PAYMENT
                </button>
            </div>
        )
    }
}

export default MakeAPayment