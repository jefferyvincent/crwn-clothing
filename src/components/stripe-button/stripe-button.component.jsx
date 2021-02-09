import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStrip = price * 100;
    const publishableKey = "pk_test_51IIz0iKZzlzPVX4HhqzLm0XsJF8EHItcWya1IvjLuqWsSpHuoX1Z9tHnUvfA2kQKRWbB5w84TsGgSyEYBCSW4eWa00KwmiOq0k";
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return(
        <StripeCheckout 
         label="Pay Now"
         name="CRWN Clothing Ltd."
         billingAddress
         shippingAddress
         image="https://svgshare.com/i/CUz.svg"
         description={`Your total is $${price}`}
         amount={priceForStrip}
         panelLabel="pay Now"
         token ={onToken}
         stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton