import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

export default function App(props) {
  console.log(props.details)
  const config = {
    public_key: process.env.REACT_APP_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: props.details.totalAmount,
    currency: 'USD',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: props.details.email,
      name: props.details.fullname,
      classDuration:props.details.classDuration,
      numberOfModules:props.details.numberOfModules,
      description:props.details.description,
      targetAudience:props.details.targetAudience
      
    },
    customizations: {
      title: 'Talcube',
      description: 'Payment for items in cart',
      logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQHkeHKA93A5gw/company-logo_200_200/0/1582494491073?e=2159024400&v=beta&t=4UCV5nJo5C_lKdaHchF-I5JUWr8aZKZHfNM9xTeUwgs',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">

      <input type="submit"
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      />
        {/* Pay Now!
      </button> */}
    </div>
  );
}