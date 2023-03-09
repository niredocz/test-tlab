import React from "react";
import { Link } from "react-router-dom";

import ImgHero from './images/landing/img-hero.png'
import ImgService1 from './images/landing/services/img-services-1.png'
import ImgService2 from './images/landing/services/img-services-2.png'
import ImgService3 from './images/landing/services/img-services-3.png'
import ImgTestimonial1 from './images/landing/assets-testimonial-1.png'
import ImgTestimonial2 from './images/landing/assets-testimonial-2.png'
import ImgTestimonial3 from './images/landing/assets-testimonial-3.png'
import ImgUser from './images/img-user.png'

// Client Image
import ImgGoogle from './images/landing/clients/google.png'
import ImgAnterin from './images/landing/clients/anterin.png'
import ImgGojek from './images/landing/clients/gojek.png'
import ImgGrab from './images/landing/clients/grab.png'
import ImgUber from './images/landing/clients/uber.png'
import ImgIPB from './images/landing/clients/ipb.png'
import ImgUGM from './images/landing/clients/ugm.png'
import ImgJateng from './images/landing/clients/jateng-prov.png'
import ImgJayaMotor from './images/landing/clients/jaya-motor.png'
import ImgMinistryLHK from './images/landing/clients/kementerian-lhk.png'
import ImgKesan from './images/landing/clients/kesan.png'
import ImgSuhu from './images/landing/clients/suhu.png'

const BerandaContent = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-half-100 w-100" id="company">
        <div className="container">
          <div className="row mt-5 align-items-center justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <div className="mb-4 mb-lg-5">
                  <h1 className="heading mb-4">Dapatkan solusi digital terbaik <br /> untuk mengembangkan bisnis Anda</h1>
                  <p>Jadikan bisnis semakin berkembang dengan pemilihan teknologi yang <br /> tepat dan andal</p>
                </div>

                <img className="img-fluid" src={ImgHero} alt="img-hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section bg-half-100" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-title mb-4">
                <h1 className="title">Rangkaian Proyek Menarik TLab</h1>
                <p>Integritas dan kreativitas menjadi kunci dalam membangun produk digital terbaik untuk bisnis Anda</p>
              </div>

              <div className="card-services">
                <img className="img-fluid w-100" src={ImgService2} alt="" />

                <div className="content">
                  <h6 className="mb-3">IT Managed Services</h6>
                  <h4>kesan.id - Kedaulatan Santri dan Kepribadian Muslim</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card-services mb-4">
                <img className="img-fluid w-100" src={ImgService1} alt="" />

                <div className="content">
                  <h6 className="mb-3">Application Development</h6>
                  <h4>Anterin.id <br /> Ridesharing company</h4>
                </div>
              </div>

              <div className="card-services">
                <img className="img-fluid w-100" src={ImgService3} alt="" />

                <div className="content">
                  <h6 className="mb-3">Artificial intelligence</h6>
                  <h4>Juru.id <br /> Smart Parking</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="collaborate-section" id="study-case">
        <div className="container">
          <div className="collaborate-content">
            <div className="row mb-4 mb-lg-5">
              <div className="col-md-6">
                <h2 className="fw-bold">Connect <br /> & Collaborate</h2>
              </div>
              <div className="col-md-6">
                <p className="fw-medium">Pengalaman partner TLab ketika berkolaborasi untuk menghasilkan produk terbaik</p>

                <Link className="fw-bold d-flex align-items-center gap-2" style={{ width: 'fit-content' }}>
                  Lihat Semua partner TLab 
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1.2C9 1.02319 8.92977 0.85362 8.80474 0.728595C8.67972 0.603571 8.51015 0.533333 8.33334 0.533333L3.00001 0.5C2.82319 0.5 2.65362 0.570238 2.5286 0.695262C2.40358 0.820287 2.33334 0.989856 2.33334 1.16667C2.33334 1.34348 2.40358 1.51305 2.5286 1.63807C2.65362 1.7631 2.82319 1.83333 3.00001 1.83333H6.70667L1.19334 7.36C1.13085 7.42198 1.08126 7.49571 1.04741 7.57695C1.01357 7.65819 0.99614 7.74533 0.99614 7.83333C0.99614 7.92134 1.01357 8.00848 1.04741 8.08972C1.08126 8.17096 1.13085 8.24469 1.19334 8.30667C1.25531 8.36915 1.32905 8.41875 1.41029 8.45259C1.49153 8.48644 1.57866 8.50387 1.66667 8.50387C1.75468 8.50387 1.84182 8.48644 1.92306 8.45259C2.0043 8.41875 2.07803 8.36915 2.14 8.30667L7.66667 2.78V6.5C7.66667 6.67681 7.73691 6.84638 7.86193 6.9714C7.98696 7.09643 8.15653 7.16667 8.33334 7.16667C8.51015 7.16667 8.67972 7.09643 8.80474 6.9714C8.92977 6.84638 9 6.67681 9 6.5V1.2Z" fill="#5449D6" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card-collaborate bg-blue">
                  <div className="content">
                    <div className="top-content">
                      <h4 className="fw-medium text-white">Our experience tells us it's better this way. Not only because it is more efficient – the outcome is simply much better.</h4>
                    </div>

                    <div className="bottom-content">
                      <img className="img-fluid img-user" src={ImgUser} alt="img-user" />
                      
                      <div className="user-info">
                        <h6 className="mb-2">Hamdan Hamedan</h6>
                        <span>CEO of Kesan Indonesia</span>
                      </div>
                    </div>
                  </div>

                  <img className="img-fluid w-100 bg-testimonial" src={ImgTestimonial1} alt="img-testimonial" />
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="card-collaborate bg-purple">
                  <div className="content">
                    <div className="top-content">
                      <h4 className="fw-medium text-white">Sejak akhir 2012, mulai dari konsep POS sederhana. Terus berkembang memenuhi kebutuhan. Dengan Tlab sistem dapat bertumbuh sesuai kebutuhan.</h4>
                    </div>

                    <div className="bottom-content">
                      <img className="img-fluid img-user" src={ImgUser} alt="img-user" />
                      
                      <div className="user-info">
                        <h6 className="mb-2">Hamdan Hamedan</h6>
                        <span>CEO of Kesan Indonesia</span>
                      </div>
                    </div>
                  </div>

                  <img className="img-fluid w-100 bg-testimonial" src={ImgTestimonial2} alt="img-testimonial" />
                </div>
              </div>

              <div className="col-12 col-md-6 d-md-none d-lg-block col-lg-4">
                <div className="card-collaborate bg-green">
                  <div className="content">
                    <div className="top-content">
                      <h4 className="fw-medium text-white">Kreativitas, tanggung jawab, serta komunikasi yang andal menjadi kunci kelancaran kerjasama kami bersama TLab dalam membangun aplikasi Anterin.</h4>
                    </div>

                    <div className="bottom-content">
                      <img className="img-fluid img-user" src={ImgUser} alt="img-user" />
                      
                      <div className="user-info">
                        <h6 className="mb-2">Hamdan Hamedan</h6>
                        <span>CEO of Kesan Indonesia</span>
                      </div>
                    </div>
                  </div>

                  <img className="img-fluid w-100 bg-testimonial" src={ImgTestimonial3} alt="img-testimonial" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client-section bg-50" id="data-center">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3 col-lg-2">
              <img className="img-fluid" src={ImgGoogle} alt="ImgGoogle" />
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <img className="img-fluid" src={ImgJayaMotor} alt="ImgJayaMotor" />
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <img className="img-fluid" src={ImgSuhu} alt="ImgSuhu" />
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <img className="img-fluid" src={ImgAnterin} alt="ImgAnterin" />
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <img className="img-fluid" src={ImgKesan} alt="ImgKesan" />
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <img className="img-fluid" src={ImgIPB} alt="ImgIPB" />
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <img className="img-fluid" src={ImgMinistryLHK} alt="ImgMinistryLHK" />
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <img className="img-fluid" src={ImgJateng} alt="ImgJateng" />
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <img className="img-fluid" src={ImgUGM} alt="ImgUGM" />
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <img className="img-fluid" src={ImgGojek} alt="ImgGojek" />
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <img className="img-fluid" src={ImgGrab} alt="ImgGrab" />
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <img className="img-fluid" src={ImgUber} alt="ImgUber" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BerandaContent;
