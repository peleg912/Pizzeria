import {initializeStore} from '../store/index';
import React from 'react';
import axios from 'axios';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = ' __NEXT_REDUX_STORE__';

const getOrCreateStore = (state)=> {
    if(isServer){
        return initializeStore(state);
    }

    if(!window[__NEXT_REDUX_STORE__]){
        window[__NEXT_REDUX_STORE__] = initializeStore(state);
    }
    return window[__NEXT_REDUX_STORE__];
}

export default App=> {
    return class AppWithRedux extends React.Component{
        
        static async getInitialProps(appCtx){
            let siteData;
            try {
                const info = await axios.get('http://localhost:3000/api/v1/site');
                siteData = info.data[0];
            } catch (error) {
                console.log(error);
            }


            const reduxStore = getOrCreateStore()
            appCtx.ctx.reduxStore = reduxStore;

            let appProps = {};
            if(App.getInitialProps){
                appProps = await App.getInitialProps(appCtx);
            }


            return {...appProps, 
                initialReduxState: reduxStore.getState(),
                 siteData};
        }

        constructor(props){
            super(props);
            this.reduxStore = getOrCreateStore(props.initialReduxState);
        }

        render(){
            return(
                <App {...this.props} reduxStore={this.reduxStore}/>
            )
        }
    }
}