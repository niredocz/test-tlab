import React from 'react'
import ImgUser from './images/img-portofolio.png'
import BgCard from './images/bg-card.png'

const ApiContent = () => {
  return (
    <>
      <section className="bg-half-170 bg-light d-table w-100">
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="pages-heading">
                <h4 className="title mb-0">API</h4>
              </div>
            </div>
          </div>

          <div className="position-breadcrumb">
            <nav aria-label="breadcrumb" className="d-inline-block">
              <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                <li className="breadcrumb-item"><a href="index.html">Beranda</a></li>
                <li className="breadcrumb-item active" aria-current="page">API</li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-4 mb-lg-5">
            <h4>1. iFrame User Profile</h4>
            <div className="d-flex align-items-center p-4 rounded shadow position-relative" style={{maxWidth: '450px'}}>
              <div className="card-user position-relative w-100" style={{zIndex: 1}}>
                <div className="user-info d-flex align-items-center justify-content-between mb-4">
                  <img className='img-fluid img-user rounded-full' src={ImgUser} alt="img-user" />
                  <iframe allowtransparency="true" src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fdaffa-aldzakian&color=orange_white&size=64" style={{width: '70px', height: '70px'}}></iframe>
                </div>
                <h4>Daffa Aldzakian Fauzi</h4>
                <h5>Frontend Developer</h5>
              </div>

              <img className='img-fluid bg-card w-100' src={BgCard} alt="bg-card" />
            </div>
          </div>

          <div className="mb-4 mb-lg-5">
            <h4>2. iFrame Music Player Embed</h4>
            <iframe width="100%" height="300" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1012485688&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default ApiContent