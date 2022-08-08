import React from 'react';
import Calculator from '../Calculator/Calculator';


class MinPrinciple extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { principle } = this.props
        return (
            <div>
                <h2>Principle</h2>
                <h3 style={{textAlign: "center", fontSize: "3rem"}}>{principle}</h3>
            </div>
        )
    }
}

export default MinPrinciple;