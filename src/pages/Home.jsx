import React from 'react'
import Main from '../components/Main/Main'
import Counter from '../components/Counter/Counter'
import Header from '../components/Headers/Header'
import Banner from '../components/Banner/Banner'
import Banner1 from '../assets/Banner1.png'
import Testimonials from '../components/Testimonials/Testimonials'
import About from '../components/About/About'
import Pricing from '../components/Pricing/Pricing'
import Banner2 from '../components/Banner/Banner2'
import Footer from '../components/Footer/Footer'
import FAQ from '../components/FAQ/Faq'
import Blogs from '../components/Blog/Blogs'
import Certificates from '../components/Certificates/Certificates'
import { Gallery } from '../components/Gallery/Gallery'
import Trainers from '../components/Trainers/Trainers'
import Contact from '../components/Contact/Contact'

const Home = () => {
  return (
    <div>
      <Main/>
      <Counter/>
      <div id="about">
        <About/>
      </div>
      <Header text1="Inspired to" text2="Inspire Your Best Self" text3="We're Your Partner In Achieving In Healtier, Stronger, And More Confident You." />
      <Banner bannerimg = {Banner1}/>
      <Header text1="Our Achievements," text2="Medals & Certificates" text3="Discover the awards and certifications our gym and trainers have achieved over the years." />
      <Certificates/>
      <div id="gallery">
      <Header text1="Experience" text2="Fitness Like Never Before" text3="Transform The Way You Train With Innovative Workouts, Expert Guidance, And State Of The ArtFacilities." />
        <Gallery/>
      </div>
      <div id="testimonials">
      <Header text1="Your Success" text2="Stories, Our Insipiration" text3="See How Our Members Have Achieved Their Goals And Let Their Journeys Inspire Yours!" />
        <Testimonials/>
      </div>
      <div id="trainers">
        <Trainers/>
      </div>
      <div id="pricing">
        <Header text1="Train Smarter" text2="Unleash Your Potential" text3="Unlock Your Full Potential With Our Expertly Designed Courses, Tailored To Help You Maximize Result In Less Time. See Our Below Plans and Choose An Affordable Plan That’s Packed With The Best Features For Your Tarining." />
        <Pricing />
      </div>
      <div id="blogs">
      <Header text1="Stay Informed With" text2="Health Tips & Blogs" text3="Read our latest health tips and blogs to stay informed and motivated on your fitness journey." />
        <Blogs/>
      </div>
      <div id="contact">
      <Header text1="Get in Touch" text2="With Us" text3="Reach out to us via the contact form or WhatsApp for any inquiries or support." />
        <Contact/>
      </div>
      <div id="faq">
      <Header text1="FAQ" text2="Your Solutions" text3="Find answers to the most commonly asked questions about our gym and services." />
        <FAQ/>
      </div>
      <Banner2/>
      <Footer/>
    </div>
  )
}

export default Home