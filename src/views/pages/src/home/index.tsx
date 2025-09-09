import React from 'react'
import { MainLayout } from '../../../layout'
import images from '../../../../assets/images'

const HomePage = () => {
  const {image1, image2, image3, image4} = images
  return (
    <MainLayout title=''>
      <section className='tt-home'>
        <section className='tt-home-hero'>
          <div className='tt-home-hero__content tt-home-hero-content'>
            <p>Innovative technology solutions tailored for you Empower your business with digital excellence.</p>
            <div className='tt-home-hero-content__container'>
              <div className='tt-home-hero-content__image'>
                <img src={image4} alt="hero" />
              </div>
              <ul className='tt-home-hero-content__socials'>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://www.google.com">
                  Instagram
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://www.google.com">
                  Facebook
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://www.google.com">
                  X
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://www.google.com">
                  Pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='tt-home-hero__title tt-home-hero-content-title'>
            <h1>
              <span>Crafting imagination</span>
              <span className='tt-home-hero-content-title__image'>
                <img src={image1} alt="title-i" />
              </span>
              <span>into</span>
              <span className='tt-home-hero-content-title__image'>
                <img src={image2} alt="title-i" />
              </span>
              <span>reality with</span>
              <span className='tt-home-hero-content-title__image'>
                <img src={image3} alt="title-i" />
              </span>
              <span>passion, precision, and creativity</span>
            </h1>
            <p>Transforming ideas into impactful solutions. Elevate your brand with our expertise.</p>
          </div>
        </section>
      </section>
    </MainLayout>
  )
}

export default HomePage