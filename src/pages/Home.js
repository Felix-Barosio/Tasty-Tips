import React, { useState } from 'react'
import axios from 'axios';


import Searchpanel from '../components/Searchpanel';
import DisplayFoods from '../components/DispalyFoods';
import YoutubeVideo from '../components/YoutubeVideo';
import FeedBack from '../components/FeedBack';

const Home = () => {
    const [data, setData] = useState([]);
    const [setCount] = useState(0);

    const handleClick = async () => {
        const res = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
        setData(res.data.meals[0]);
        setCount(0);
        console.log(res.data);
    };
    return (
        <div>
            <Searchpanel onClickSearch={handleClick} />
            <DisplayFoods data={data} />
            <YoutubeVideo data={data} />
            <FeedBack data={data} />
        </div>
    )
}

export default Home;