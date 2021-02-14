import React, { Component } from 'react';
import {Formik, validateYupSchema} from 'formik';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';
import axios from 'axios';

class Contact extends Component{

    state = {
        msgDone: false
    }

    onSubmitHandler = async (values, actions)=> {
        try {
           await axios.post('http://localhost:3000/api/v1/msg', values);  
           this.setState({msgDone :true})     
           actions.setSubmitting(false);
           actions.resetForm();
        } catch (error) {
            console.log(error);
        }

    }

    validationHandler = (values)=> {
        let errors = {};
        for(let prop in values){
            if(!values[prop]){errors[prop] = "Required"}
        }

        return errors;
    }


    render(){
        return(
            <>
                <div className="title_page">
                    <h1> Contact us</h1>
                </div>

                <div className="content_wrapper">
                    <div className="inner">
                        <h1>Feel free to contact us</h1>

                        { !this.state.msgDone ? 
                        <Formik
                        initialValues= {{name:'', email:'', msg:''}}
                        validate={(values)=>this.validationHandler(values)}
                        onSubmit={(values, actions)=>this.onSubmitHandler(values, actions)}>
                        {({errors,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        values,
                        isSubmitting,
                        touched
                        })=> (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input className="form-control"
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                    value={values.name}
                                    onBlur={handleBlur}
                                    onChange={handleChange}/>
                                    {errors.name && touched.name ? 
                                    <div className="error_label">
                                        {errors.name}
                                    </div>
                                    : null}

                                    <label>Email</label>
                                    <input className="form-control"
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={values.email}
                                    onBlur={handleBlur}
                                    onChange={handleChange}/>
                                    {errors.email && touched.email ? 
                                    <div className="error_label">
                                        {errors.email}
                                    </div>
                                    : null}

                                   <label>Write youe message here</label>
                                    <textarea className="form-control"
                                    placeholder="Enter your meassage..."
                                    name="msg"
                                    value={values.msg}
                                    onBlur={handleBlur}
                                    onChange={handleChange}></textarea>
                                    {errors.msg && touched.msg ? 
                                    <div className="error_label">
                                        {errors.msg}
                                    </div>
                                    : null}
                                </div>

                                <button className="btn btn-primary"
                                type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </form>
                        )}
                        </Formik> : 

                        <div> Thank you for your message!</div>}


                    </div>
                </div>
            </>
        )
    }
}


const mapStateToProps = (state)=> {
    return {
        msg: state.msg
    }
}


export default connect(mapStateToProps)(Contact);