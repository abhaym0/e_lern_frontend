import React from 'react'
import Cards from './Cards'
import DumyCard from './DumyCard'

const CardShowCase = () => {
    return (
        <div className='card-show-case'>
            <div className='header'>
                <h1>Tranding Courses</h1>
            </div>
            <div className='header-cards'>
                <div className="cardch">
                    <DumyCard></DumyCard>
                </div>
                <div className="div">
                <DumyCard></DumyCard>
                </div>
            </div>
        </div>
    )
}

export default CardShowCase
