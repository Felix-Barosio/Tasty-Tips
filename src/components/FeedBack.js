import React, { useState } from 'react'

const FeedBack = ({ data }) => {

    return (
        <div className='card' id='list'>
            <div className='text-center' style={{ width: "68vw" }} id='feedback'>
                {data.strYoutube ? (
                    <div className="row text-center pt-5 mb-4">
                        <h3 id='youtube'>
                            Give Your Feedback:
                        </h3>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default FeedBack;
