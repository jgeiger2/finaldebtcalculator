import React from 'react';  
import style from './Calculator.module.css';
import InterestRate from '../InterestRate/InterestRate';
import MakeAPayment from '../MakeAPayment/MakeAPayment';
import TotalDebtAmount from '../TotalDebtAmount/TotalDebtAmount';
import MinInterest from '../MinInterest/MinInterest';
import MinPrincipal from '../MinPrincipal/MinPrincipal';
import MinPayments from '../MinPayment/MinPayment';
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
            }
    }

    calcMinInt = (interestRate) => ((interestRate / 100) / 12) * this.state.totalDebtAmount;
        

    handleTotalAmount = ({ target: { value } }) => {
        console.log(`The value is now: ${value}`);
        this.setState({ totalDebtAmount: parseInt(value) })
    }

    handlePrincipal = (totalDebtAmount) => {
        const minimumPrincipal = totalDebtAmount * .01
        this.setState({ principal: +(minimumPrincipal.toFixed(2)) })
     }
    
    handleInterest = ({ target: { value } }) => {
        const minimumInterest = this.calcMinInt(parseFloat(value))
        console.log(this.state.totalDebtAmount);
        this.setState({ interestRate: +(minimumInterest.toFixed(2)) })
        this.handlePrincipal(this.state.totalDebtAmount)
        this.handleMonthlyPayment(minimumInterest, this.state.principal)
    }

    handleMonthlyPayment = (minimumInterest, minimumPrincipal) => {
        const monthlyPayment = +minimumInterest + minimumPrincipal
        this.setState({ monthlyPayment: +(monthlyPayment.toFixed(2)) })
     }
    
    handlePaymentAmount = ({ target: { value } }) => {
        this.setState({ paymentAmount: parseInt(value) })
        // this.props.handlePayment({
        //     numOfPayments: 0,
        //     principal: this.state.principal,
        //     interest: this.state.interestRate,
        //     balance: this.state.totalDebtAmount - this.state.paymentAmount
        }
    
    handlePaymentsList = (newPayment) => {
        this.setState({
            paymentList: [...this.state.paymentList, newPayment]
        })
    };

    render() {
        return (
            <div>
                <div className={style.calculator}>
                    <div className={style.title}>
                        <h2>Calculator</h2>
                    </div>
                    <div className={style.content}>
                        <div className={style.calc}>
                            <TotalDebtAmount
                                handleTotalAmount={this.handleTotalAmount}
                                totalDebtAmount={this.state.totalDebtAmount} />
                            <InterestRate handleInterest={this.handleInterest} interestRate={this.state.interestRate }/>
                            <MakeAPayment onClick={this.handlePaymentsList} paymentAmount={this.paymentAmount } />
                        </div>
                        <div className={style.displayNums}>
                            <MinInterest interestRate={this.state.interestRate}/>
                            <MinPrincipal principal={this.state.principal } />
                            <MinPayments monthlyPayment={this.state.monthlyPayment} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator;

