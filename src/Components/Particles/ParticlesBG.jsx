import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBG() {
  async function loadParticles(main) {
    await loadFull(main);
  }
  return (
    <Particles
      id="tsparticles"
      init={loadParticles}
      options={{
        
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: {
                "enable": false,
                "force": 10,
                "smooth": 10
              }
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#6D7B8C",
          },
          links: {
            color: "#5A7CBF",
            distance: 125,
            enable: true,
            opacity: 0.2,
            width: 10,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area:2000,
            },
            value: 150,
          },
          opacity: {
            value: 0.25,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 7.5,
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBG;
