// import dynamic from 'next/dynamic';
import Script from "next/script";
// import About from '../src/components/About';
// import Blog from '../src/components/Blog';
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
// import Resume from '../src/components/Resume';
// import AboutMe from '../src/components/sections/AboutMe';
//import BlogSection from '../src/components/sections/Blog';
// import Clients from '../src/components/sections/Clients';
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
// import FunFact from '../src/components/sections/FunFact';
//import Pricing from "../src/components/sections/Pricing";
// import Quote from '../src/components/sections/Quote';
// import ResumeSection from '../src/components/sections/Resume';
// import Services from '../src/components/sections/Services';
// import Skills from '../src/components/sections/Skills';
// import Testimonials from '../src/components/sections/Testimonials';
// import TypingAnimation from '../src/components/TypingAnimation';
// import Work from '../src/components/Work';
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
import siteMetadata from "../src/utils/siteMetaData";
import Image from "next/image";
// import { useContext } from "react";
// import Context from "../src/context/context";

// const RecentWorks = dynamic(
// 	() => import('../src/components/sections/RecentWorks'),
// 	{
// 		ssr: false,
// 	}
// );

// const bio = `<p>
// 👋 <strong>I&apos;m Lindsey</strong>, a Frontend Developer from Florida. Passionate about crafting captivating digital experiences through code, I am a skilled Frontend Web Developer with a keen eye for design & a knack for turning ideas into interactive web solutions.
// </p>`;

// const services = [
// 	{
// 		icon: 'fa fa-code',
// 		title: 'Web Development',
// 		desc: 'Can leverage my knowledge about JavaScript, HTML, CSS to create a robust & effective application.',
// 	},
// 	{
// 		icon: 'fa-brands fa-google',
// 		title: 'Digital Marketing',
// 		desc: "Strategically increases your company's visibility and creating a customized business plan for your specific needs.",
// 	},
// 	{
// 		icon: 'fa-brands fa-react',
// 		title: 'Analysis & Planning',
// 		desc: 'Someone who you can depend on to work on both the back-end and front-end of systems; with a unique perspective about business stemming from my background in Sales and Marketing Analytics.',
// 	},
// 	{
// 		icon: 'fa-solid fa-calendar',
// 		title: 'Fast Delivery',
// 		desc: 'With a nimble coding prowess & a commitment to efficiency, I specialize in delivering swift and seamless web solutions. From rapid prototyping to agile development, I ensure the fastest turnaround.',
// 	},
// ];

const animationText = ["مدیر عامل"];

const Index3 = () => {
  return (
    <Layout bg={"gradient"}>
      <Header noSideBarBtn animationText={animationText} />
      <Home>
        <Script src="https://kit.fontawesome.com/29b275fb0c.js"></Script>
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: "url(images/avatar1.jpg)" }}
          />
          {/* profile titles */}
          <div className="title" style={{marginTop:"300px"}}>شهرام پورحسین</div>

          <div className="job">مدیرعامل گروه فناوری البرزکاران پویا</div>
          {/* profile socials */}
          <div className="social">
            <a target="_blank" rel="noreferrer" href={siteMetadata.linkedin}>
              <span className="fa fa-linkedin" />
            </a>
            <a target="_blank" rel="noreferrer" href={siteMetadata.facebook}>
              <span className="fa fa-facebook" />
            </a>
            <a target="_blank" rel="noreferrer" href={siteMetadata.telegram}>
              <span className="fa fa-telegram" />
            </a>
            <a target="_blank" rel="noreferrer" href={siteMetadata.instagram}>
              <span className="fa fa-instagram" />
            </a>
          </div>
          <Image
            src="/images/logo.jpg"
            alt="akp"
            style={{ margin: "10px auto" }}
            width={80}
            height={80}
          />
          {/* profile buttons */}
          {/* <div className="lnks">
            
            <a
							target='_blank'
							rel='noreferrer'
							href='https://docs.google.com/document/d/1Ridnv_Wzk9Uo5P0ksVRLA52aEaN9lbO1/edit?usp=sharing&ouid=106707598762258660153&rtpof=true&sd=true'
							className='lnk'
						>
							<span className='text'>Download Contact</span>
							<span className='ion ion-android-download' />
						</a>
          </div> */}
        </div>
      </Home>
      <ContentContainer>
        <Contact>
          <ContactInfo />
          <ContactForm />
        </Contact>
        {/* <About>
					<AboutMe bio={bio} />
					<Services serviceList={services} />
					<Testimonials />
					<FunFact />
					<Clients />
				</About>
				<Resume>
				</Resume>
				<Work>
				</Work>
				<Blog>
				</Blog> */}
      </ContentContainer>
    </Layout>
  );
};
export default Index3;
