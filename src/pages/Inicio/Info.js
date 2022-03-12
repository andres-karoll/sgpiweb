import React from 'react'
import Navar from '../../components/Navar'
import Footer from '../../components/Footer'
const Home = () => (
  <div>
    
    {/*==========================
  Header
  ============================*/}
    <header id="header">
    <Navar/>
      
    </header>

    {/* #header */}
    {/*==========================
    Intro Section
  ============================*/}


    <main id="main">
      {/*==========================
About Us Section
    ============================*/}
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="about-img">
                <img src="https://i.ibb.co/Kqc2nJ2/usbbogota1.jpg" alt />
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="about-content">
                <h2>Informacion</h2>
                <h3>
                  Sistema de Gestion de Proyectos 
                </h3>
               
                <h4>
                En la Universidad de San Buenaventura sede Bogotá, 
                no existe un sistema que muestre, organice y preserve 
                los diferentes tipos de trabajos y proyectos presentados 
                por estudiantes y/o profesores en los comités y materias 
                de los programas académicos, lo cual conlleva a una gran 
                cantidad de proyectos que no avanzan significativamente. 
                Por otro lado, los estudiantes no tienen acceso a proyectos 
                viables o en desarrollo, que se encuentran inactivos o en 
                proceso de ejecución para poder integrarse a ellos o darles 
                continuidad. Para solucionar dichos problemas, se debe crear 
                un sistema para la gestión de proyectos de investigaciones en 
                la universidad. 
                El objetivo de este estudio es implementar un repositorio web 
                para dar visibilidad y gestión de las investigaciones desarrolladas
                en la universidad San Buenaventura sede Bogotá.            
                </h4>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* #about */}
      {/*==========================
Services Section
    ============================*/}
      <section id="services" className="section-bg">
        <div className="container">

            <header className="section-header">
            <h3>Beneficios de utilizar el sistema SGP</h3>
            </header>
          <div className="row">
            <div
              className="col-md-6 col-lg-4 wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="box">
                <div className="icon" style={{ background: "#e1eeff" }}>
                  <i
                    className="ion-ios-world-outline"
                    style={{ color: "#2282ff" }}
                  />
                </div>
                <h4 className="title">
                  <a href>Mejora la visibilidad de los proyectos finalizados y en proceso.</a>
                </h4>

              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="box">
                <div className="icon" style={{ background: "#fff0da" }}>
                  <i
                    className="ion-ios-bookmarks-outline"
                    style={{ color: "#e98e06" }}
                  />
                </div>
                <h4 className="title">
                  <a href>Mejora Gestion de proyectos por parte de Universidad.</a>
                </h4>

              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow bounceInUp"
              data-wow-delay="0.1s"
              data-wow-duration="1.4s"
            >
              <div className="box">
                <div className="icon" style={{ background: "#e6fdfc" }}>
                  <i
                    className="ion-ios-paper-outline"
                    style={{ color: "#3fcdc7" }}
                  />
                </div>
                <h4 className="title">
                  <a href>Mejora la gestion de creacion de patentes y derechos de autor</a>
                </h4>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-bg">
        <div className="container">
          <header className="section-header">
            <h3 className="section-title">Nuestra universidad</h3>
          </header>

          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="https://i.ibb.co/Kqc2nJ2/usbbogota1.jpg" className="img-fluid" alt />
                <div className="portfolio-info">

                  <div>
                    <a
                      href="https://i.ibb.co/Kqc2nJ2/usbbogota1.jpg"
                      data-lightbox="portfolio"
                      className="link-preview"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </a>
                    <a href="#" className="link-details" title="Volver">
                      <i className="ion ion-android-open" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item filter-web"
              data-wow-delay="0.1s"
            >
              <div className="portfolio-wrap">
                <img src="https://i.ibb.co/sCmfMgV/5e2f0d839dc40.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <div>
                    <a
                      href="https://i.ibb.co/sCmfMgV/5e2f0d839dc40.jpg"
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="Web 3"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </a>
                    <a href="#" className="link-details" title="Volver">
                      <i className="ion ion-android-open" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item filter-app"
              data-wow-delay="0.2s"
            >
              <div className="portfolio-wrap">
                <img src="https://i.ibb.co/D97F8PS/usb-bogota-02.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <div>
                    <a
                      href="https://i.ibb.co/D97F8PS/usb-bogota-02.jpg"
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="App 2"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </a>
                    <a href="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="https://i.ibb.co/27R4KBx/usb-bogota-08.jpg" className="img-fluid" alt />
                <div className="portfolio-info">

                  <div>
                    <a
                      href="https://i.ibb.co/27R4KBx/usb-bogota-08.jpg"
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="Card 2"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </a>
                    <a href="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item filter-web"
              data-wow-delay="0.1s"
            >
              <div className="portfolio-wrap">
                <img src="https://i.ibb.co/8sSDCsL/usb-bogota-13.jpg" className="img-fluid" alt />
                <div className="portfolio-info">

                  <div>
                    <a
                      href="https://i.ibb.co/8sSDCsL/usb-bogota-13.jpg"
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="Web 2"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </a>
                    <a href="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item filter-app"
              data-wow-delay="0.2s"
            >
              <div className="portfolio-wrap">
                <img src="https://i.ibb.co/F7Wm0cY/usb-bogota-16.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <div>
                    <a
                      href="https://i.ibb.co/F7Wm0cY/usb-bogota-16.jpg"
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="App 3"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </a>
                    <a href="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="https://i.ibb.co/W3v7RNm/usb-bogota-26.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <div>
                    <a
                      href="https://i.ibb.co/W3v7RNm/usb-bogota-26.jpg"
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="Card 1"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </a>
                    <a href="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item filter-card"
              data-wow-delay="0.1s"
            >
              <div className="portfolio-wrap">
                <img src="https://i.ibb.co/vhpXwjW/usb-bogota-38.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <div>
                    <a
                      href="https://i.ibb.co/vhpXwjW/usb-bogota-38.jpg"
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="Card 3"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </a>
                    <a href="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item filter-web"
              data-wow-delay="0.2s"
            >
              <div className="portfolio-wrap">
                <img src="https://i.ibb.co/DkRjzX3/usb-bogota-01.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <div>
                    <a
                      href="https://i.ibb.co/DkRjzX3/usb-bogota-01.jpg"
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="Web 1"
                      title="Preview"
                    >
                      <i className="ion ion-eye" />
                    </a>
                    <a href="#" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
    <Footer/>
  </div>
  

);

export default Home