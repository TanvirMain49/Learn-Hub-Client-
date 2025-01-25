import React from 'react';
import DasHeading from '../../Shared/DashBoardHeading';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheekForm from './CheekForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

const Payment = () => {

    return (
        <div>
            <DasHeading Heading="Book Your Session"></DasHeading>

            <div>
                <Elements stripe={stripePromise}>
                    <CheekForm></CheekForm>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;