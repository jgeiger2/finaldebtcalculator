import React from 'react';

class InterestRate extends React.Component {
    render() {
        const {handleInterest, interestRate} = this.props
        return (
            <div style={{ marginLeft: "40px" }}>
                <h3>Interest Rate</h3>
                <input onChange={handleInterest}  type="number" placeholder='Enter whole number' style={{ background: "white", height: "20px" }} />

            </div>
        )
    }
}

export default InterestRate;