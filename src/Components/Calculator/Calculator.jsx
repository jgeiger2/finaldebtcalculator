import React from "react";
import style from "./Calculator.module.css";
import InterestRate from "../InterestRate/InterestRate";
import MakeAPayment from "../MakeAPayment/MakeAPayment";
import TotalDebtAmount from "../TotalDebtAmount/TotalDebtAmount";
import MinInterest from "../MinInterest/MinInterest";
import MinPrincipal from "../MinPrincipal/MinPrincipal";
import MinPayments from "../MinPayment/MinPayment";
import PaymentHistory from "../PaymentHistory/PaymentHistory";
// import './index.css';

class Calculator extends React.Component {
constructor() {
    super();
    this.state = {
    totalDebtAmount: 0,
    interestRate: 0,
    principal: 0,
    monthlyPayment: 0,
    paymentAmount: 0,
    paymentList: [],
    remainingBalance: 0,
    };
}

calcMinInt = (interestRate) =>
    (interestRate / 100 / 12) * this.state.totalDebtAmount;

handleTotalAmount = ({ target: { value } }) => {
    console.log(`The value is now: ${value}`);
    this.setState({ totalDebtAmount: parseInt(value) });
};

handlePrincipal = (totalDebtAmount) => {
    const minimumPrincipal = totalDebtAmount * 0.01;
    this.setState({ principal: +minimumPrincipal.toFixed(2) });
};

handleInterest = ({ target: { value } }) => {
    const minimumInterest = this.calcMinInt(parseFloat(value));
    console.log(this.state.totalDebtAmount);
    this.setState({ interestRate: +minimumInterest.toFixed(2) });
    this.handlePrincipal(this.state.totalDebtAmount);
    this.handleMonthlyPayment(minimumInterest, this.state.principal);
};

handleMonthlyPayment = (minimumInterest, minimumPrincipal) => {
    const monthlyPayment = +minimumInterest + minimumPrincipal;
    this.setState({ monthlyPayment: +monthlyPayment.toFixed(2) });
};

handleRemainingBalance = (totalDebtAmount, paymentAmount) => {
    const remainingBalance = totalDebtAmount - paymentAmount;
    this.setState({ remainingBalance: +remainingBalance.toFixed(2) });
};

handlePaymentAmount = (value) => {
    console.log(value);
    const paymentInfo = {
    numOfPayments: 0,
    principal: this.state.principal,
    interest: this.state.interestRate,
    balance: this.state.remainingBalance,
    };
    this.setState({
    paymentAmount: parseInt(value),
    paymentList: [...this.state.paymentList, paymentInfo],
    });
    // this.props.handlePayment
};

render() {
    return (
    <>
        <div>
        <div className={style.calculator}>
            <div className={style.title}>
            <h2>Calculator</h2>
            </div>
            <div className={style.content}>
            <div className={style.calc}>
                <TotalDebtAmount
                handleTotalAmount={this.handleTotalAmount}
                totalDebtAmount={this.state.totalDebtAmount}
                />
                <InterestRate
                handleInterest={this.handleInterest}
                interestRate={this.state.interestRate}
                />
                <MakeAPayment onClick={() => this.handlePaymentAmount} />
            </div>
            <div className={style.displayNums}>
                <MinInterest interestRate={this.state.interestRate} />
                <MinPrincipal principal={this.state.principal} />
                <MinPayments monthlyPayment={this.state.monthlyPayment} />
            </div>
            </div>
        </div>
        </div>
        <PaymentHistory paymentsList={this.state.paymentList} />
    </>
    );
}
}

export default Calculator;
