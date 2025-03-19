

 <?php   include('header.php');?>
 
 <style>
     .owl-slider .owl-carousel .itme .img-fluid{
    height: 450px;
    width:100%;
}
     </style>

<div class="owl-slider vh_homSlide">
    <div class="owl-carousel">
  
    <div class="item">
    <img src="img/slider-1.jpg" alt class="img-fluid">
    </div>

    <div class="item">
    <img src="img/slider-2.jpg" alt class="img-fluid">
    </div>

    <div class="item">
    <img src="img/slider-3.jpg" alt class="img-fluid">
    </div>

    <div class="item">
    <img src="img/slider-4.jpg" alt class="img-fluid">
    </div>

    
    </div>
    <div id="counter"></div>
    </div>

    <style>


.about-us-button a{
    background-color: #2e3092;
    padding: 10px 15px;
    color: #fff;
    font-weight: 500;
    box-shadow: 2px 2px 2px #8b8a8a;
}

.about-us-button a:hover{
    background-color: #eb0000;
    box-shadow: 2px 2px 7px #8b8a8a;
}
  section.notice {
    /* height: 90vh; */
    /* width: 100%; */
    /* background-image: url('../../assets/images/kidbg.png');
    background-size: cover;
    background-position: center; */
    padding: 30px;
    /* position: relative; */
    z-index: 1;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
}

@media (max-width: 1280px) {
    section.notice {
        flex-wrap: wrap;
        justify-content: center;
        padding: 20px;
    }
}
/* section.notice::before {
    content: '';
    position: absolute;
    top: 24%;
    left: 0%;
    height: 60%;
    width: 50%;
    background: #a9ec5b;
    transform: skewY(-50deg) rotate(45deg);
    z-index: -1;
} */
/* section.notice::after {
    content: '';
    position: absolute;
    bottom: 0%;
    left: 0;
    height: 20%;
    width: 20%;
    background: #a9ec5b;
    transform: skewY(-20deg);
    z-index: -1;
} */
/* @media (max-width: 991px) {
    section.notice {
        height: auto;
    }
} */


/* .notice-content:hover {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    animation-name: example;
    animation-duration: 0.25s;
    border-left: 8px solid #a9ec5b;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
@keyframes example {
    0%   {border-left: 2px solid #ffffff;}
    25%  {border-left: 3px solid #ffe6e6;}
    50%  {border-left: 4px solid #a9ec5b;}
    100% {border-left: 5px solid #a9ec5b;}
} */
.innerNoticeContent {
    line-height: 1.3;
    padding:10px 10px;
}
    /* .innerNoticeContent .top a {
    padding: 20px 80px;
    background: #bb1c21;
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    display: inline-block;
    margin-bottom: 10px;
    border-radius: 50px;
    animation: shadow 1s forwards infinite;
}
@keyframes shadow {
    0% {
        box-shadow: 2px 2px 30px #bb1c21;
    }
    100% {
        box-shadow: 1px 2px 3px #bb1c21;
    }
} */
    .innerNoticeContent .top h3 {
        margin: 0px 0px;
        color: #2e3092;
        text-align: left;
        font-size: 40px;
        font-weight: 900;
        line-height: 50px;
    }

    .innerNoticeContent .top p {
        text-align: justify;
        margin-top:10px;
        font-size: 16px;
        line-height: 25px;
    }

    .innerNoticeContent .middle {
        margin: 10px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        /* background: #000; */
    }

        .innerNoticeContent .middle .abtBox {
            height: 66px;
            width: 100px;
            border: 2px solid #19304f;
            color: #19304f;
            border-radius: 10px;
            padding: 10px;
            transition: all 0.5s ease-in-out;
        }

            .innerNoticeContent .middle .abtBox:hover {
                background: #19304f;
                color: #fff;
            }

            .innerNoticeContent .middle .abtBox p {
                font-size: 12px;
            }

.notice-box {
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: space-between;
    align-items: center;
    /* background: #000; */
    position: relative;
}

@media (max-width: 1280px) {
    .notice-box {
        flex-wrap: wrap;
        justify-content: center;
    }
}

.notice-box::before {
    content: '';
    position: absolute;
    top: 12%;
    left: 0;
    height: 80%;
    width: 100%;
    /* background: rgba(0,0,0,0.5); */
    background: #fbbbbd;
    transform: skewY(358deg);
    z-index: -1;
    display: none;
}

.notice-box .msgBoxs {
    height: 200px;
    width: 300px;
    background: #fff;
    margin: 15px;
    /* padding: 10px; */
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 12px 12px 12px 0px #32323224;
}

.notice-box .mainMsgBox:nth-child(1) {
    padding-top: 30px;
}

.notice-box .mainMsgBox:nth-child(2) {
    padding-top: 60px;
}

.notice-box .msgBoxs img {
    max-width: 100%;
    /* margin: 10px 10px; */
    object-fit: cover;
}

.notice-box .msgBoxs h5 {
    font-weight: 900;
    color: #19304f;
    margin: 8px 8px;
    font-size: 18px;
}

.notice-box .msgBoxs p {
    margin: 0px 0px;
    font-size: 13.5px;
    padding: 54px 10px;
    text-align: justify;
    color: #000;
    background: #ffffffd6;
    height: 200px;
    width: 300px;
}

@media (max-width: 991px) {
    .notice-content {
        width: 100%;
        text-align: center;
    }
}

@media (max-width: 500px) {
    .notice-content {
        width: 100%;
        text-align: center;
    }

    .innerNoticeContent .top img {
        max-height: 80px;
        object-fit: cover;
    }

    .notice-box .msgBoxs {
        border: 1px solid #000;
    }
}



.think {
    padding: 50px 0px;
    background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('img/building.JPG');
    background-size: cover;
    background-position: top;
    background-attachment: fixed;
    color: #fff;
    position: relative;
}

    .think::before {
        content: 'Why SSPS Chandausi ?';
        position: absolute;
        top: 0;
        right: 0;
        height: 80px;
        width: 500px;
        font-size: 16px;
        font-weight: bold;
        padding: 27px 37px;
        background-color:red;
        color: #fff;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 8% 100%);
        border-top: 2px solid #fff;
        text-transform: uppercase;
    }

    .think p {
        margin-top: 20px;
        padding: 0px 50px;
        max-width: 700px;
        font-size: 16px;
        line-height: 28px;
        color: #fff;
    }

    .think a {
        padding: 10px 40px;
        background: red;
        margin-left: 50px;
        display: inline-block;
        text-decoration: none;
        color: #fff;
    }

@media (max-width: 991px) {
    .think::before {
        text-align: center;
        font-size: 1em;
        height: 45px;
        width: 350px;
        padding: 10px 20px;
    }

    #rightThink {
        padding: 30px 20px;
    }

        #rightThink p {
            line-height: 25px;
            margin: 0;
            padding: 10px;
        }

    .think p {
        padding: 0px 20px;
        max-width: 700px;
        font-size: 14px;
        line-height: 25px;
    }

    .think a {
        padding: 10px 40px;
        background: #bb1c21;
        margin-left: 20px;
        display: inline-block;
        text-decoration: none;
        color: #fff;
    }
}




    </style>


    <section class="notice mb-0 about-us-bg">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <div class="notice-box aos-init aos-animate" data-aos="fade-left" style="
    padding: 4px;border: 1px solid grey;box-shadow: 1px 1px 5px grey;">

                        <img src="img/building.JPG" class="img-fluid">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="notice-content">
                        <div class="innerNoticeContent">

                            <div class="top">
                                <h5 data-aos="fade-right" class="about-line aos-init aos-animate">About Us</h5>
                                <h3 data-aos="fade-up" class="aos-init aos-animate">Welcome to SSPS </h3>
                                <p data-aos="fade-right" class="aos-init aos-animate">
                                Silver Stone Sr. Sec. School, is established by Silver Stone Seva Samiti, Bahjoi. School is like an oyster bed, creating an environment which nurtures the pearling every oyster. Each student has been gifted with a special pearl. It is the endeavor of the institution to make each pearl polished & glowing. The medium of institute is English. The institution owns a palatial & imposing building consisting of big, airy and fully A.C. & well furnished class-rooms equipped with all modern teaching aids.
                                </p>
                                <p data-aos="fade-up" class="aos-init">
                                It has all facilities required for a good educational institution, viz enriched library, physics, chemistry, computer, science, maths lab etc. The school building is earthquake resistant & well equipped with all fire safety devices each of every corner of the school is insight of the school authorities through audio.......                  </p>
                                <div class="mt-2 about-us-button">
                                    <a class="theme-btn-new" href="about_us.aspx">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    <section class="education">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="sub-heading color1 wow fadeInDown" style="visibility: visible;"></div>
                    <div class="heading1 color1 wow fadeInUp" style="visibility: visible;">Our Facilities</div>
                </div>
            </div>
            <div class="row mt-4 justify-content-center">
                <div class="col-md-6 col-lg-3 wow fadeInUp delay-01" style="visibility: visible;">
                   
                    <div class="item mb-4 wow fadeIn" style="visibility: visible;">
                        <a href="https://www.Silver Stone Public Schoolworldacademy.com/" target="_blank"><img src="img/building.JPG" alt="" class="img-fluid">
                            </a><div class="overlay color5 title-overlay text-center" style="background: #499ed8c4;"><a href="https://www.Silver Stone Public Schoolworldacademy.com/" target="_blank">
                            <div class="text2 mb-2">Silver Stone Public School</div>
                            </a><a href="https://www.Silver Stone Public Schoolworldacademy.com/" target="_blank" class="btn btn-outline-white">Explore</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeInUp delay-02" style="visibility: visible;">
                  
                    <div class="item mb-4 wow fadeIn" style="visibility: visible;">
                        <a href="https://www.Silver Stone Public Schoolworldacademy.com/" target="_blank"><img src="img/building.JPG" alt="" class="img-fluid">
                            </a><div class="overlay color6 title-overlay text-center" style="background: #7f3f98bd;"><a href="https://www.Silver Stone Public Schoolworldacademy.com/" target="_blank">
                            <div class="text2 mb-2">Silver Stone Public School</div>
                            </a><a href="https://www.Silver Stone Public Schoolworldacademy.com/" target="_blank" class="btn btn-outline-white">Engage</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeInUp delay-01" style="visibility: visible;">
                   
                    <div class="item mb-4 wow fadeIn" style="visibility: visible;">
                        <a href="https://www.Silver Stone Public Schoolhigh.com/" target="_blank"><img src="img/building.JPG" alt="" class="img-fluid">
                        </a><div class="overlay color5 title-overlay text-center"><a href="https://www.Silver Stone Public Schoolhigh.com/" target="_blank">
                            <div class="text2 mb-2">Silver Stone Public School</div>
                            </a><a href="https://www.Silver Stone Public Schoolhigh.com/" target="_blank" class="btn btn-outline-white">LOOK BEYOND</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeInUp delay-02" style="visibility: visible;">
                   
                    <div class="item mb-4 wow fadeIn" style="visibility: visible;">
                        <a href="https://Silver Stone Public Schoolkids.com/" target="_blank"><img src="img/building.JPG" alt="" class="img-fluid">
                        </a><div class="overlay color6 title-overlay text-center"><a href="https://Silver Stone Public Schoolkids.com/" target="_blank">
                            <div class="text2 mb-2">Silver Stone Public School</div>
                            </a><a href="https://Silver Stone Public Schoolkids.com/" target="_blank" class="btn btn-outline-white">START HERE</a>
                        </div>
                    </div>
                </div>
               
                 
                </div>
            </div>
      
    </section>

    <section id="Section1">
    <div class="container-fluid padding-cont " id="Div1">
	
<div class="container">	
   <div class="row pt-3 m-0">
     
          <div class="col-md-5 wow fadeInLeft" data-wow-delay="300ms" style="visibility: visible; animation-delay: 300ms;">
        <img src="img/building.JPG" class="img-thumbnail img-fluid pt-3">
      </div> 


       <div class="col-md-7">
      		 
       <div class="heading-bls">
        <span>Chairperson's Message</span>
         <h2>CHAIRPERSON Name</h2>
         <hr class="green">
       </div>
            <p><strong>Dear Parents,</strong></p>
                                    <p>I am pleased to share that Silver Stone Senior Secondary School, Bahjoi Road, Chandausi is transcending to new heights with each passing year, with clear vision of our Principal, we focus only on high quality education and building character, allowing you to pursue studies in an easy and free way. 
"It is not your aptitude but your attitude that determines your altitude."</p>

   <p><b> 
I feel blessed and honoured to lead this reputed institution of Chandausi city with a dedicated and highly competent team of staff members. We as a team, remain committed to deliver on the values and cultural entrusted to us by our dear founders so as to build next generation. <br><a href="chairman.aspx" style="color:red;">Read more....</a> </p>
        

         </div>

       
   </div>
</div>
	</div>

    </section>

    <section id="test-faq111">
        <div class="container-fluid padding-cont " id="abt">
        
    <div class="container">	
       <div class="row pt-3 m-0">
         
              <div class="col-md-5 wow fadeInLeft" data-wow-delay="300ms" style="visibility: visible; animation-delay: 300ms;">
            <img src="img/building.JPG" class="img-thumbnail img-fluid pt-3">
          </div> 
    
    
           <div class="col-md-7">
                   
           <div class="heading-bls">
            <span>PRINCIPAL'S MESSAGE</span>
             <h2>Principal Name</h2>
             <hr class="green">
           </div>
               <p>
               The world is undergoing rapid changes in the knowledge landscape. The children of today are lucky to be living in time of a great technological revolution. With various dramatic, scientific and technological. 
               </p>
    
    <p>Advances, there is a great need of skilled workforce particularly involving mathematics, computer science and data science in conjunction with multidisciplinary abilities across the science, social science and humanities, will be increasingly in greater demand. For a long time, it was believed that the lack of information is the reason for the lack of intelligence. Therefore, I am taking this opportunity to share my views with the students and their parents to teach your kids how to think, teach them to question and teach them to be curious about the surroundings. <br><a href="principal.aspx" style="color:red;">Read more....</a> </p>
            
             </div>
    
           
       </div>
    </div>
        </div>
    
        </section>

        <style>
            #test-faq111 {
        padding: 3% 0;
        background: #f3f3f3;
    }
            .heading-bls span {
        font-weight: 600;
        color: #d80910;
        text-transform: uppercase;
        font-size: 17px;
    }
            hr.green {
        background-color: #d80910!important;
        margin: 0 auto 20px 0!important;
        height: 1px!important;
    }
            .padding-cont p  {
        font-family: 'FontAwesome';
        font-weight: 400;
        font-size: 19px;
        color: #000000;
        text-align: justify;
        line-height: 30px;
        padding-bottom: 0px;
        margin-bottom:5px;
    }
            .img-thumbnail, .thumbnail {
        -webkit-box-shadow: 0 1px 2px rgb(0 0 0 / 8%);
        box-shadow: 0 1px 2px rgb(0 0 0 / 8%);
    }
    .pt-3, .py-3 {
        padding-top: 1rem !important;
    }
    
    .img-thumbnail {
        padding: 0.25rem;
        background-color: #fff;
        border: 1px solid #dee2e6;
        border-radius: 0.25rem;
        max-width: 100%;
        width:100%;
        height: 380px;
    }
            @media screen and (max-width:425px) {
                .img-thumbnail {
                    height: auto;
                    margin-bottom: 20px;
                }
            }
        </style>
    
    
<section class="education">
    <div class="container">
    <div class="row">
    <div class="col-12 text-center">
    <div class="sub-heading color1 wow fadeInDown"></div>
    <div class="heading1 color1 wow fadeInUp">Our ways. Our methods. Our difference. </div>
    </div>
    </div>
    <div class="row mt-4">
    <div class="col-lg-4 px-0">
    <div class="item animated wow fadeInUp delay-02">
    <a href="academics.html"><img src="img/building.JPG" alt class="img-fluid">
    <div class="overlay color1 title-overlay">
    <div class="text">Academics <i class="fa fa-chevron-right" aria-hidden="true"></i></div>
    </div></a>
    </div>
    <div class="item animated wow fadeInUp delay-03">
    <a href="teaching-methods.html"><img src="img/building.JPG" alt class="img-fluid">
    <div class="overlay color2 title-overlay">
    <div class="text">Teaching Methods <i class="fa fa-chevron-right" aria-hidden="true"></i></div>
    </div></a>
    </div>
    </div>
    <div class="col-lg-4 px-0">
    <div class="box-grey wow zoomIn">
    <div class="triangle-left"></div>
    <div class="triangle-right"></div>
    <div class="p-5">
    <h4>Holistic Education at Silver Stone Public School</h4>
    <p>Aiding this holistic grooming of the child are the four quadrants of our schooling system - Academics, Events and Activities, Teaching Faculty, Infrastructure and Amenities.</p>
    <a href="holistic-development.html" class="btn btn-outline-primary wow fadeInUp">VIEW MORE</a>
    </div>
    </div>
    </div>
    <div class="col-lg-4 px-0">
    <div class="item animated wow fadeInUp delay-02">
    <a href="student-success.html"><img src="img/building.JPG" alt class="img-fluid">
    <div class="overlay color3 title-overlay">
    <div class="text">Student Activities <i class="fa fa-chevron-right" aria-hidden="true"></i></div>
    </div></a>
    </div>
    <div class="item animated wow fadeInUp delay-03">
    <a href="facilities.html"><img src="img/building.JPG" alt class="img-fluid">
    <div class="overlay color4 title-overlay">
    <div class="text">Infrastructure <i class="fa fa-chevron-right" aria-hidden="true"></i></div>
    </div></a>
    </div>
    </div>
    </div>
    </div>
    </section>

    <section class="think">
        <div class="container">
            <div class="row">
                <div class="col-md-6" id="rightThink">
                    <p>
                        <i class="fa fa-caret-right"></i>&nbsp;&nbsp;Learning independence, understanding priorities of
                    growth
                    </p>
                    <p>
                        <i class="fa fa-caret-right"></i>&nbsp;&nbsp;The sense of community and personal growth
                    enhancement
                    </p>
                    <p><i class="fa fa-caret-right"></i>&nbsp;&nbsp;Strong Academic opportunity with best faculties</p>
               
                    <p><i class="fa fa-caret-right"></i>&nbsp;&nbsp;Preparation for life after school</p>
                    <p>
                        <i class="fa fa-caret-right"></i>&nbsp;&nbsp;Learning is an active process which is major role
                    in
                    our life.
                    </p>
                </div>
                <div class="col-md-6" id="thinkIntro">
                    <p class="mt-5 pt-3">
                        The School is providing quality education with an emphasis
                    on
                    total
                    development of personality of
                    its pupils. Silver Stone Public School came into existence in the year 2010 and will
                    wonderful
                    progress. It has become a full
                    fledged tree blossoming in full swing, spreading its fragrance. The English medium co-
                    educational.
                    Get a quick glimpse of our hardwork and dedication to
                    further the education of students.
                    </p>
                    <a href="about_us.aspx" class="mt-0">Read More</a>
                </div>
            </div>
        </div>
    </section>

<section class="education">
    <div class="container">
    <div class="row">
    <div class="col-12 text-center">
    <div class="sub-heading color1 wow fadeInDown"></div>
    <div class="heading1 color1 wow fadeInUp">Awards & Accolades</div>
    </div>
    </div>
    <div class="row mt-4">
    <div class="col-12 wow fadeInUp delay-02">
    <div class="awards-slider owl-carousel owl-theme">
    
    <div class="item mb-4 animated wow fadeIn">
    <a href="awards-achievements.html">
    <img src="img/building.JPG" class="img-fluid">
    <div class="overlay color5 title-overlay px-3">
    
    <h6 class="text-white">Times Education Icons</h6>
    <h5 class="text-white">Silver Stone Public School Group of Schools awarded by Times Education</h5>
    </div></a>
    </div>
    
    <div class="item mb-4 animated wow fadeIn">
    <a href="awards-achievements.html">
    <img src="img/building.JPG" class="img-fluid">
    <div class="overlay color5 title-overlay px-3">
    
    <h6 class="text-white">School Survey Award</h6>
    <h5 class="text-white">We have been awarded the title of Top Emerging School in Bahjoi</h5>
    </div></a>
    </div>
    
    <div class="item mb-4 animated wow fadeIn">
    <a href="awards-achievements.html">
    <img src="img/building.JPG"class="img-fluid">
    <div class="overlay color5 title-overlay px-3">
    
    <h6 class="text-white">Silver Stone Public School Group of Schools</h6>
    <h5 class="text-white">One of the Best Brands – 2023</h5>
    </div></a>
    </div>
    
    <div class="item mb-4 animated wow fadeIn">
    <a href="awards-achievements.html">
    <img src="img/building.JPG" class="img-fluid">
    <div class="overlay color5 title-overlay px-3">
    
    <h6 class="text-white">Excellence in Education</h6>
    <h5 class="text-white">Award for Silver Stone Public School Rise Nashik</h5>
    </div></a>
    </div>
    
    <div class="item mb-4 animated wow fadeIn">
    <a href="awards-achievements.html">
    <img src="img/building.JPG" class="img-fluid">
    <div class="overlay color5 title-overlay px-3">
    
    <h6 class="text-white">Proudly Ranked 4th in India</h6>
    <h5 class="text-white">by Education World</h5>
    </div></a>
    </div>
    
    <div class="item mb-4 animated wow fadeIn">
    <a href="awards-achievements.html">
    <img src="img/building.JPG"  class="img-fluid">
    <div class="overlay color5 title-overlay px-3">
    
    <h6 class="text-white">Eldrok India K-12 Summit, Mumbai</h6>
    <h5 class="text-white">Award for Silver Stone Public School Group of Schools</h5>
    </div></a>
    </div>
    </div>
    </div>
    </div>
    <div class="row mt-4">
    <div class="col-12 text-center">
    <a href="awards-achievements.html" class="btn btn-outline-primary wow fadeInUp">VIEW MORE</a>
    </div>
    </div>
    </div>
    </section>




  
 <?php   include('footer.php');?>