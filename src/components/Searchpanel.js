import React from 'react'

const Searchpanel = ({ onClickSearch }) => {
    function handleClick() { onClickSearch() }
    return (
        <div id='list mysearch'>
            <div className="row">
                <div className="text-center pt-5 pb-3">
                    <h2 className='search'>
                        How to get a random recipe?
                    </h2>
                    <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum
                        eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus.
                        Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur
                        ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis
                        beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.
                    </p>
                    <p className='para'>All you have to do is click the button below.</p>
                </div>
            </div>
            <div className="row">
                <div className="text-center pb-3">
                    <button
                        className="btn btn-info text-white"
                        id="search-btn"
                        onClick={handleClick}
                    >
                        Search Recipe.
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Searchpanel;
