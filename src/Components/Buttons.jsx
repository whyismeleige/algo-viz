import { useState } from "react";
import { clsx } from "clsx";
export default function Buttons(props) {
  return (
    <section className="buttons-container">
      <button
        className={clsx({ inactive: props.algoRunning })}
        onClick={() => props.generateArr("")}
      >
        <span className="box">Generate Random Array</span>
      </button>
      <label className="slider">
        <input
          type="range"
          min={5}
          max={100}
          value={props.sliderVal}
          onInput={props.setSlider}
          className="level"
        />
        <span>Size of the Array</span>
      </label>
      {props.isSearch && (
        <label className="search-input">
          <span>Enter Search Value</span>
          <input
            type="number"
            value={props.searchNum}
            onChange={props.changeSearchValue}
          />
        </label>
      )}
      <button
        className={clsx({ inactive: props.algoRunning })}
        onClick={props.runAlgo}
      >
        <span className="box">Run {props.currAlgo}</span>
      </button>
      <label className="slider">
        <input
          type="range"
          min={20}
          id="speed-slider"
          max={200}
          value={props.animationSpeed}
          onInput={props.setAnimationSpeed}
          className="level"
        />
        <span>Speed</span>
      </label>
      <div class="link-button-container">
        <button class="link-button flex-center" onClick={() => window.location.href = `#`}>
          <svg
            stroke="#fff"
            fill="#fff"
            xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            class="btn-svg"
            width="22px"
            viewBox="0 0 20 20"
          >
            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              id="SVGRepo_tracerCarrier"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>github [#fff142]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                fill-rule="evenodd"
                fill="none"
                stroke-width="1"
                stroke="none"
                id="Page-1"
              >
                <g
                  fill="#fff"
                  transform="translate(-140.000000, -7559.000000)"
                  id="Dribbble-Light-Preview"
                >
                  <g transform="translate(56.000000, 160.000000)" id="icons">
                    <path
                      id="github-[#fff142]"
                      d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </button>
        <button class="link-button flex-center" onClick={() => window.location.href =`https://www.youtube.com/@ICode-h4c`}>
          <svg
            viewBox="0 -3 20 20"
            width="22px"
            class="btn-svg"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            fill="#fff"
            stroke="#fff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>youtube [#fff168]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-300.000000, -7442.000000)"
                  fill="#fff"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                      id="youtube-[#fff168]"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </section>
  );
}
