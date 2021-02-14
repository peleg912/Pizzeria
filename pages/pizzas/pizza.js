import React, { Component } from 'React';
import axios from 'axios';

class Pizza extends Component{

    static async getInitialProps({query}){
        let pizzaData;
        try {
            const pizza = await axios.get(`http://localhost:3000/api/v1/pizza/${query.pizzaName}`);
            pizzaData = pizza.data[0];
        } catch (error) {
            console.log(errro);
        }

        return { pizzaData };
    }

   
    render(){
        const {pizzaData} = this.props;
        return(
            <>
            <div className="pizza_page">
                <div className="top"
                 style={{background: `url('/static/images/${pizzaData.image}')`}}>
                </div>

                <div className="middle">
                    <h1>{pizzaData.name}</h1>
                    <div className="description">
                        {pizzaData.fullDesc}
                    </div>
                    <div className="price">
                       Get it for ${pizzaData.price}
                    </div>
                </div>

            </div>
            </>
        )
    }
}

export default Pizza;
