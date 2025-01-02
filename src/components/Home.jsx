import React from 'react'
import Header from './commun/Header'
import Footer from './commun/Footer'
import About from '../assets/images/hero1.jpg'
import About1 from '../assets/images/hero3.jpg'
import About2 from '../assets/images/b1.jpg'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import Progre from './commun/Progre'
//import { Swiper, SwiperSlide } from 'swiper/react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
  return (
    <>
    <Header/>
   <main>
    
   <section className="section-1 ">
               <div className="hero d-flex align-items-center">
                  <div className="container-fluid">
                      <div className="text-center">
                          <h1>BIENVENUE A  New GENERATION INNOVATOR </h1>
                          <h1>Nous vous Proposons  Le deploiement  des services  informatises pour votre entrprise</h1>
                             <div className="mt-3">
                                <button className="btn mt-5"><i className="bi bi-plus"style={{ fontSize: "1.5rem" }}></i> En Savoir plus</button> 
                               
                             </div>

                      </div>
                  </div>
               </div>
            </section>

            <sction className="section-3 d-flex align-items-center">
               <div className="container text-center">
                  
               </div>
            </sction>
            
              {/*about section */}
              <section className="section-2 py-3 ">
                <div className="container py-3">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={About} alt="" className=" image w-90" />
                        </div>
                        
                        <div className="col-md-6">
                            <span className=""> AU SERVICE DES NOUVELLES TECHNOLOGIES </span>
                            <p className='mt-5'>
                               Nous somme une entreprise specialisée dans les solution informatiques pour les entreprises. Notre mission est de fournir
                                des solutions informatiques innovantes pour améliorer la productivité de nos clients, nous travaillons dans: 
                           </p> 
                        </div>

                    </div>
                </div>
              </section>
             

              <section className="section-2 py-3">
                <div className="container py-5">
                    <div className="row">

                    <div className="col-md-6">
                            <span className=""> CONCEPTION DES SITES INTERNETS PROFESSIONELS </span>
                            
                            <p className='mt-5'> avez  vous besoin de vous faire connaitre ou encore elargir votre vision et gagner de la credibilité  au pres de votre clientele </p>
                           
                        </div>
                        <div className="col-md-6">
                            <img src={About1} alt="" className="image w-90" />
                        </div>
                    </div>
                </div>
              </section>


              <section className="section-2 py-3 ">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={About2} alt="" className="image w-90" />
                        </div>
                        
                        <div className="col-md-6">
                            <span className=""> installation cameras de surveillance </span>
                            <h2> <p className='mt-5'> prenez en main le control de vos surfaces </p></h2>

                        </div>

                    </div>
                </div>
              </section>
              <section className="section-4 py-5 bg-light">
               <div className="container">
                  <div className="row">
                     <div className="col-md-3-lg-3">

                     </div>

                     <div className="col-md-3-lg-3">

                     </div>

                     <div className="col-md-3-lg-3">

                     </div>
                     
                  </div>
               </div>
              </section>

              <div className="section-5 py-3">
                <div className="container">
                <div className="section-header text-center">
                    <span>Temoignages</span>
                    <p>  une clientele plus que satisfaite  Ce qu'ils disent <em>de nous</em></p>
                 </div>
{/*<Swiper
                   
                    modules={[Pagination]}
                   spaceBetween={50}
                   slidesPerView={3}
                   onSlideChange={() => console.log('slide change')}
                   onSwiper={(swiper) => console.log(swiper)}
                   pagination={{ clickable: true }}
                                >
                   <SwiperSlide>*/}
                   <div className="section testi">
                    <div className="row">
                        <div className="col-md-4">
                        <div className="card shadow border-0">
                        <div className="card-body py-4">
                            <div className="rating">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>

                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>

                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                            </div>
                            <div className="content pt-4 pb-2">
                                <p>La petite experience que j ai vecu avec cette entreprise etait pratiquement waouh j apprecie vraimment le travail et les efforts fournient je les encourages donc  aller de l avant</p>
                            </div>
                            <hr />
                            <div className="d-flex ">
                                <div>
                                    <img src="" alt="" width={50} className="meta"/>
                                </div>
                                <div className="ps-3">
                                  <div className="name">Mr KENFACK</div>
                                  <div>CEO</div>
                                </div>
                            </div>
                        </div>
                      </div> </div>
                        <div className="col-md-4">
                        <div className="card shadow border-0">
                        <div className="card-body py-4">
                            <div className="rating">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>

                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>

                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                            </div>
                            <div className="content pt-4 pb-2">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum tenetur vitae eveniet, voluptas aut nam odio aperiam consequuntur quam libero vero tempora recusandae 
                                    ipsam? Ut nam totam iusto maxime inventore?</p>
                            </div>
                            <hr />
                            <div className="d-flex ">
                                <div>
                                    <img src="" alt="" width={50} className="meta"/>
                                </div>
                                <div className="ps-3">
                                  <div className="name">vanella</div>
                                  <div>CEO</div>
                                </div>
                            </div>
                        </div>
                      </div>
                        </div>
                       
                        <div className="col-md-4">
                        <div className="card shadow border-0">
                        <div className="card-body py-4">
                            <div className="rating">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>

                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>

                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                            </div>
                            <div className="content pt-4 pb-2">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum tenetur vitae eveniet, voluptas aut nam odio aperiam consequuntur quam libero vero tempora recusandae 
                                    ipsam? Ut nam totam iusto maxime inventore?</p>
                            </div>
                            <hr />
                            <div className="d-flex ">
                                <div>
                                    <img src="" alt="" width={50} className="meta"/>
                                </div>
                                <div className="ps-3">
                                  <div className="name">vanella</div>
                                  <div>CEO</div>
                                </div>
                            </div>
                        </div>
                      </div>
                        </div>
                    </div>

                   
                  {/*  </SwiperSlide>

                   
                   
            </Swiper>*/}
            </div>
             </div> 
            </div>
            <Progre/>

            <section className="section-4 bg-light my-5">
                <div className="row">
                    <div className="col-md-4">
                        <i className=" bi bi-phone"></i>
                    </div>
                </div>
            </section>
            <section className="section-4 bg-light">
        <div className="row text-center">
              <div className="col-md-3">
                 <i className="bi bi-phone" style={{ fontSize: "4rem" }}></i>
               <p>Contactez-nous au 0123456789</p>
              </div>
              <div className="col-md-3">
                <i className="bi bi-envelope" style={{ fontSize: "4rem" }}></i>
                <p>digitalgenerationinnovator@gmail.com</p>
              </div>
           <div className="col-md-3">
               <i className="bi bi-map" style={{ fontSize: "4rem" }}></i>
               <p>Adresse de l'entreprise</p>
            </div>
            <div className="col-md-3">
               <i className="bi bi-whatsapp" style={{ fontSize: "4rem" }}></i>
               <p>Adresse de l'entreprise</p>
            </div>
        </div>
</section>



   </main>


    <Footer/>
  </>
  )
}

export default Home
