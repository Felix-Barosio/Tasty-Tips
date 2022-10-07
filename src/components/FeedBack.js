import React, { useState } from 'react'

const FeedBack = ({ data }) => {

    const [feedbackData, setFeedbackData] = useState([]);
    const [feedback, setFeedback] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const formData = { feeeback: feedback };
        const dataArray = [...feedbackData, formData];
        setFeedbackData(dataArray);
        setFeedback("");
    }

    const listOfFeedback = feedbackData.map((data, idx) => {
        return <div key={idx}>{data.feeeback}</div>;
    });

    function handleChange(event) {
        setFeedback(event.target.value);
    }

    return (
        <div id='list'>
            <div className='text-center' style={{ width: "68vw" }} id='feedback'>
                {data.strYoutube ? (
                    <div className="row text-center pt-5 mb-4">
                        <h3 id='youtube'>
                            Give Your Feedback:
                        </h3>
                        <div className="col-12">
                            <form action="" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    id="input"
                                    name="feedback"
                                    value={feedback}
                                    placeholder="Jot Something Down..."
                                    autoComplete="off"
                                    onChange={handleChange}
                                />
                                <br />
                                <input type="submit" className='text-white' id="submit" value="Post" />
                            </form>
                        </div>

                        <div className="feedback pt-5">
                            <div id='submision'>
                                <div>
                                    <p id='foody'>New Feedback.</p>
                                </div>
                                {listOfFeedback}
                            </div>
                            <hr />
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default FeedBack;
