export default function Home() {
  return (
    <>
      <div className="left-sash"></div>
      <div className="top-section-background"></div>

      <div className="mincho-site">
        {/* <Header /> */}
        <div className="section pad relative">
          <div className="italic-header">
            <h1>Mincho Pacheco //</h1>
            <h1>Hair Stylist</h1>
          </div>
          <div className="row">
            <div className="major-image-container">
              <img src="" className="major-image" />
            </div>
            <div className="major-text-container">
              <p className="major-text">
                Here to meet any and all of your hair needs. When you work with
                me, it's <i>all about you.</i>
              </p>
            </div>
          </div>
          <div className="icons-container">
            <div className="crown"></div>
            <div className="down-arrow"></div>
          </div>
          <div
            className="some-icon"
            id="scroll-past"
            style={{ backgroundColor: "green", height: "50px", width: "50px" }}
          >
            !!!
          </div>
          <div
            className="down-arrow-icon"
            style={{ backgroundColor: "green", height: "50px", width: "50px" }}
          >
            !!!
          </div>
        </div>
        <div className="section pad">
          <div className="row">
            <div className="taped-picure-container for-men">
              <div className="tape for-men"></div>
              <image src="" className="for-men-image" />
            </div>
            <div className="taped-picure-container for-women">
              <div className="tape for-women"></div>
              <image src="" className="for-women-image" />
            </div>
          </div>
        </div>
        <div className="section pad">
          <h2 className="section-header">About Me</h2>
          <p className="section-subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
          <img src="" className="about-me-image" />
        </div>
        <div className="section">
          <div className="row flex h-space-around v-center">
            <div className="city-container">
              <div className="tape boston"></div>
              <image src="" className="city-image" />
              <h4 className="city-text">Boston</h4>
            </div>
            <div className="city-container">
              <div className="tape new-york"></div>
              <h4 className="city-text">New York</h4>
              <image src="" className="city-image" />
            </div>
            <div className="city-container">
              <div className="tape miami"></div>
              <image src="" className="city-image" />
              <h4 className="city-text">Miami</h4>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}
