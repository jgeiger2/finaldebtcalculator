import React from 'react';
import s from '../PaymentHistory/PaymentHistory.module.css';

class PaymentHistory extends React.Component {
    render() {
        const {paymentsList} = this.props
        return (
            <div>
                <div className={s.history}>
                    <h2>Payment History</h2>
                    <div className="data-table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <h5>Number of Payments</h5>
                                    </td>
                                    <td>
                                        <h5>Principle Paid</h5>
                                    </td>
                                    <td>
                                        <h5>Interest Paid</h5>
                                    </td>
                                    <td>
                                        <h5>Remaining Balance</h5>
                                    </td>
                                </tr>
                                {paymentsList.map((item, i) => (
                                    <tr key={item.numOfPayments}>
                                        <td>{i + 1}</td> <td>{item.principle}</td> <td>{item.interest}</td> <td>{item.balance}</td>
                                    </tr>))}
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default PaymentHistory;