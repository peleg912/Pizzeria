import axios from 'axios';
import { response } from 'express';
import * as actionType from '../types';

const URL = 'http:://localhost:3000';

export const sendMsg = async (data)=> {
    try {
        const response = await axios.post(`${URL}/api/v1/msg`, data);
    } catch (error) {
        console.log(error);
    }

    return{
        type: actionType.SEND_MSG,
        payload: response.data
    }
}

export const clearMsg = (data)=> {
    return{
        type: actionType.CLEAR_MSG,
        payload: ''
    }
}