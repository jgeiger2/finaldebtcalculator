import React from 'react';
import s from '../PaymentHistory/PaymentHistory.module.css';

class PaymentHistory extends React.Component {
    render() {
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
                                        <h5>Principal Paid</h5>
                                    </td>
                                    <td>
                                        <h5>Interest Paid</h5>
                                    </td>
                                    <td>
                                        <h5>Remaining Balance</h5>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h6>{this.handlePayment}</h6>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default PaymentHistory;