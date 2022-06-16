import React from 'react';

class TotalDebtAmount extends React.Component {
    constructor(props) {
        super(props);
        // this.handleTotalAmount = this.props.handleTotalAmount;
    }
    render() {
        const { handleTotalAmount, totalDebtAmount} = this.props
        return (
            <div style={{ marginLeft: "40px" }}>
                <div className="total-debt-amount" style={{ justifyContent: 'left' }}>
                    <h3>Total Debt Amount</h3>
                    <input onChange={handleTotalAmount}
                        type="number"
                        placeholder='Enter whole number'
                        style={{ background: "white", height: "20px" }} />
                </div>
            </div>
        )
    }
}

export default TotalDebtAmount;