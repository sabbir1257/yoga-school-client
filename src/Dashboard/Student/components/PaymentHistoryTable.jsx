import moment from 'moment';
import React from 'react';

const PaymentHistoryTable = ({payment, i}) => {
    const {transactionId, price, date} = payment
    return (
        <tr>
            <td>{i + 1}</td>
            <td>{transactionId}</td>
            <td>{price}</td>       
            <td>{moment(date).format('dddd, MMMM D, YYYY')}</td>
            
        </tr>
    );
};

export default PaymentHistoryTable;