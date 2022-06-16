import React from 'react';

class MinPayments extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const { monthlyPayment } = this.props
        return (
            <div>
                <h2>Minimum Monthly Payment</h2>
                <h3 style={{textAlign: "center", fontSize: "3rem"}}>{monthlyPayment}</h3>
            </div>
        )
    }
}

export default MinPayments;