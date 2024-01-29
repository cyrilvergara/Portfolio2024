//Portfolio | Cyril Vergara | 301324609 | January 28, 2024
import { FaFacebookF, FaPlay } from "react-icons/fa";
import HeroImg from "../assets/dev.jpg";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin, TiSocialInstagram } from "react-icons/ti";
import { cards } from "../utils/Data";
import { v4 as uuid } from "uuid";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import "./home.css";
import Card from "../components/card/Card";

import Portfolio1 from "../assets/ecommerce.png";
import Portfolio2 from "../assets/restoapp.png";
import Portfolio3 from "../assets/uberapp.png";
import Contact from "../components/contact/Contact";

const Home = () => {
  const skillRef = useRef(null);
  const swiperRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateProgressbar();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(skillRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    register();

    const params = {
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
  }, []);

  const animateProgressbar = () => {
    const progressBars = document.querySelectorAll(".skill__progress-line");

    progressBars.forEach((progressBar) => {
      const percent = progressBar.getAttribute("data-width");
      progressBar.style.width = `${percent}%`;
    });
  };
  return (
    <div className="container home">
      <section className="hero-section" id="home">
        <div className="hero-section__left">
          <div className="hero-section__special-text">
            I am Cy! <br />
          </div>
          <div className="hero-section__paragraph">
            <h2>Full Stack Developer</h2>
            <h4>
              As a solution-driven Full-Stack Developer, <br />I'm passionate about
              crafting digital experiences, <br /> fueled by a lifelong
              love for technology, <br /> a satisfaction in overcoming challenges, <br /> and
              a motivation to positively impact individuals' <br /> lives and the world
              through software.
            </h4>
          </div>
          <a
            href="/CyrilVergaraResume.pdf"
            download="CyrilVergaraResume.pdf"
            className="button"
          >
            Resume
          </a>

          {/* <div className='video-link'>
						<div className='link'>
							<a href='https://youtu.be/m4MDt7UUu1w?si=MTugFpitro7vF1t5'>
								<FaPlay />
							</a>
						</div>
						<span>Video Link</span>
					</div> */}
        </div>
        <div className="hero-section__right">
          <div className="hero-section__image">
            <img src={HeroImg} alt="hero image" />
            {/* <div className='hero-section__image-half-round-shape'></div> */}
            <div className="social-links">
              {/* <a href=''>
								<FaFacebookF />
							</a>
							<a href=''>
								<FaXTwitter />
							</a>
							<a href=''>
								<TiSocialLinkedin />
							</a>
							<a href=''>
								<TiSocialInstagram />
							</a> */}
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h3 className="section__label"> <br /><br /><br /> About Me</h3>
        <h2 className="section__title">Experience and Education</h2>
        <div className="cards">
          {cards?.map((card) => (
            <Card
              key={uuid()}
              icon={card?.icon}
              title={card?.title}
              features={card?.features}
            />
          ))}
        </div>
      </section>

      <section className="services" id="services" ref={skillRef}>
        <h3 className="section__label">Services</h3>
        <h2 className=" section__title">What do I offer?</h2>
        <div className="testimonials__wrapper">
          <swiper-container speed="500" ref={swiperRef} css-mode="true">
            <swiper-slide>
              <div className="testimonials__card">
                <div className="testimonials__text">
                  1. Web Development <br />
                  2. Mobile App Development <br />
                  3. Software Development <br />
                  4. E-commerce Solutions <br />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="testimonials__card">
                <div className="testimonials__text">
                  5. Database Management <br />
                  6. UX/UI Design <br />
                  7. Software QA Testing <br />
                  8. Consulting <br />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="testimonials__card">
                <div className="testimonials__text">
                  9. Freelance Development <br />
                  10. CMS <br />
                  11. Project Management <br />
                  12. Business Analyst <br />
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </section>

      <section className="projects" id="projects">
        <h3 className="section__label">Projects</h3>
        <h2 className="section__title">Some of my projects</h2>

        <div className="portfolio__grid">
          <div className="portfolio__card">
            <img src={Portfolio1} alt="portfolio 1" />
            <div className="portfolio__card-title">eCommerce Website</div>
          </div>
          <div className="portfolio__card">
            <img src={Portfolio2} alt="portfolio 2" />
            <div className="portfolio__card-title">Restaurant App</div>
          </div>
          <div className="portfolio__card">
            <img src={Portfolio3} alt="portfolio 3" />
            <div className="portfolio__card-title">UX/UI Design</div>
          </div>
          {/* <div className="portfolio__card">
            <img src={Portfolio4} alt="portfolio 4" />
            <div className="portfolio__card-title">Portfolio 4</div>
          </div>
          <div className="portfolio__card">
            <img src={Portfolio3} alt="portfolio 5" />
            <div className="portfolio__card-title">Portfolio 5</div>
          </div>
          <div className="portfolio__card">
            <img src={Portfolio1} alt="portfolio 6" />
            <div className="portfolio__card-title">Portfolio 6</div>
          </div> */}
        </div>
      </section>

      {/* <section className="testimonials" id="testimonials">
        <h3 className="section__label">Testimonials</h3>
        <h2 className=" section__title">Satisfied Clients Say</h2>
        <div className="testimonials__wrapper">
          <swiper-container speed="500" ref={swiperRef} css-mode="true">
            <swiper-slide>
              <div className="testimonials__card">
                <div className="testimonials__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus, enim.
                </div>
                <div className="testimonials__author">Blake</div>
                <div className="testimonials__author-title">
                  CEO Carrington Atlantic
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="testimonials__card">
                <div className="testimonials__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus, enim.
                </div>
                <div className="testimonials__author">Fallon</div>
                <div className="testimonials__author-title">
                  CEO Fallon Unlimited
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="testimonials__card">
                <div className="testimonials__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus, enim.
                </div>
                <div className="testimonials__author">Sam</div>
                <div className="testimonials__author-title">CEO Van Kirk</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="testimonials__card">
                <div className="testimonials__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus, enim.
                </div>
                <div className="testimonials__author">Steven</div>
                <div className="testimonials__author-title">
                  CEO carrington foundation
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="testimonials__card">
                <div className="testimonials__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus, enim.
                </div>
                <div className="testimonials__author">Steve</div>
                <div className="testimonials__author-title">CEO Dan Joe</div>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </section> */}

      
      <div className="contact" id="contact">
        <h3 className='section__label'> <br /><br /> Contact</h3>
        <h2 className=" section__title">Connect with me!</h2>

        <Contact />
      </div>
    </div>
  );
};

export default Home;
