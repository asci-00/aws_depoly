import React from 'react';
import './App.css';

function App() {

  return (
    <div classNameName="main-container">
      {/* <div className="animationload" style={loading_styles}>
          <div className="loader">
              Loading...
          </div>
      </div> */}
		  <section id="home">
			  <div className="content">
                <div id="large-header" className="large-header">
                    <canvas id="demo-canvas"></canvas>
                    <div id="countdown_dashboard" className="home-main container">
                        <div className="row">
                            <div className="logo">
                                <img src="assets/images/logo.png" alt="logo"/>
                                <p>Lorem Ipsum is simply dummy text</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-sm-3 col-xs-6 dash-glob" data-scroll-reveal="enter bottom move 25px, after 0.3s">
                                <div className="dash days_dash">
                                    <div className="digit">0</div>
                                    <div className="digit">0</div>
                                    <span className="dash_title">Days</span>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-6 dash-glob" data-scroll-reveal="enter bottom move 25px, after 0.3s">
                                <div className="dash hours_dash">
                                    <div className="digit">0</div>
                                    <div className="digit">0</div>
                                    <span className="dash_title">Hours</span>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-6 dash-glob" data-scroll-reveal="enter bottom move 25px, after 0.3s">
                                <div className="dash minutes_dash">
                                    <div className="digit">0</div>
                                    <div className="digit">0</div>
                                    <span className="dash_title">Minutes</span>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-6 dash-glob" data-scroll-reveal="enter bottom move 25px, after 0.3s">
                                <div className="dash seconds_dash">
                                    <div className="digit">0</div>
                                    <div className="digit">0</div>
                                    <span className="dash_title">Seconds</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="newsletter">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                        <div className="main_content">
                            <h4><strong>Indus is under construction!</strong></h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            <div id="" className="confirm-message"></div>
                            <form id="" name="">
                                <div className="input-group">
                                    <input className="form-control news-input" type="text" name="subscribe_email" id="subscribe_email" placeholder="Email" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-custom news-btn" id="" name="subscribe_btn"><span>Subscribe</span></button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="features parallax" data-stellar-background-ratio="0.7" id="features">
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-4 col-md-4">
                        <div className="features-box">
                            <div className="open-overlay"><i className="icon-lightbulb"></i></div>
                            <h4>High Quality</h4>
                            <p>Nullam posuere, libero dolor molestie mi, vitae rutrum odio urna non dui.Nullam posuere, libero dolor molestieabd mi, vitae.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="features-box">
                            <div className="open-overlay"><i className="icon-ribbon"></i></div>
                            <h4>Great Features</h4>
                            <p>Nullam posuere, libero dolor molestie mi, vitae rutrum odio urna non dui.Nullam posuere, libero dolor molestieabd mi, vitae.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="features-box">
                            <div className="open-overlay"><i className="icon-circle-compass"></i></div>
                            <h4>Customer Services</h4>
                            <p>Nullam posuere, libero dolor molestie mi, vitae rutrum odio urna non dui.Nullam posuere, libero dolor molestieabd mi, vitae.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h4>Get In Touch</h4>
                        <div className="line-separate line-white text-center"><span></span></div>
                        <p>7-Indus House, Area name,city name -1230009</p>
                    </div>
                </div>
                <div id="cformSuccessMsg" style={{display: 'none'}} className="confirm-message"></div>
                <form id="" name="contactForm" method="POST" >
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-lg-offset-2 col-md-offset-2">
                            <input className="" type="text" name="contact_name" id="contact_name" placeholder="Name" />
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <input className="" type="text" name="contact_email" id="contact_email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-lg-offet-2 col-md-offset-2">
                            <textarea name="contact_message" id="contact_message" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="text-right">
                                <button className="btn btn-custom" id="contact_submit_btn" name="contact_submit_btn"><span>Send Message</span></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        <footer className="footer">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="social list-inline">
                            <li className="social-btn" id="fb"><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li className="social-btn" id="tw"><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li className="social-btn" id="tbl"><a href="#"><i className="fa fa-tumblr"></i></a></li>
                            <li className="social-btn" id="pin"><a href="#"><i className="fa  fa-pinterest"></i></a></li>
                            <li className="social-btn" id="flk"><a href="#"><i className="fa  fa-flickr"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <p className="copyright">Copyright© 2016 <a href="http://templatestock.co">Template Stock</a></p>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
