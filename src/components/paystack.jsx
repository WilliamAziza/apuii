import React from 'react';

const Paystack = () => {
    const PAYSTACK_PUBLIC_KEY = 'your_paystack_public_key_here';
    const customerEmail = 'customer@example.com';
    const amount = 500000; // Amount in kobo (e.g., 500000 for NGN 5000)

    const initializePayment = () => {
        const handler = window.PaystackPop.setup({
            key: PAYSTACK_PUBLIC_KEY,
            email: customerEmail,
            amount: amount,
            currency: 'NGN',
            callback: (response) => {
                // This callback is called after a successful payment
                console.log('Payment successful!', response);
                // You can perform additional actions here, like updating your database
            },
            onClose: () => {
                // This callback is called when the payment popup is closed
                console.log('Payment window closed');
            }
        });
        // Open the payment popup
        handler.openIframe();
    };

    return (
        <div>
            <button onClick={initializePayment}>Pay with Paystack</button>
        </div>
    );
}

export default Paystack;
