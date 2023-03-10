import React from 'react'
import ImgBgFooter from '../images/bg-footer.png'

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-py-60">
            <div className="row">
              <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2 text-center text-lg-start">
                <h2 className='fw-bold'>TLab Amazing</h2>
                <h2 className='fw-bold'>Delivering Innovation</h2>

                <ul className="list-unstyled social-wrap my-4">
                  <li className="list-inline-item">
                    <a href="#!" onClick={(e) => e.preventDefault()}>
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1807_1391)">
                          <path d="M17.2137 13.5208L17.8356 9.42564H13.9452V6.76933C13.9452 5.6487 14.4877 4.55574 16.2301 4.55574H18V1.06933C18 1.06933 16.3945 0.792633 14.8603 0.792633C11.6548 0.792633 9.56164 2.75443 9.56164 6.30448V9.42564H6V13.5208H9.56164V23.4211C10.2767 23.5345 11.0082 23.5926 11.7534 23.5926C12.4986 23.5926 13.2301 23.5345 13.9452 23.4211V13.5208H17.2137Z" fill="#5A5A5A" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1807_1391">
                            <rect width="24" height="24" fill="white" transform="translate(0 0.192627)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" onClick={(e) => e.preventDefault()}>
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1807_1387)">
                          <path d="M12 2.35539C15.206 2.35539 15.5824 2.36968 16.8496 2.42685C18.0215 2.47925 18.655 2.67456 19.079 2.8413C19.6411 3.06043 20.0413 3.31768 20.4605 3.73689C20.8797 4.1561 21.1417 4.55626 21.3561 5.11839C21.5181 5.54237 21.7182 6.17595 21.7706 7.34785C21.8277 8.61502 21.842 8.99135 21.842 12.1974C21.842 15.4034 21.8277 15.7798 21.7706 17.0469C21.7182 18.2188 21.5228 18.8524 21.3561 19.2764C21.137 19.8385 20.8797 20.2387 20.4605 20.6579C20.0413 21.0771 19.6411 21.3391 19.079 21.5535C18.655 21.7155 18.0215 21.9155 16.8496 21.9679C15.5824 22.0251 15.206 22.0394 12 22.0394C8.79397 22.0394 8.41763 22.0251 7.15046 21.9679C5.97857 21.9155 5.34498 21.7202 4.921 21.5535C4.35888 21.3343 3.95872 21.0771 3.5395 20.6579C3.12029 20.2387 2.85828 19.8385 2.64391 19.2764C2.48194 18.8524 2.28186 18.2188 2.22946 17.0469C2.17229 15.7798 2.158 15.4034 2.158 12.1974C2.158 8.99135 2.17229 8.61502 2.22946 7.34785C2.28186 6.17595 2.47718 5.54237 2.64391 5.11839C2.86304 4.55626 3.12029 4.1561 3.5395 3.73689C3.95872 3.31768 4.35888 3.05567 4.921 2.8413C5.34498 2.67933 5.97857 2.47925 7.15046 2.42685C8.41763 2.36492 8.79874 2.35539 12 2.35539ZM12 0.192627C8.74157 0.192627 8.33188 0.206918 7.05042 0.264084C5.77372 0.321249 4.90195 0.526093 4.13974 0.821448C3.34895 1.12633 2.68202 1.54078 2.01509 2.20771C1.34816 2.87464 0.938468 3.54634 0.628821 4.33236C0.333466 5.09457 0.128623 5.96635 0.071457 7.24781C0.0142914 8.5245 0 8.93419 0 12.1926C0 15.4511 0.0142914 15.8607 0.071457 17.1422C0.128623 18.4189 0.333466 19.2907 0.628821 20.0577C0.933705 20.8484 1.34816 21.5154 2.01509 22.1823C2.68202 22.8492 3.35371 23.2589 4.13974 23.5686C4.90195 23.8639 5.77372 24.0688 7.05519 24.1259C8.33665 24.1831 8.74157 24.1974 12.0048 24.1974C15.268 24.1974 15.6729 24.1831 16.9544 24.1259C18.2311 24.0688 19.1028 23.8639 19.8698 23.5686C20.6606 23.2637 21.3275 22.8492 21.9945 22.1823C22.6614 21.5154 23.0711 20.8437 23.3807 20.0577C23.6761 19.2954 23.8809 18.4237 23.9381 17.1422C23.9953 15.8607 24.0095 15.4558 24.0095 12.1926C24.0095 8.92943 23.9953 8.5245 23.9381 7.24304C23.8809 5.96635 23.6761 5.09457 23.3807 4.3276C23.0758 3.53681 22.6614 2.86988 21.9945 2.20295C21.3275 1.53602 20.6558 1.12633 19.8698 0.816684C19.1076 0.521329 18.2358 0.316486 16.9544 0.25932C15.6681 0.206918 15.2584 0.192627 12 0.192627Z" fill="#5A5A5A" />
                          <path d="M12 2.35539C15.206 2.35539 15.5824 2.36968 16.8496 2.42685C18.0215 2.47925 18.655 2.67456 19.079 2.8413C19.6411 3.06043 20.0413 3.31768 20.4605 3.73689C20.8797 4.1561 21.1417 4.55626 21.3561 5.11839C21.5181 5.54237 21.7182 6.17595 21.7706 7.34785C21.8277 8.61502 21.842 8.99135 21.842 12.1974C21.842 15.4034 21.8277 15.7798 21.7706 17.0469C21.7182 18.2188 21.5228 18.8524 21.3561 19.2764C21.137 19.8385 20.8797 20.2387 20.4605 20.6579C20.0413 21.0771 19.6411 21.3391 19.079 21.5535C18.655 21.7155 18.0215 21.9155 16.8496 21.9679C15.5824 22.0251 15.206 22.0394 12 22.0394C8.79397 22.0394 8.41763 22.0251 7.15046 21.9679C5.97857 21.9155 5.34498 21.7202 4.921 21.5535C4.35888 21.3343 3.95872 21.0771 3.5395 20.6579C3.12029 20.2387 2.85828 19.8385 2.64391 19.2764C2.48194 18.8524 2.28186 18.2188 2.22946 17.0469C2.17229 15.7798 2.158 15.4034 2.158 12.1974C2.158 8.99135 2.17229 8.61502 2.22946 7.34785C2.28186 6.17595 2.47718 5.54237 2.64391 5.11839C2.86304 4.55626 3.12029 4.1561 3.5395 3.73689C3.95872 3.31768 4.35888 3.05567 4.921 2.8413C5.34498 2.67933 5.97857 2.47925 7.15046 2.42685C8.41763 2.36492 8.79874 2.35539 12 2.35539Z" fill="#5A5A5A" />
                          <path d="M12 6.03305C8.59863 6.03305 5.83563 8.79129 5.83563 12.1974C5.83563 15.6035 8.59387 18.3617 12 18.3617C15.4061 18.3617 18.1643 15.6035 18.1643 12.1974C18.1643 8.79129 15.4061 6.03305 12 6.03305ZM12 16.1942C9.78958 16.1942 7.99839 14.403 7.99839 12.1926C7.99839 9.98223 9.78958 8.19105 12 8.19105C14.2104 8.19105 16.0016 9.98223 16.0016 12.1926C16.0016 14.403 14.2104 16.1942 12 16.1942Z" fill="white" />
                          <path d="M18.4073 7.22398C19.2018 7.22398 19.846 6.57987 19.846 5.78532C19.846 4.99076 19.2018 4.34665 18.4073 4.34665C17.6127 4.34665 16.9686 4.99076 16.9686 5.78532C16.9686 6.57987 17.6127 7.22398 18.4073 7.22398Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1807_1387">
                            <rect width="24" height="24" fill="white" transform="translate(0 0.192627)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" onClick={(e) => e.preventDefault()}>
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.5057 6.42195C23.2289 5.39394 22.4184 4.5834 21.3904 4.30663C19.5123 3.79263 11.9999 3.79263 11.9999 3.79263C11.9999 3.79263 4.48762 3.79263 2.60954 4.28686C1.60131 4.56363 0.771002 5.39394 0.494232 6.42195C0 8.30003 0 12.1946 0 12.1946C0 12.1946 0 16.1089 0.494232 17.9672C0.771002 18.9952 1.58154 19.8057 2.60954 20.0825C4.50739 20.5965 11.9999 20.5965 11.9999 20.5965C11.9999 20.5965 19.5123 20.5965 21.3904 20.1023C22.4184 19.8255 23.2289 19.015 23.5057 17.987C23.9999 16.1089 23.9999 12.2143 23.9999 12.2143C23.9999 12.2143 24.0197 8.30003 23.5057 6.42195Z" fill="#5A5A5A" />
                        <path d="M9.60788 15.7926L15.855 12.1946L9.60788 8.59656V15.7926Z" fill="white" />
                      </svg>
                    </a>
                  </li>
                </ul>

                <span className='copyright'>2010 - 2021 ?? TLab. All rights reserved.</span>
              </div>

              <div className="col-lg-2 col-md-4 col-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 className="footer-head mb-4">Company</h5>
                <ul className="list-unstyled footer-list">
                  <li><a href="#" className="text-foot">About</a></li>
                  <li><a href="#" className="text-foot">Career</a></li>
                  <li><a href="#" className="text-foot">Clients</a></li>
                  <li><a href="#" className="text-foot">Logo</a></li>
                  <li><a href="#" className="text-foot">Brand Identity</a></li>
                  <li><a href="#" className="text-foot">Article</a></li>
                  <li><a href="#" className="text-foot">Studi Kasus</a></li>
                  <li><a href="#" className="text-foot">Kontak</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-4 col-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 className="footer-head mb-4">Layanan</h5>
                <ul className="list-unstyled footer-list">
                  <li><a href="#" className="text-foot">IT Managed Services</a></li>
                  <li><a href="#" className="text-foot">IT Consultant</a></li>
                  <li><a href="#" className="text-foot">IT Training</a></li>
                  <li><a href="#" className="text-foot">Big Data</a></li>
                  <li><a href="#" className="text-foot">Artificial Intelligence</a></li>
                  <li><a href="#" className="text-foot">Cloud Computing</a></li>
                  <li><a href="#" className="text-foot">Internet of Things</a></li>
                  <li><a href="#" className="text-foot">Web Development</a></li>
                  <li><a href="#" className="text-foot">Mobile App Development</a></li>
                  <li><a href="#" className="text-foot">System Integration</a></li>
                  <li><a href="#" className="text-foot">System Information</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="brand-name mb-4 mb-lg-5">
                  <h5 className="footer-head mb-4">Kontak</h5>
                  <h6 className="">PT. Teknologi Kode Indonesia</h6>
                  <h6 className="">contact@tlab.co.id</h6>
                </div>

                <div className="mb-4 mb-lg-5">
                  <h6>Head Office</h6>
                  <p>Jl Tanjung No.126, Sorosutan, Umbulharjo, Yogyakarta - 55162</p>

                  <div className="d-flex gap-2 align-items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.39999 3.60002C2.39999 2.93728 2.93725 2.40002 3.59999 2.40002H6.18344C6.77005 2.40002 7.27068 2.82412 7.36711 3.40275L8.25429 8.72579C8.3409 9.24543 8.07846 9.76079 7.60727 9.99639L5.74951 10.9253C7.08906 14.254 9.74601 16.911 13.0747 18.2505L14.0036 16.3927C14.2392 15.9216 14.7546 15.6591 15.2742 15.7457L20.5973 16.6329C21.1759 16.7293 21.6 17.23 21.6 17.8166V20.4C21.6 21.0628 21.0627 21.6 20.4 21.6H18C9.38435 21.6 2.39999 14.6157 2.39999 6.00002V3.60002Z" fill="#5A5A5A" />
                    </svg>

                    <p className='mb-0'>(0274) - 2870394</p>
                  </div>
                </div>

                <div className="mb-4 mb-lg-5">
                  <h6>Jakarta Office</h6>
                  <p>SOHO Pancoran Unit S-1210 Jl. Let. Jend. MT. Haryono Kav 2-3 Pancoran, Jakarta Selatan 12810</p>

                  <div className="d-flex gap-2 align-items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.39999 3.60002C2.39999 2.93728 2.93725 2.40002 3.59999 2.40002H6.18344C6.77005 2.40002 7.27068 2.82412 7.36711 3.40275L8.25429 8.72579C8.3409 9.24543 8.07846 9.76079 7.60727 9.99639L5.74951 10.9253C7.08906 14.254 9.74601 16.911 13.0747 18.2505L14.0036 16.3927C14.2392 15.9216 14.7546 15.6591 15.2742 15.7457L20.5973 16.6329C21.1759 16.7293 21.6 17.23 21.6 17.8166V20.4C21.6 21.0628 21.0627 21.6 20.4 21.6H18C9.38435 21.6 2.39999 14.6157 2.39999 6.00002V3.60002Z" fill="#5A5A5A" />
                    </svg>

                    <p className='mb-0'>(0274) - 2870394</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img className='img-bg-footer' src={ImgBgFooter} alt="img-bg-footer"/>
      </footer>
    </>
  )
}

export default Footer