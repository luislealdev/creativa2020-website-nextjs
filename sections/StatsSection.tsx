import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export const StatsSection = () => {
  return (
    <section id="stats-counter" className="stats-counter">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6">
          <Player
              className="img-fluid"
              autoplay
              loop
              src="https://assets3.lottiefiles.com/packages/lf20_6pjojgtl.json"
              background="transparent"
              speed="1"
              style={{ height: "400px", width: "500px" }}
            />
          </div>

          <div className="col-lg-6">
            <div className="stats-item d-flex align-items-center">
              <span
                className="purecounter"
              >5</span>
              <p>
                <strong>Proyectos</strong> activos{" "}
              </p>
            </div>

            <div className="stats-item d-flex align-items-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="960"
                data-purecounter-duration="1"
                className="purecounter"
              >960</span>
              <p>
                <strong>Horas</strong> pensando mente creativa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
