import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'
import Cocktail from './Cocktail';

function CocktailList() {
    const { cocktails, loading } = useGlobalContext();
    console.log(cocktails);
    if (loading) {
        return <Loading />
    }
    if (cocktails.length < 1) {
        return <h2 className="section-title">no cocktails found</h2>
    }
    return (
        <section className="section">
            <h2 className='section-title'>Cocktails</h2>
            <div className="cocktails-center">
                {cocktails.map((item) => {
                    return <Cocktail key={item.id} {...item} />
                })}
            </div>
        </section>
    )
}

export default CocktailList
