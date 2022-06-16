import React from 'react';
import Calculator from '../Calculator/Calculator';

class MinInterest extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const {interestRate} = this.props
        return (
            <div>
                <h2>Interest</h2>
                <h3 style={{textAlign: "center", fontSize: "3rem"}}>{interestRate}</h3>
            </div>
        )
    }
}


export default MinInterest;