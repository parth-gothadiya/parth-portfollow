// import React from 'react'
// import { useEffect } from "react";
// import { motion, stagger, useAnimate } from "motion/react";
// // import { cn } from "@/lib/utils";

const About = () => {
  
  return (
    <article className="about  active" data-page="about">

      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm Creative Video Editor from Surat, In addition to my technical skills,
          I stay updated on the latest trends and techniques in video editing.
          This allows me to incorporate fresh ideas that not only meet but exceed client expectations. I’m not just an editor;
          I’m a storyteller at heart, driven by the desire to create content that leaves a lasting impact.
        </p>

        <p>
          Collaboration is at the heart of my process. I believe that the best projects come from open communication and understanding client visions.
          Whether working with brands or individual creators, I prioritize their goals and bring their ideas to life through meticulous editing.

          I also understand the importance of deadlines in this fast-paced environment.
          My organizational skills enable me to manage multiple projects simultaneously without compromising quality.
          I take pride in my ability to adapt quickly and deliver results that exceed expectations.

        </p>
      </section>




      <section className="service">

        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">

          <li className="service-item">

            <div className="service-icon-box">
              <img src="/images/icon-design.svg
                " alt="design icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Video Editing </h4>

              <p className="service-item-text">
                The most modern and high-quality Video made at a professional level.
              </p>
            </div>

          </li>

          <li className="service-item">

            <div className="service-icon-box">
              <img src="/images/icon-dev.svg" alt="Web development icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>

              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>

          </li>

          <li className="service-item">

            <div className="service-icon-box">
              <img src="/images/icon-app.svg" alt="mobile app icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">freelancing</h4>

              <p className="service-item-text">
                The most modern and Freelancing Video made at a professional Work.
              </p>
            </div>

          </li>

          <li className="service-item">

            <div className="service-icon-box">
              <img src="/images/icon-photo.svg" alt="camera icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Photography</h4>

              <p className="service-item-text">
                I make high-quality photos of any category at a professional level.
              </p>
            </div>

          </li>

        </ul>

      </section>

      <section className="testimonials">

        <h3 className="h3 testimonials-title">Client Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>

              <figure className="testimonials-avatar-box">
                <img src="/images/avatar-1.png" alt="Amit Sharma" width="60" data-testimonials-avatar />
              </figure>

              <h4 className="h4 testimonials-item-title" data-testimonials-title>Amit Sharma</h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  “Absolutely outstanding! The editing quality was cinematic, and every transition felt natural.
                  My brand’s Instagram reels have doubled in engagement since we started working together.”
                </p>
              </div>

            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>

              <figure className="testimonials-avatar-box">
                <img src="/images/avatar-2.png" alt="Divya Rathi" width="60" data-testimonials-avatar />
              </figure>

              <h4 className="h4 testimonials-item-title" data-testimonials-title>Divya Rathi</h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  “Fast, creative, and professional. Turned my raw wedding footage into a beautiful story
                  that made everyone emotional. Highly recommended for anyone looking for a top-class editor .”
                </p>
              </div>

            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>

              <figure className="testimonials-avatar-box">
                <img src="/images/avatar-3.png" alt="Priya Mehta" width="60" data-testimonials-avatar />
              </figure>

              <h4 className="h4 testimonials-item-title" data-testimonials-title>Priya Mehta</h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  “I hired them for my startup’s promo video, and the results were beyond expectations.
                  Crisp visuals, perfect pacing, and the music selection was spot on. This is creative editing at its best.”
                </p>
              </div>

            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>

              <figure className="testimonials-avatar-box">
                <img src="/images/avatar-4.png" alt="Nikuj Patel" width="60" data-testimonials-avatar />
              </figure>

              <h4 className="h4 testimonials-item-title" data-testimonials-title>Nikuj Patel</h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  “From YouTube content to product videos, every project is delivered on time and looks
                  stunning. My sales videos now convert 3x better thanks to the clean editing style.”
                </p>
              </div>

            </div>
          </li>

        </ul>

      </section>

      <section className="clients">

        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">

          <li className="clients-item ws-2">
            <a href="/">
              <img src="https://res.cloudinary.com/dg4xzeevq/image/upload/v1754656088/ZIBRISH_LOGO_qk65gc.png" alt="Logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="/">
              <img src="https://res.cloudinary.com/dg4xzeevq/image/upload/v1754655566/LONG-D_LOGO_lbb7xj.png" alt="Logo"></img>
            </a>
          </li>

          <li className="clients-item pt-2">
            <a href="/">
              <img src="https://res.cloudinary.com/dg4xzeevq/image/upload/v1754656136/curigen_kzy3vu.png" alt="Logo"></img>
            </a>
          </li>

          <li className="clients-item  pt-5">
            <a href="/">
              <img src="https://res.cloudinary.com/dg4xzeevq/image/upload/v1754655566/Merena_Logo_cxq9sy.png" alt="Logo"></img>
            </a>
          </li>

          <li className="clients-item">
            <a href="/">
              <img src="https://res.cloudinary.com/dg4xzeevq/image/upload/v1754655564/Logo_Png_pvayqt.png" alt="Logo"></img>
            </a>
          </li>

          <li className="clients-item">
            <a href="/">
              <img src="https://res.cloudinary.com/dg4xzeevq/image/upload/v1754655564/logo-3-color_fshanp.png" alt="Logo" />
            </a>
          </li>

        </ul>
    
      </section>

    </article>
  )
}

export default About
