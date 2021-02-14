import React, { Component } from 'react';

class About extends Component{
    render(){
      const {siteData} = this.props;
        return(
            <>
              <div className="title_page">
                  <h1>About us</h1>
              </div>

              <div className="content_wrapper">
                  <h1 className="inner">Pizzeria is Awesome</h1>
                  <p style={{textAlign: 'center'}}>
                  It is a long established fact that a reader will be distracted by 
                  the readable content of a page when looking at its layout.
                  </p>

              <div className="middle">
                  <div className="inner_middle">
                    <div className="item two_c">
                        <div className="wrapp">
                            <div className="top"
                             style={{background: `url('/static/images/chef.jpg')`}}>
                             </div>

                             <div className="bottom">
                                <h2>Our chefs</h2>
                                <h3>Pizzeria</h3>
                                <p>
                                here are many variations of passages of
                                Lorem Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or randomised
                                 words which don't look even slightly believable.
                                </p>
                                
                             </div>
                        </div>
                    </div>

                    <div className="item two_c">
                      <div className="wrapp">
                      <div className="top" 
                        style={{background: `url("/static/images/store.jpg")`}}>
                      </div>

                      <div className="bottom">
                                <h2>Our store</h2>
                                <h3>Pizzeria</h3>
                                <p>
                                here are many variations of passages of
                                Lorem Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or randomised
                                 words which don't look even slightly believable.
                                </p>
                                <div>
                                   <div>Phone: {siteData.phone}</div>
                                   <div>Address: {siteData.address}</div>
                                   <div>Email: {siteData.email}</div>
                                </div>
                             </div>
                      </div>
                    </div>
                  </div>

              </div>
          </div>
            </>
        )
    }
}

export default About;