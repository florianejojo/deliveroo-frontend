import Meal from "./Meal";

const Section = ({ title, meals, tab, setTab }) => {
    // console.log(categorie);
    return (
        <div className="categories container">
            <h2> {title} </h2>
            <div className="mealsPerCategory">
                {meals.map((elem, index) => {
                    return (
                        <Meal
                            key={index}
                            meal={elem}
                            tab={tab}
                            setTab={setTab}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Section;
