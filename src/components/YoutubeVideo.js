import React from "react";

const YoutubeVideo = ({ data }) => {
    const { strYoutube, strMeal } = data;

    return (
        <div>
            <div className="row">
                <div className="col-12 videoRecipe text-center py-3">
                    <h1 id="youtube">Recipe Video</h1>
                </div>
                <div className="row text-center" id="iframe">
                    <div className="col-12" id="iframe">
                        {strYoutube ? (
                            <iframe
                                width="80%"
                                height="400"
                                src={strYoutube.replace("watch?v=", "embed/")}
                                title={`How to cook ${strMeal}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YoutubeVideo;
