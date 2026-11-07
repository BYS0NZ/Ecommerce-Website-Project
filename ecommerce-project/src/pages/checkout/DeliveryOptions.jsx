import dayjs from 'dayjs';
import axios from 'axios';

export function DeliveryOptions({ cartItem, deliveryOptions, loadCartData }) {
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
                    await axios.put(`/api/cart-items/${cartItem.productId}`, {
                        deliveryOptionId: deliveryOption.id
                    });
                    await loadCartData();
                };

                return (
                    <div key={deliveryOption.id} className="delivery-option" onClick={updateDeliveryOption}>
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