import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Herder'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import AppDownload from '../components/AppDownload/AppDownload'

const Home = () => {

    const [category,setCategory] = useState("All");

    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay  category={category}/> 
            <AppDownload/>
        </div>
    )
}


