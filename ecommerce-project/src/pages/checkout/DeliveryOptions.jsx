import dayjs from 'dayjs';
import axios from 'axios';

export function DeliveryOptions({ cartItem, deliveryOptions }) {
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOptions.map((deliveryOption) => {
                let priceString = 'FREE Shipping';

                if (deliveryOption.priceCents > 0) {
                    priceString = `$${(deliveryOption.priceCents / 100).toFixed(2)} - Shipping`;
                }

                const updateDeliveryOption = async () => {
                    axios.put(`/api/cart-items/${cartItem.productId}`, {});

                return (
                    <div key={deliveryOption.id} className="delivery-option">
                        <input type="radio"
                            checked={cartItem.deliveryOptionId === deliveryOption.id}
                            className="delivery-option-input"
                            name={`delivery-option-${cartItem.productId}`} />
                        <div>
                            <div className="delivery-option-date">
                                {dayjs(deliveryOption.estimatedDeliveryTime).format('dddd, MMMM D')}
                            </div>
                            <div className="delivery-option-price">
                                {priceString}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}