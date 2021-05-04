import Counter from "./Counter";

const Basket = ({ tab }) => {
    console.log(tab.mealTitle);
    return (
        <div className="basket container">
            <button>Valider mon panier</button>
            {/* <p>Votre panier est vide</p> */}
            <div className="line">
                <Counter /> <div>{tab.mealTitle}</div>
                <div>{tab.price}</div>
            </div>
            <div>Sous Total</div>
            <div className="line">Frais de livraison</div>
            <div>Total</div>
        </div>
    );
};

export default Basket;
