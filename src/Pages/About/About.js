import React from 'react';
import aboutBanner from './about-banner.jpg'
import OurLeader from './OurLeader';

const About = () => {
    return (
        <div>
            <div>
                <img src={aboutBanner} alt="" />
            </div>
            <div className='bg-blue-700 text-slate-200	 '>
                <div className='w-11/12 mx-auto md:p-10'>
                    <div className='text-center '>
                        <h1 className='text-3xl font-semibold mb-3'>About Us</h1>
                        <p className='leading-loose'>promise Hospitals is a multi-specialty hospital in India that has transformed patient care and experiences beyond boundaries by providing innovative treatment, cutting-edge infrastructure, and an unwavering dedication to clinical excellence. We deliver best-in-class comprehensive super-speciality healthcare for patients arriving from all over the world. Our wide array of international patient services makes it simpler for you to get expert care. Our experts will provide you with the best treatment and quality care possible, making your stay more comfortable during your treatment. promise Hospitals is a leading multi-speciality healthcare facility in India, serving both national and international patients. With a network of 28+ hospitals and more than 7600 operational beds, our commitment to the overall well-being of an individual is at the core of everything we do. We deliver quality healthcare services to everyone through our network of hospitals and knowledgeable team of medical professionals.</p>
                    </div>

                    <div className='text-center mt-12'>
                        <h1 className='text-3xl font-semibold mb-3'>Our Core Values</h1>
                        <p className='leading-loose'>At promise Hospitals, we are committed to clinical quality, patient-centricity, and ethical standards. The high caliber of our team of medical practitioners demonstrates our dedication to clinical excellence. We have a team of experienced nursing staff and paramedical specialists who provide great support to our clinical team. Our medical services are customized to our patient's requirements. We offer a compassionate and supportive environment for patients and their caregivers. We attach the highest importance to ethical practices which is evident in our professional conduct, honesty, trust, and confidentiality. At promise Hospitals, we are committed to clinical excellence, patient-centricity, and ethical practices. The high calibre of our team of medical practitioners demonstrates our dedication to clinical excellence. We have a team of experienced nursing staff and paramedical specialists who provide great support to our clinical team. Our medical services are customized to our patient's requirements. We offer a compassionate and supportive environment for patients and their caregivers. We attach the highest importance to ethical practices which is evident in our professional conduct, honesty, trust, and confidentiality. promise Hospital provides unparalleled clinical excellence and a positive patient experience to its national and international patients. promise Hospitals Global is one of the top multi-specialty hospitals in India, well-equipped with advanced medical appliances and the latest technology available for different procedures and treatments. We strive to create a unique environment with outstanding facilities, courteous staff, and cutting-edge medical procedures.</p>
                    </div>
                </div>
            </div>
            <OurLeader></OurLeader>
        </div>
    );
};

export default About;


{/* <style>
body{
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: black;
    overflow: hidden;
}

.slide-container {
    width: 100%;
    height:85vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    background-color: rgb(110, 110, 250);
}

.image-slider{
    width: 100%;
    height: 600px;
    position: absolute;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s;
}

.slides-div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 30px;
}

.img{
    position: relative;
    width: 240px;
    height: 370px;
    transition: 0.5s;
}

.button {
    position: absolute;
    width: 240px;
    height: 370px;
    transition: 0.5s;
    background-color: rgba(67, 67, 151, 0.2);
}

#slider-span1:target ~ .image-slider #img1,
#slider-span1:target ~.image-slider #button-1{
    width:380px;
    height: 585px;
    background-color: transparent;
}
#slider-span2:target ~ .image-slider #img2,
#slider-span2:target ~.image-slider #button-2{
    width:380px;
    height: 585px;
    background-color: transparent;
}
#slider-span3:target ~ .image-slider #img3,
#slider-span3:target ~.image-slider #button-3{
    width:380px;
    height: 585px;
    background-color: transparent;
}

#slider-span1:target ~.image-slider{
    left:20%;
}
#slider-span2:target ~.image-slider{
    left:0%;
}
#slider-span3:target ~.image-slider{
    left:-20%;
}
</style>
</head>
<body>
<div class="slide-container">
<span class="slider-span" id="slider-span1"></span>
<span class="slider-span" id="slider-span2"></span>
<span class="slider-span" id="slider-span3"></span>

<div class="image-slider">
    <div class="slides-div" id="slide-1">
        <img src="images/headset.jpg" alt="" class="img" id="img1">
        <a href="#slider-span1" class="button" id="button-1"></a>
    </div>
    <div class="slides-div" id="slide-2">
        <img src="images/headset.jpg" alt="" class="img" id="img2">
        <a href="#slider-span2" class="button" id="button-2"></a>
    </div>
    <div class="slides-div" id="slide-3">
        <img src="images/headset.jpg" alt="" class="img" id="img3">
        <a href="#slider-span3" class="button" id="button-3"></a>
    </div>
</div>
</div> */}