import React from 'react';
import Calculator from '../Calculator/Calculator';
import PaymentHistory from '../PaymentHistory/PaymentHistory';
import style from './WholePage.module.css';

class WholePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentHistory: [],
        }
    }

    handlePayment = (payment) => {

     }

    render() {
        return (
            <div>
                <h1>Debt Calculator</h1>
                <div className={style.wrapper}>
                    <Calculator handlePayment={this.handlePayment } />
``                </div>
            </div>
            )
        }
    }



export default WholePage; 