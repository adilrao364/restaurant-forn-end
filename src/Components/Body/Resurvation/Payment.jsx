import React, { useContext } from 'react'
import { Contextvalues } from '../../../App'

import StripeCheckout from "react-stripe-checkout"
import axios from "axios"
import { useHistory } from 'react-router-dom';
import { useToast } from "@chakra-ui/core";

function Payment() {
    const context = useContext(Contextvalues);
    const history = useHistory();
    const toast = useToast();

    const handletoken = async (token) => {
        let product = { name: "Reserved Table", price: context.price };
        await axios
            .post("http://localhost:3002/checkout", {
                product,
                token
            }).then(res => {
                if (res) {
                    console.log(res)
                }
            }).catch(e => {
                console.log(e)
            })
        history.push("/resurvation")
        toast({
            title: "Success",
            description: "Table reserved successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top"
        })
    }
    return (
        <>
            <StripeCheckout
                stripeKey="pk_test_iT763YaEkpEVNCThn714wYIS00m63EWWEM"
                token={handletoken}
                billingAddress
                shippingAddress
                amount={context.price * 100}
            >
            </StripeCheckout>
        </>
    )
}

export default Payment
