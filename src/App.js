import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Section from "./Section";
import Basket from "./Basket";
// import { useState } from "react";

function App() {
    const [data, setData] = useState();
    const [isLoading, setisLoading] = useState(true);
    const [tab, setTab] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://deliveroo--backend--replica.herokuapp.com/"
                );
                setData(response);
                setisLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, []);
    // console.log(d sata.data);

    return isLoading ? (
        "En cours de chargement ... "
    ) : (
        <div>
            {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
            {/* $$$$$$    HEADER             $$$$$$$$$*/}
            {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}

            <header className="container">
                <img
                    id="logo"
                    src="https://upload.wikimedia.org/wikipedia/fr/thumb/f/f7/Deliveroo_logo.svg/1280px-Deliveroo_logo.svg.png"
                    alt="logo_deliveroo"
                />
            </header>
            <div id="line"></div>

            {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
            {/* $$$$$$   SECTION1              $$$$$$$$$*/}
            {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
            <section id="section1" className="container">
                <div>
                    <h1>{data.data.restaurant.name}</h1>
                    <div>{data.data.restaurant.description}</div>
                </div>
                <img
                    src={data.data.restaurant.picture}
                    alt={data.data.restaurant.name}
                />
            </section>

            {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
            {/* $$$$$$    CATEGORIES AND MEALS    $$$$$$$$$*/}
            {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
            <div className="backGrey">
                <div id="menuBasket" className="container">
                    <div className="menus">
                        {data.data.categories.map((elem, index) => {
                            if (!elem.meals[0]) {
                                return null;
                            }
                            return (
                                <Section
                                    key={index}
                                    title={elem.name}
                                    meals={elem.meals}
                                    tab={tab}
                                    setTab={setTab}
                                />
                            );
                        })}
                    </div>
                    <Basket tab={tab} />
                </div>
            </div>
        </div>
    );
}

export default App;
