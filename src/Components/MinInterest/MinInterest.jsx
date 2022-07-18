import React from 'react';
import Calculator from '../Calculator/Calculator';

class MinInterest extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const {minimumInterest} = this.props
        return (
            <div>
                <h2>Interest</h2>
                <h3 style={{textAlign: "center", fontSize: "3rem"}}>{minimumInterest}</h3>
            </div>
        )
    }
}


export default MinInterest;