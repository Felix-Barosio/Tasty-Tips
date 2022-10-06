import React from "react";

const DisplayFoods = ({ data }) => {
    const { strMealThumb, strInstructions, strMeal, strCategory, strArea, strTags, } = data;

    const ingredients = [];

    Object.keys(data).forEach((obj, idx) => {
        if (data[`strIngredient${idx}`]) {
            ingredients.push({
                ingredient: data[`strIngredient${idx}`],
                measure: data[`strMeasure${idx}`],
            });
        }
    });

    const renderFood = (obj, idx) => (
        <div key={idx} className="d-flex">
            <li className="listItem">{obj.ingredient}~</li>
            <span className="ms-2 fst-normal">{obj.measure}.</span>
        </div>
    );

    return (
        <div>
            <div className="row">
                <div className="col-12 text-center py-3">
                    <h1 id="youtube">Recipe Meals</h1>
                    <span className="underline"></span>
                </div>
                <div className="col-12 col-lg-3">
                    <h3 id="foodie">Food Picture.</h3>
                    <div className="card" style={{ width: "20vw", height: "30vw" }}>
                        <img
                            src={strMealThumb}
                            className="img-fluid img-thumbnail card-img-top"
                            alt="Meal pic"
                            title={strMeal}
                        />
                        <div className="card-body">
                            <h5 className="card-title" id="mealName">Meal Name: {strMeal}</h5>
                        </div>
                    </div>

                </div>

                <div className="col-12 col-lg-3">
                    <div className="row">
                        <h3 id="foodie">Ingredients.</h3>
                        <p id="instructions">{ingredients.map((obj, idx) => renderFood(obj, idx))}</p>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="row">
                        <h3 id="foodie">How to Prepare.</h3>
                        <p id="instructions">{strInstructions}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayFoods;
