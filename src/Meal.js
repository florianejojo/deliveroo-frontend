const Meal = ({ meal, tab, setTab }) => {
    const addToBasket = () => {
        const newTab = [...tab];
        newTab.push({ mealTitle: meal.title, price: meal.price });
        setTab(newTab);
        // console.log(tab);
    };

    return (
        <div className="oneMeal" onClick={addToBasket}>
            <div>
                <h3>{meal.title}</h3>
                <div className="desc">{meal.description}</div>
                <span>{meal.price} €</span>
                {meal.popular && (
                    <span className="popular">
                        <i className="fas fa-star"></i> <span>Populaire</span>
                    </span>
                )}
            </div>
            {meal.picture && <img src={meal.picture} alt={meal.title} />}
        </div>
    );
};

export default Meal;
