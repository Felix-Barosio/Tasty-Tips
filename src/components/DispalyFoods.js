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
            <div className="row" id="mysearch">
                <div className="col-12 text-center py-3">
                    <h1 id="youtube">Recipe Meals</h1>
                </div>
                <div className="col-12 col-lg-3" id="pic-food">
                    <h3 id="foodie">Food Picture.</h3>
                    <div className="card" style={{ width: "20vw" }} id="foody">
                        <img
                            src={strMealThumb}
                            className="img-fluid img-thumbnail card-img-top"
                            alt="Meal pic"
                            title={strMeal}
                        />
                        <div className="card-body">
                            <h5 className="card-title" id="mealName">{strMeal}</h5>
                        </div>
                    </div>

                </div>

                <div className="col-12 col-lg-3" id="ingri">
                    <div className="row">
                        <h3 id="foodie">Ingredients.</h3>
                        <p id="instructions">{ingredients.map((obj, idx) => renderFood(obj, idx))}</p>
                    </div>
                </div>

                <div className="col-12 col-lg-6" id="prepea">
                    <div className="row">
                        <h3 id="foodie">How to Prepare.</h3>
                        <p id="instructions">{strInstructions}</p>
                    </div>
                </div>
            </div>

            <div className="row py-2 mt-5" id="mysearch">
                <div className="col-4 col-lg-4">
                    <h6 id="foody">Country Of Origin:</h6>
                    <div id="area" className="badge rounded-pill bg-info text-dark">
                        {strArea}
                    </div>
                </div>

                <div className="col-4 col-lg-4">
                    <h6 id="foody">Food Category:</h6>
                    <div className="badge rounded-pill bg-info text-dark" id="area">
                        {strCategory}
                    </div>
                </div>

                <div className="col-4 col-lg-4">
                    <h6 id="foody">Search Tags:</h6>
                    <div id="tags" className="badge rounded-pill bg-info text-dark">
                        {strTags?.split(",").join(", ")}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayFoods;
