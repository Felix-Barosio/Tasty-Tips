import React, { useState } from 'react'
import axios from 'axios';


import Searchpanel from '../components/Searchpanel';

const Home = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    const handleClick = async () => {
        const res = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
        setData(res.data.meals[0]);
        setCount(0);
        console.log(res.data);
    };
    return (
        <div>
            <Searchpanel onClickSearch={handleClick} />
        </div>
    )
}

export default Home;