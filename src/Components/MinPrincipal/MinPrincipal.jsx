import React from 'react';
import Calculator from '../Calculator/Calculator';


class MinPrincipal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { principal } = this.props
        return (
            <div>
                <h2>Principal</h2>
                <h3 style={{textAlign: "center", fontSize: "3rem"}}>{principal}</h3>
            </div>
        )
    }
}

export default MinPrincipal;