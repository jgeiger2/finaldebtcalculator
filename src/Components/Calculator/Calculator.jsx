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
    minimumInterest: 0,
    principal: 0,
    monthlyPayment: 0,
    paymentAmount: 0,
    paymentList: [],
    remainingBalance: 0,
    };
}

calcMinInt = (interestRate) => {
    console.log(interestRate)
    console.log(    (interestRate / 100 / 12) * this.state.totalDebtAmount
    )
    return (interestRate / 100 / 12) * this.state.totalDebtAmount;

}

handleTotalAmount = ({ target: { value } }) => {
    console.log(`The value is now: ${value}`);
    this.setState({ totalDebtAmount: parseInt(value) });
    this.handleInterestHelper(this.state.interestRate);
};

handlePrincipal = (totalDebtAmount, minimumInterest) => {
    const minimumPrincipal = totalDebtAmount * 0.01;
    this.setState({ principal: +minimumPrincipal.toFixed(2) }, () => this.handleMonthlyPayment(minimumInterest, this.state.principal));
};

handleInterestHelper = (value) => {
    const minimumInterest = this.calcMinInt(parseFloat(value));
    console.log(this.state.totalDebtAmount);
    this.setState({ interestRate: value });
    this.setState({ minimumInterest: minimumInterest.toFixed(2) }, () => this.handlePrincipal(this.state.totalDebtAmount, this.state.minimumInterest));
    // this.handlePrincipal(this.state.totalDebtAmount);
    console.log("helper", this.state.principal, minimumInterest)
    // this.handleMonthlyPayment(minimumInterest, this.state.principal);
}

handleInterest = ({ target: { value } }) => this.handleInterestHelper(value);


handleMonthlyPayment = (minimumInterest, minimumPrincipal) => {
    if (this.state.totalDebtAmount <= 100) {
        const monthlyPayment = this.state.totalDebtAmount * 1 + this.state.totalDebtAmount * 0.01;
        this.setState({ monthlyPayment: +monthlyPayment.toFixed(2) });
    } else {
        const monthlyPayment = +minimumInterest + minimumPrincipal;
        this.setState({ monthlyPayment: +monthlyPayment.toFixed(2) });
    }
};

handleRemainingBalance = (totalDebtAmount, paymentAmount) => {
    const remainingBalance = totalDebtAmount - paymentAmount;
    this.setState({ remainingBalance: +remainingBalance.toFixed(2) });
};


handlePaymentAmount = (value) => {
    console.log(`handlePaymentAmount(${value})`);
    if (value < this.state.monthlyPayment) {
        // TODO: Add error message
        return;
    }
    // Owed:     10000
    // Interest: +  83 (This is how much we pay for the loan)
    // Payment:  - 183 (Reduces how much we owe)
    // Owed:      9900
    // Principle: (Original Loan Amount) - Owed
    // Principle: 1000 - 900 = 100
    // Interest: Owed * InterestRate
    console.log(this.state.totalDebtAmount, this.state.interestRate);
    const interest = this.state.minimumInterest;
    const originalLoanAmount = this.state.totalDebtAmount;
    const remainingBalance = Number(this.state.totalDebtAmount) + Number(interest) - Number(value);
    const principlePaid = originalLoanAmount - remainingBalance;
    const paymentInfo = {
    numOfPayments: 0,
    principal: principlePaid.toFixed(2),
    interest: interest,
    balance: remainingBalance.toFixed(2),
    };
    this.setState({
        totalDebtAmount: remainingBalance,
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
                <MakeAPayment onClick={this.handlePaymentAmount} debtAmount={this.state.totalDebtAmount}/>
            </div>
            <div className={style.displayNums}>
                <MinInterest minimumInterest={this.state.minimumInterest} />
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
