import React from "react";
import { APIProvider, Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css"; // Importa as animações

const PoiMarkers = (props) => {
  return (
    <>
      {props.pois.map((poi) => (
        <AdvancedMarker key={poi.key} position={poi.location}>
          <Pin background="#00AA00" glyphColor="#000" borderColor="#000" />
        </AdvancedMarker>
      ))}
    </>
  );
};

function Home() {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  // Coordenadas do local do consultório
  const location = {
    lat: -21.219871520996094,
    lng: -43.778358459472656,
  };

  return (
    <APIProvider
      apiKey="AIzaSyA-qF4Csrs-TSWP0mtrdGkExK2NjZt_3tc"
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <div>
        <img src="images/Foto Exemplo.png" alt="" />
        <div className="container">
          <ScrollAnimation animateIn="animate__fadeInUp" duration={1}>
            <div className="row featurette mt-5 d-flex align-items-center">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading fw-normal lh-1">
                  Oh yeah, it’s that good.{" "}
                  <span className="text-body-secondary">See for yourself.</span>
                </h2>
                <p className="lead">
                  Another featurette? Of course. More placeholder content here to
                  give you an idea of how this layout would work with some actual
                  real-world content in place.
                </p>
              </div>
              <div className="col-md-5 order-md-1">
                <img
                  src="images/endoscenter_Logo.jpg"
                  alt=""
                  className="img-fluid me-5"
                />
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="animate__fadeInUp" delay={300} duration={1.0}>
            <h2 className="mt-5">Onde nos achar?</h2>
          </ScrollAnimation>

          <ScrollAnimation animateIn="animate__fadeInUp" delay={500} duration={1.0}>
          {/* Google Maps */}
            <div style={containerStyle}>
              <Map defaultZoom={15} defaultCenter={location} mapId="31bbed1d0e1479e4">
                <PoiMarkers pois={[{ key: "Endoscenter", location }]} />
              </Map>
            </div>

            
              {/* Endereço abaixo do mapa */}
              <div className="mt-3">
                <h4>Endereço:</h4>
                <p>
                  R. Gen. Antônio Carlos de Andrada Serpa, 20 2º andar - Ibiapaba,
                  Barbacena
                </p>
              </div>
          </ScrollAnimation>
        </div>
      </div>
    </APIProvider>
  );
}

export default Home;
