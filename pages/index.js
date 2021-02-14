import React, { Component } from 'react';
import Featured from '../components/includes/home/featured';
import PizzasList from '../components/includes/home/pizzasList';
import axios from 'axios';

class Home extends Component{
    static async getInitialProps(){
        let pizzasData;
        try {
          const pizzas = await axios.get('http://localhost:3000/api/v1/pizza');
          pizzasData = pizzas.data; 
        } catch (error) {
            console.log(error);
        }

        return{ pizzasData }
    }

    
    
    render(){
        const {pizzasData} = this.props;
        return(
            <>
            <Featured pizzas={pizzasData}/>
            <PizzasList pizzas={pizzasData}/>
            </>
        )
    }
}

export default Home;
