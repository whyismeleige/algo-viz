export default function MainMarkdown(props) {
  return (
    <>
      {props.generateProg ? (
        <section className="markdown-container">
          <div className="bar-markdown">
            <span className="markdown-header" id="bars-tracer">
              BarsTracer
            </span>
            {props.barDisplay}
          </div>
          <div className="struct-markdown">
            <div className="array-markdown">
              <span className="markdown-header" id="array-tracer">
                ArrayTracer
              </span>
              {props.blockDisplay}
            </div>
            <div className="log-tracer">
              <span className="markdown-header" id="log-tracer">
                LogTracer
              </span>
              {props.logs}
            </div>
          </div>
        </section>
      ) : (
        <section className="info-markdown">
          <h1>Algo Viz</h1>
          <h3>Introduction</h3>
          <p>Welcome Users to Algo Viz</p>
          <p>
            Algo Viz is an Algorithm Visualizer, an interactive online platform
            designed to bring algorithms to life through Graphic Visualizations.
            Algo Viz provides you the learning experience to understand complex
            algorithms in a compelling manner.
          </p>
          <h3>Algorithms</h3>
          <p>
            In this Website, you can choose the algorithm which you would like
            to visualize over from the menu bar on the side. You can customize
            the size, the visualization speed according to your requirements.
          </p>
          <h3>Github Repository</h3>
          <p>
            You can check out the Github Repo, by clicking the button below:{" "}
          </p>
          <button
            class="github-button"
            onClick={() => (window.location.href = "https://github.com/whyismeleige/algo-vizgi")}
          >
            <span class="text">Star on GitHub</span>
            <svg
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 47.94 47.94"
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              class="icon"
            >
              <path
                d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
      c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
      c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
      c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
      c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
      C22.602,0.567,25.338,0.567,26.285,2.486z"
              ></path>
            </svg>
          </button>
        </section>
      )}
    </>
  );
}

const markdown = `#Hello Users,`;
