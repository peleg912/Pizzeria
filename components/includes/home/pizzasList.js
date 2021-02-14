import React from 'react';
import Link from 'next/link';

const pizzasList = (props)=> {

    const showPizzas = ()=> (
        props.pizzas.map(pizza => {
            if (!pizza.pod){
                return(
                    <Link 
                    key={pizza.idName}
                    as= {`/pizzas/pizza/${pizza.idName}`}
                    href={{
                      pathname: '/pizzas/pizza',
                      query: {
                          pizzaName: pizza.idName
                      }
                    }}>
                        <a>
                            <div className="item">
                               <div 
                               className="inner-item"
                               style= {{
                                   background: `url('/static/images/${pizza.image}')`
                               }}>
                                   <div className="overlay"></div>
                                   <div className="item-nfo">
                                       <h3>{pizza.name}</h3>
                                       <p>
                                       {pizza.shortDesc}
                                       </p>
                                   </div>
   
                               </div>
                            </div>
                        </a>
                    </Link>
                )
            }
        })
    )


    return(
       <>
         <div className="pizzas_wrapper">
             <div className="articles">
                 {showPizzas()}
             </div>
         </div>
       </>
    )
}

export default pizzasList;