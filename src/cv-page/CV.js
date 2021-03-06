import emailjs from '@emailjs/browser';
import $ from 'jquery'; 
import React , { useRef } from "react";

function CV() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
   
    if(form.current["0"].value && form.current["1"].value && form.current["2"].value){ 

        emailjs.sendForm(process.env.REACT_APP_EMAIJS_YOUR_SERVICE_ID, 
                        process.env.REACT_APP_EMAIJS_YOUR_TEMPLATE_ID, 
                        form.current, 
                        process.env.REACT_APP_EMAIJS_YOUR_USER_ID)
          .then((result) => {
              console.log(result.text);
              	$('#cform').fadeOut();
					      $('.alert-success').delay(1000).fadeIn();
          }, (error) => {
              console.log(error.text);
          });

      }
    

  };

  return (
    <div className="page new-skin">
		
        {/* <!-- preloader --> */}
        <div className="preloader">
          <div className="centrize full-width">
            <div className="vertical-center">
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- background --> */}
        <div className="background gradient">
          <ul className="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        {/* <!--		Container 	--> */}
        <div className="container opened" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">

            {/* <!--			Header		--> */}
            <header className="header">

              {/* <!-- header profile --> */}
              <div className="profile">						
                <div className="image">
                  <a href="#">
                    <img src="./assets/images/hd_profile.png" alt="????????? ?????? ??????" />
                  </a>
                </div>
                <div className="title">????????? ?????? ??????</div>
                <div className="subtitle subtitle-typed">
                  <div className="typing-title">
                    {/* <!-- <p>Web Designer</p> --> */}
                    <p>Developer</p>
                    <p>BrSE</p>
                  </div>
                </div>
              </div>

              {/* <!-- menu --> */}
              <div className="top-menu">
                <ul>
                  <li className="active">
                    <a href="#about-card">
                      <span className="icon ion-person"></span>
                      <span className="link">??????</span>
                    </a>
                  </li>
                  <li>
                    <a href="#resume-card">
                      <span className="icon ion-android-list"></span>
                      <span className="link">?????????</span>
                    </a>
                  </li>
                  <li>
                    <a href="#contacts-card">
                      <span className="icon ion-at"></span>
                      <span className="link">??????????????????</span>
                    </a>
                  </li>
                </ul>
              </div>

            </header>

            {/* <!--				Card - Started			--> */}
            <div className="card-started" id="home-card">

              {/* <!--                Profile              --> */}
              <div className="profile">

                {/* <!-- profile image --> */}
                <div className="slide" style={{backgroundImage: `url("./assets/images/header_bg.png")`}}></div>

                {/* <!-- profile photo --> */}
                <div className="image">
                  <img src="./assets/images/hd_profile.png" alt="" />
                </div>

                {/* <!-- profile titles --> */}
                <div className="title">NGUYEN CONG TAM</div>
                <div className="title">????????? ?????? ??????</div>                
                <div className="subtitle subtitle-typed">
                  <div className="typing-title">
                    <p>Developer</p>
                    <p>BrSE</p>
                  </div>
                </div>

                {/* <!-- profile buttons --> */}
                <div className="lnks">
                  <a href="https://drive.google.com/file/d/1X2aUsCi743tMWamI3rz4d7-lxX10g_po/view?usp=sharing" className="lnk" target="_blank">
                    <span className="text">CV ??????????????????</span>
                  </a>
                  <a href="#" className="lnk discover">
                    <span className="text">??????????????????</span>
                  </a>
                </div>

              </div>

            </div>

            {/* <!--               Card - About            --> */}
            <div className="card-inner animated active" id="about-card">
              <div className="card-wrap">

                {/* <!--                   About                 --> */}
                <div className="content about">

                  {/* <!-- title --> */}
                  <div className="title">??????</div>

                  {/* <!-- content --> */}
                  <div className="row">
                    <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                      <div className="text-box">
                        <p>
                          ???????????????????????????????????????????????????????????????????????? 10??????????????????????????????
                          ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                          ????????????????????????<br/>
                          ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                          ???????????????????????????????????????????????????????????????????????????????????????????????????????????????
                          ???????????????????????????????????????????????????????????????????????????????????????????????????????????????										
                        </p>
                      </div>
                    </div>
                    <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                      <div className="info-list">
                       
                        <div>?????????.???.???.???. <span id="years-old">24</span></div>
                        <div>E ?????????.???.???. <a href="mailto:nguyencongtam642@gmail.com">nguyencongtam642@gmail.com</a></div>
                        <div>?????????.???.???.???. ????????????</div>
                        <div>????????????.???.???. ???????????????????????????</div>
                      </div>
                    </div>
                    <div className="clear"></div>
                  </div>

                </div>

                {/* <!--                  Services                --> */}
                <div className="content services">

                  {/* <!-- title --> */}
                  <div className="title">????????????</div>

                  {/* <!-- content --> */}
                  <div className="row service-items border-line-v">
                    {/* <!-- service item --> */}
                    <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                      <div className="service-item">
                        <div className="icon">
                          <span className="fa fa-code"></span>
                        </div>
                        <div className="name">
                          <span>Web Development</span>
                        </div>
                        <div className="desc">
                          <div>
                            <p>????????????????????????????????????????????????????????????/????????????????????????????????????</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- service item --> */}
                    <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                      <div className="service-item">
                        <div className="icon">
                          <span className="fa fa-exchange"></span>
                        </div>
                        <div className="name">
                          <span >BrSE</span>
                        </div>
                        <div className="desc">
                          <div>
                            <p>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clear"></div>

                </div>

                {/* <!--                  Price Tables                --> */}
                <div className="content pricing">

                  {/* <!-- title --> */}
                  <div className="title">????????????????????????</div>

                  {/* <!-- content --> */}
                  <div className="row pricing-items">

                    {/* <!-- pricing item --> */}
                    <div className="border-line-v">
                      <div className="pricing-item">
                        <div className="feature-list">
                          <ul>
                            <li>Asp.Net???Asp.Net MVC</li>
                            <li>Telerik Controls???Crystal reports</li>
                            <li>Microsoft SQL???PostgreSql???Oracle</li>											
                            <li>Ajax??? XML??? JSON??? JQuery???WebAPI</li>
                            <li>Responsive Web Development - HTML/CSS/Bootstrap/JS</li>
                            <li>NodeJs???React</li>
                            <li>Angular JS</li>											
                            <li>??????????????????</li>
                            <li>Smart Contract / Solidity <strong>new</strong></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="clear"></div>
                  </div>

                </div>

                {/* <!--                  Clients                --> */}
                <div className="content clients">

                  {/* <!-- title --> */}
                  <div className="title">Certificate</div>

                  {/* <!-- content --> */}
                  <div className="row client-items">

                    {/* <!-- client item --> */}
                    <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                      <div className="client-item">
                        <div className="image">
                          <img src="./assets/images/clients/JLPTN2.png" alt="????????? JLPT N2" />
                        </div>
                      </div>
                    </div>

                    {/* <!-- client item --> */}
                    <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                      <div className="client-item">
                        <div className="image">
                          <a target="_blank" href="https://www.credly.com/badges/45fb5b2d-1ed0-40f3-ab00-2cbe79104511/public_url">
                            <img src="https://images.credly.com/size/680x680/images/4bc21d8b-4afe-4fbd-9a90-a9de8bf7b240/AWS-SolArchitect-Associate-2020.png" alt="AWS Certified Solutions Architect ??? Associate" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* <!-- client item --> */}
                    <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                      <div className="client-item">
                        <div className="image">
                          {/* <!-- <a target="_blank" href="https://www.google.com">
                            <img src="images/clients/client_3.png" alt="" />
                          </a> --> */}
                        </div>
                      </div>
                    </div>

                    {/* <!-- client item --> */}
                    <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                      <div className="client-item">
                        <div className="image">
                          {/* <!-- <a target="_blank" href="https://www.google.com">
                            <img src="images/clients/client_4.png" alt="" />
                          </a> --> */}
                        </div>
                      </div>
                    </div>

                    <div className="clear"></div>
                  </div>

                </div>

              </div>
            </div>

            {/* <!--				Card - Resume			--> */}
              <div className="card-inner" id="resume-card">
                <div className="card-wrap">

                  {/* <!--                    Resume                  --> */}
                  <div className="content resume">

                    {/* <!-- title --> */}
                    <div className="title">?????????</div>

                    {/* <!-- content --> */}
                    <div className="row">

                      {/* <!-- experience --> */}
                      <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                        <div className="resume-title border-line-h">
                          <div className="icon"><i className="fa fa-briefcase"></i></div>
                          <div className="name">??????</div>
                        </div>
                        <div className="resume-items">
                          <div className="resume-item border-line-h active">
                            <div className="date">2019???12??? - ???</div>
                            <div className="name">Full Stack Development - BrSE</div>
                            <div className="company"><a href="https://rikkeisoft.com/#" target="_black">????????????????????????</a></div>
                            <p>
                              ?????????????????????????????????????????????????????????????????????????????????
                            </p>
                          </div>
                          <div className="resume-item border-line-h">
                            <div className="date">2017???08??? - 2019???11???</div>
                            <div className="name">Full Stack Development - BrSE</div>
                            <div className="company"><a href="https://www.hyperion.co.jp/" target="_black">?????????????????? ????????????</a></div>
                            <p>
                              ???????????????????????????????????????????????????????????????????????????????????????????????????????????????
                            </p>
                          </div>
                          <div className="resume-item  border-line-h">
                            <div className="date">2013???04??? - 2016???03???</div>
                            <div className="name">Full Stack Development</div>
                            <div className="company"><a href="https://www.tpf.com.au/" target="_black">TPF Group ????????????</a></div>
                            <p>
                              ????????????????????????Melbourne????????????????????????Fulfilment????????????????????????
                            </p>
                          </div>
                          <div className="resume-item">
                            <div className="date">2012???08??? - 2013???03???</div>
                            <div className="name">Development</div>
                            <div className="company"><a href="https://www.lacviet.vn/" target="_black">LAC VIET ????????????</a></div>
                            <p>
                              ERP????????????????????????Sale Of Point???????????????????????????????????????
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* <!-- education --> */}
                      <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                        <div className="resume-title border-line-h">
                          <div className="icon"><i className="fa fa-university"></i></div>
                          <div className="name">??????</div>
                        </div>
                        <div className="resume-items">
                          <div className="resume-item border-line-h active">
                            <div className="date">2020??? - ???</div>
                            <div className="name">???????????????????????? - Udemy</div>
                            <div className="company">Udemy</div>
                            <p>
                              AWS???Blockchain???Smart Contract???????????????????????????
                            </p>
                          </div>
                          <div className="resume-item border-line-h">
                            <div className="date">2016???07??? - 2017???06???</div>
                            <div className="name">?????????????????????</div>
                            <div className="company">??????</div>
                            <p>
                              ??????????????????????????????????????????????????????????????????
                            </p>
                          </div>
                          <div className="resume-item border-line-h">
                            <div className="date">2008???08??? - 2012???08???</div>
                            <div className="name">??????????????????????????????????????????????????????????????????</div>
                            <div className="company">??????????????????</div>
                            <p>
                              IT??????????????????????????????
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="clear"></div>
                    </div>

                  </div>

                  {/* <!--                    Skills                  --> */}
                  <div className="content skills">

                    {/* <!-- title --> */}
                    <div className="title">?????????</div>
                  
                    {/* <!-- content --> */}
                    <div className="row">
                    
                      {/* <!-- skill item --> */}
                      <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                        <div className="skills-list circles">
                          <div className="skill-title border-line-h">
                            <div className="icon"><i className="fa fa-code"></i></div>
                            <div className="name">??????????????????</div>
                          </div>
                          <ul>
                            <li> 
                              <div className="name">C# / ASP.Net / ASP MVC</div>
                              <div className="progress p90">
                                <span>90%</span>
                              </div>
                            </li>
                            <li> 
                              <div className="name">MS SQL / PostgreSQL</div>
                              <div className="progress p75">
                                <span>75%</span>
                              </div>
                            </li>
                            <li> 
                              <div className="name">Angular / JavaScript</div>
                              <div className="progress p85">
                                <span>85%</span>
                              </div>
                            </li>
                            <li> 
                              <div className="name">HTML / CSS</div>
                              <div className="progress p95">
                                <span>95%</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* <!-- skill item --> */}
                      <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                        <div className="skills-list dotted">
                          <div className="skill-title border-line-h">
                            <div className="icon"><i className="fa fa-flag"></i></div>
                            <div className="name">??????</div>
                          </div>
                          <ul>
                            <li className="border-line-h"> 
                              <div className="name">???????????????</div>
                              <div className="progress">
                                <div className="percentage" style={{width:"90%"}}></div>
                              </div>
                            </li>
                            <li className="border-line-h"> 
                              <div className="name">?????????</div>
                              <div className="progress">
                                <div className="percentage" style={{width:"60%"}}></div>
                              </div>
                            </li>
                            <li className="border-line-h"> 
                              <div className="name">??????</div>
                              <div className="progress">
                                <div className="percentage" style={{width:"30%"}}></div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>


                      {/* <!-- skill item --> */}
                      <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                        <div className="skills-list">
                          <div className="skill-title border-line-h">
                            <div className="icon"><i className="fa fa-paint-brush"></i></div>
                            <div className="name">????????????</div>
                          </div>
                          <ul>
                            <li className="border-line-h"> 
                              <div className="name">Web Design</div>
                              <div className="progress">
                                <div className="percentage" style={{width:"90%"}}></div>
                              </div>
                            </li>
                            <li className="border-line-h"> 
                              <div className="name">Photoshop</div>
                              <div className="progress">
                                <div className="percentage" style={{width:"75%"}}></div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* <!-- skill item --> */}
                      <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                        <div className="skills-list list">
                          <div className="skill-title border-line-h">
                            <div className="icon"><i className="fa fa-list"></i></div>
                            <div className="name">????????????</div>
                          </div>
                          <ul>
                            <li> 
                              <div className="name">Full Stack Develope</div>
                            </li>
                            <li> 
                              <div className="name">Server setting</div>
                            </li>
                            <li> 
                              <div className="name">Website hosting</div>
                            </li>
                            <li> 
                              <div className="name">iOS and android apps</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="clear"></div>
                    </div>
                    
                  </div>

                </div>
              </div>

              
              {/* <!--				Card - Contacts			--> */}
              <div className="card-inner contacts" id="contacts-card">
                <div className="card-wrap">
                  {/* <!--                    Contact Form                  --> */}
                  <div className="content contacts">

                    {/* <!-- title --> */}
                    <div className="title">??????????????????</div>

                    {/* <!-- content --> */}
                    <div className="row">
                      <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                        <div className="contact_form">
                          <form id="cform" ref={form} onSubmit={sendEmail}>
                            <div className="row">
                              <div className="col col-d-6 col-t-6 col-m-12">
                                <div className="group-val">
                                  <input type="text" name="from_name" placeholder="??????" />                                  
                                </div>
                              </div>
                              <div className="col col-d-6 col-t-6 col-m-12">
                                <div className="group-val">
                                  <input type="text" name="from_email" placeholder="E?????????" />
                                </div>
                              </div>
                              <div className="col col-d-12 col-t-12 col-m-12">
                                <div className="group-val">
                                  <textarea name="message" placeholder="???????????????"></textarea>
                                </div>
                              </div>
                            </div>
                            <div className="align-center">
                            <input type="submit" className="button arrow" value="??????"/>
                            {/* <a href="#" className="button" onClick={sendEmail}>
                                <span className="text">??????</span>
                                <span className="arrow"></span>
                              </a> */}
                            </div>
                          </form>
                          <div className="alert-success">
                            <p>Thanks, your message is sent successfully.</p>
                          </div>
                        </div>
                      </div>
                      <div className="clear"></div>
                    </div>

                  </div>

                </div>
              </div>

        </div>
	  </div>
  );
}

export default CV;
