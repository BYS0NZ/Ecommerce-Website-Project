import axios from "axios";

export function PaymentSummary({ paymentSummary , loadCartData }) {
    const createOrder = async () => {
        await axios.post('/api/orders')
        
    }

    return (
        <div className="payment-summary">
            <div className="payment-summary-title">
                Payment Summary
            </div>
            {paymentSummary && (
                <>
                    <div className="payment-summary-row">
                        <div>Items ({paymentSummary.totalItems}):</div>
                        <div className="payment-summary-money">${paymentSummary.productCostCents / 100}</div>
                    </div>

                    <div className="payment-summary-row">
                        <div>Shipping &amp; handling:</div>
                        <div className="payment-summary-money">${paymentSummary.shippingCostCents / 100}</div>
                    </div>

                    <div className="payment-summary-row subtotal-row">
                        <div>Total before tax:</div>
                        <div className="payment-summary-money">${paymentSummary.totalCostBeforeTaxCents / 100}</div>
                    </div>

                    <div className="payment-summary-row">
                        <div>Estimated tax (10%):</div>
                        <div className="payment-summary-money">${paymentSummary.taxCents / 100}</div>
                    </div>

                    <div className="payment-summary-row total-row">
                        <div>Order total:</div>
                        <div className="payment-summary-money">${paymentSummary.totalCostCents / 100}</div>
                    </div>

                    <button className="place-order-button button-primary" onClickk={createOrder}>
                        Place your order
                    </button>
                </>
            )}

        </div>
    );
}