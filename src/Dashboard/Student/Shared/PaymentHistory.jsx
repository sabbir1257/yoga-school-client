import { Helmet } from "react-helmet";
import PaymentHistoryTable from "../components/PaymentHistoryTable";
import usePayment from "../../../Hooks/usePayment ";

const PaymentHistory = () => {
  const { paymentHistory } = usePayment();

  return (
    <main className="h-screen mt-20 overflow-hidden w-[50%]">
      <Helmet>
        <title>Yoga School |Payment History</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">
        Payment History:{paymentHistory.length}
      </h1>
      <section className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr className="bg-lime-500-300">
              <th></th>
              <th>Transaction Id</th>
              <th>Price</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory &&
              paymentHistory.map((payment, i) => (
                <PaymentHistoryTable
                  key={payment._id}
                  payment={payment}
                  i={i}
                />
              ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default PaymentHistory;
