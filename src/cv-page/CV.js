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
                    <img src="./assets/images/hd_profile.png" alt="グエン コン タム" />
                  </a>
                </div>
                <div className="title">グエン コン タム</div>
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
                      <span className="link">情報</span>
                    </a>
                  </li>
                  <li>
                    <a href="#resume-card">
                      <span className="icon ion-android-list"></span>
                      <span className="link">履歴書</span>
                    </a>
                  </li>
                  <li>
                    <a href="#contacts-card">
                      <span className="icon ion-at"></span>
                      <span className="link">お問い合わせ</span>
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
                <div className="title">グエン コン タム</div>                
                <div className="subtitle subtitle-typed">
                  <div className="typing-title">
                    <p>Developer</p>
                    <p>BrSE</p>
                  </div>
                </div>

                {/* <!-- profile buttons --> */}
                <div className="lnks">
                  <a href="https://drive.google.com/file/d/1Bv22msQwU1ZTNGbhMMkyVLE6EAk4heCo/view?usp=sharing" className="lnk" target="_blank">
                    <span className="text">CV ダウンロード</span>
                  </a>
                  <a href="#" className="lnk discover">
                    <span className="text">お問い合わせ</span>
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
                  <div className="title">情報</div>

                  {/* <!-- content --> */}
                  <div className="row">
                    <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                      <div className="text-box">
                        <p>
                          私はウェブサイトやアプリケーションの開発の経験が 10年半ぐらいあります。
                          高品質なアプリを開発するために必要なすべてのツールに精通した経験を持っています。
                          温和な性格です。<br/>
                          長所は慎重なところです。よくタスクをチェックするのでバグがあまりありません。
                          仕事をするときはいつも一所懸命で、大変なことがあっても最後まで諦めません。
                          温和、優しい性格で協調性もありチームメンバーと協力しながら仕事を進めます。										
                        </p>
                      </div>
                    </div>
                    <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                      <div className="info-list">
                        <ul>
                          <li><strong>年齢　.　.　.　.</strong> <span id="years-old">24</span></li>
                          <li><strong>国籍　.　.　.　.</strong> ベトナム</li>
                          <li><strong>メール</strong> <a href="mailto:nguyencongtam642@gmail.com">nguyencongtam642@gmail.com</a></li>
                          <li><strong>現住所　.　.　.　.</strong> 埼玉県朝霞市東弁財</li>
                        
                        </ul>
                      </div>
                    </div>
                    <div className="clear"></div>
                  </div>

                </div>

                {/* <!--                  Services                --> */}
                <div className="content services">

                  {/* <!-- title --> */}
                  <div className="title">事業内容</div>

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
                            <p>ウェブ、アプリを開発しています。基本設計/詳細設計も担当できます。</p>
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
                            <p>お客様と問い合わせ、工数見積もり、スケジュールを作成して、ベトナム側チームに伝えます。コーディングレビュー、テスト書等も担当します。</p>
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
                  <div className="title">テクニカルスキル</div>

                  {/* <!-- content --> */}
                  <div className="row pricing-items">

                    {/* <!-- pricing item --> */}
                    <div className="border-line-v">
                      <div className="pricing-item">
                        <div className="feature-list">
                          <ul>
                            <li>Asp.Net、Asp.Net MVC</li>
                            <li>Telerik Controls、Crystal reports</li>
                            <li>Microsoft SQL、PostgreSql、Oracle</li>											
                            <li>Ajax、 XML、 JSON、 JQuery、WebAPI</li>
                            <li>Responsive Web Development - HTML/CSS/Bootstrap/JS</li>
                            <li>NodeJs、React</li>
                            <li>Angular JS</li>											
                            <li>サーバー設定</li>
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
                          <img src="./assets/images/clients/JLPTN2.png" alt="日本語 JLPT N2" />
                        </div>
                      </div>
                    </div>

                    {/* <!-- client item --> */}
                    <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                      <div className="client-item">
                        <div className="image">
                          <a target="_blank" href="https://www.credly.com/badges/45fb5b2d-1ed0-40f3-ab00-2cbe79104511/public_url">
                            <img src="https://images.credly.com/size/680x680/images/4bc21d8b-4afe-4fbd-9a90-a9de8bf7b240/AWS-SolArchitect-Associate-2020.png" alt="AWS Certified Solutions Architect – Associate" />
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
                    <div className="title">履歴書</div>

                    {/* <!-- content --> */}
                    <div className="row">

                      {/* <!-- experience --> */}
                      <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                        <div className="resume-title border-line-h">
                          <div className="icon"><i className="fa fa-briefcase"></i></div>
                          <div className="name">職歴</div>
                        </div>
                        <div className="resume-items">
                          <div className="resume-item border-line-h active">
                            <div className="date">2019年12月 - 今</div>
                            <div className="name">Full Stack Development - BrSE</div>
                            <div className="company"><a href="https://rikkeisoft.com/#" target="_black">リッケイ株式会社</a></div>
                            <p>
                              エンジニアとして会社のマインシステムを開発しています。
                            </p>
                          </div>
                          <div className="resume-item border-line-h">
                            <div className="date">2017年08月 - 2019年11月</div>
                            <div className="name">Full Stack Development - BrSE</div>
                            <div className="company"><a href="https://www.hyperion.co.jp/" target="_black">ハイペリオン 株式会社</a></div>
                            <p>
                              モンゴロ側のチームとベトナム側のチームと一緒に配車システムを開発しました。
                            </p>
                          </div>
                          <div className="resume-item  border-line-h">
                            <div className="date">2013年04月 - 2016年03月</div>
                            <div className="name">Full Stack Development</div>
                            <div className="company"><a href="https://www.tpf.com.au/" target="_black">TPF Group 株式会社</a></div>
                            <p>
                              香港側のチームとMelbourne側のチーム一緒にFulfilmentを開発しました。
                            </p>
                          </div>
                          <div className="resume-item">
                            <div className="date">2012年08月 - 2013年03月</div>
                            <div className="name">Development</div>
                            <div className="company"><a href="https://www.lacviet.vn/" target="_black">LAC VIET 株式会社</a></div>
                            <p>
                              ERPシステムのなかにSale Of Pointという機能を担当しました。
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* <!-- education --> */}
                      <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                        <div className="resume-title border-line-h">
                          <div className="icon"><i className="fa fa-university"></i></div>
                          <div className="name">学歴</div>
                        </div>
                        <div className="resume-items">
                          <div className="resume-item border-line-h active">
                            <div className="date">2020年 - 今</div>
                            <div className="name">オンラインコース - Udemy</div>
                            <div className="company">Udemy</div>
                            <p>
                              AWS、Blockchain、Smart Contractを勉強しています。
                            </p>
                          </div>
                          <div className="resume-item border-line-h">
                            <div className="date">2016年07月 - 2017年06月</div>
                            <div className="name">メロス言語学院</div>
                            <div className="company">東京</div>
                            <p>
                              日本語、ビジネスマナー、文化を勉強しました。
                            </p>
                          </div>
                          <div className="resume-item border-line-h">
                            <div className="date">2008年08月 - 2012年08月</div>
                            <div className="name">ホーチミン・テクニカル・エデュケーション大学</div>
                            <div className="company">ホーチミン市</div>
                            <p>
                              IT技術を勉強しました。
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
                    <div className="title">スキル</div>
                  
                    {/* <!-- content --> */}
                    <div className="row">
                    
                      {/* <!-- skill item --> */}
                      <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                        <div className="skills-list circles">
                          <div className="skill-title border-line-h">
                            <div className="icon"><i className="fa fa-code"></i></div>
                            <div className="name">コーディング</div>
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
                            <div className="name">言語</div>
                          </div>
                          <ul>
                            <li className="border-line-h"> 
                              <div className="name">ベトナム語</div>
                              <div className="progress">
                                <div className="percentage" style={{width:"90%"}}></div>
                              </div>
                            </li>
                            <li className="border-line-h"> 
                              <div className="name">日本語</div>
                              <div className="progress">
                                <div className="percentage" style={{width:"60%"}}></div>
                              </div>
                            </li>
                            <li className="border-line-h"> 
                              <div className="name">英語</div>
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
                            <div className="name">デザイン</div>
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
                            <div className="name">ナレッジ</div>
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
                    <div className="title">お問い合わせ</div>

                    {/* <!-- content --> */}
                    <div className="row">
                      <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                        <div className="contact_form">
                          <form id="cform" ref={form} onSubmit={sendEmail}>
                            <div className="row">
                              <div className="col col-d-6 col-t-6 col-m-12">
                                <div className="group-val">
                                  <input type="text" name="from_name" placeholder="名前" />                                  
                                </div>
                              </div>
                              <div className="col col-d-6 col-t-6 col-m-12">
                                <div className="group-val">
                                  <input type="text" name="from_email" placeholder="Eメール" />
                                </div>
                              </div>
                              <div className="col col-d-12 col-t-12 col-m-12">
                                <div className="group-val">
                                  <textarea name="message" placeholder="メッセージ"></textarea>
                                </div>
                              </div>
                            </div>
                            <div className="align-center">
                            <input type="submit" className="button arrow" value="送る"/>
                            {/* <a href="#" className="button" onClick={sendEmail}>
                                <span className="text">送る</span>
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
