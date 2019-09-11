import React from "react";
import ReactDOM from "react-dom";
import "./Browser.css";
import { Rnd } from "react-rnd";
import browserIco from "../../../images/shell32_264.ico";
// import browserPropertiesIco from "../../../images/imageres_5367.ico";
// import chromeIcon from "../../../images/Chrome-icon.png";
import moreSettings from "../../../images/more-settings.svg";
import starFavourite from "../../../images/star-favourite.png";

class Browser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // activeTab: "",
      activeWebSite: { name: "", url: null },
      minWidth: 600,
      minHeight: 400,
      x: 710,
      y: 10,
      isfullscreen: false,
      listOfOpenWebsites: []
    };
    this.listOfWebsites = [
      { name: "DirtyMiniatures", url: "http://dirtyminiatures.com/" },
      { name: "Snake3d", url: "https://dirtyminiatures.com/game" }
    ];
    //this.listOfOpenWebsites = [];
    this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
    this.closeTab = this.closeTab.bind(this);
  }
  handleFullScreenClick() {
    if (this.state.isfullscreen) {
      this.setState({ isfullscreen: false });
      this.props.normalize("#browser");
    } else {
      this.props.maximize("#browser");
      this.setState({ isfullscreen: true });
    }
  }

  setbrowserIconActive(name) {
    this.setState({
      snake3dActive: false,
      dirtyminiaturesActive: false
    });
    if (name === "dirtyminiatures") {
      this.setState({ dirtyminiaturesActive: true });
    } else if (name === "snake3d") {
      this.setState({ snake3dActive: true });
    }
  }

  openNewPage(openedPage) {
    this.listOfWebsites.forEach(page => {
      if (page.name.toLowerCase() === openedPage.toLowerCase()) {
        if (
          !this.state.listOfOpenWebsites.some(
            x => x["name"].toLowerCase() === openedPage.toLowerCase()
          )
        ) {
          this.state.listOfOpenWebsites.push(page);
        } else {
        }
        // this.setState({ activeTab: page.name });
        this.setState({ activeWebSite: page });
        let browser = document.getElementById("iFrame");
        browser.style.position = "unset";
        browser.style.position = "relative";
      }
    });
  }
  closeTab = pageName => {
    if (this.state.listOfOpenWebsites.length < 2) {
      this.props.exit(".browser-exe");
    } else {
      var remainingTabs = this.state.listOfOpenWebsites.filter(
        x => x.name !== pageName
      );
      this.setState({
        activeWebSite: remainingTabs[0],
        listOfOpenWebsites: remainingTabs
      });

    }
  };
  setupIframeClickHandler = e => { };

  render() {
    var maximizeBtn = this.state.isfullscreen ? "❐" : "☐";

    return (
      <Rnd
        id="browser"
        minHeight="100"
        minWidth="580"
        onMouseDown={() => this.props.active(".browser-exe")}
        default={{
          x: 215,
          y: 26,
          width: 1100,
          height: 900
        }}
        cancel=".not-draggable"
      >
        <div
          className={
            !this.state.isfullscreen
              ? "browser-toolbar"
              : "browser-toolbar not-draggable"
          }
        >
          {!this.state.activeWebSite.url}
          <div className="browser-toolbar-tabs">
            {this.state.listOfOpenWebsites.map(program => (
              <div
                key={program.name}
                className={
                  this.state.activeWebSite.name === program.name
                    ? "active-tab"
                    : ""
                }
                onClick={event => {
                  event.stopPropagation();
                  this.openNewPage(program.name);
                }}
              >
                <span>{program.name}</span>
                <span
                  onClick={event => {
                    event.stopPropagation();
                    this.closeTab(program.name);
                  }}
                >
                  &#10005;
                </span>
              </div>
            ))}
          </div>
          <div className="toolbar-btn-collection not-draggable">
            <button
              className="browser-toolbar-btn minimize-btn"
              onClick={() => this.props.minimize(".browser-exe")}
            >
              &#8213;
            </button>
            <button
              className="browser-toolbar-btn maximize-btn"
              onClick={this.handleFullScreenClick}
            >
              {maximizeBtn}
            </button>
            <button
              className="browser-toolbar-btn close-btn"
              onClick={() => this.props.exit(".browser-exe")}
            >
              &#10005;
            </button>
          </div>
        </div>

        <div className="browser-navigation-bar  not-draggable">
          <div className="browser-arrow-btn-container">
            <div>
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 492 492"
              >
                <g>
                  <g>
                    <path d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124    c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844    L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412    c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008    c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788    C492,219.198,479.172,207.418,464.344,207.418z" />
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 492.004 492.004"
              >
                <g>
                  <g>
                    <path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136    c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002    v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864    c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872    l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z" />
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <svg viewBox="0 0 24 24" version="1.1">
                <path d="M 20 12 C 20 16.417969 16.417969 20 12 20 C 7.582031 20 4 16.417969 4 12 C 4 7.582031 7.582031 4 12 4 C 13.113281 4 14.167969 4.238281 15.132813 4.648438 L 12.628906 7.324219 L 20.121094 7.074219 L 19.484375 0 L 17.273438 2.359375 C 15.710938 1.5 13.914063 1 12 1 C 5.925781 1 1 5.925781 1 12 C 1 18.074219 5.925781 23 12 23 C 18.074219 23 23 18.074219 23 12 Z "></path>
              </svg>
            </div>
          </div>
          <div className="browser-url-area">
            <div>
              <div className="browser-url-area-text">
                <div>
                  <img src={browserIco} alt="icon"></img>
                </div>
                <div>{this.state.activeWebSite.url}</div>
              </div>
              <div className="browser-url-area-favourite">
                <img src={starFavourite} alt="icon"></img>
              </div>
            </div>
          </div>
          <div className="browser-toolbar-user-icons">
            <span className="user-icon">
              <div>?</div>
            </span>
            <span className="more-settings-icon">
              <img src={moreSettings} alt="icon"></img>
            </span>
          </div>
        </div>
        {/* <div
          className="browser-display-area"
          onMouseDown={() => this.props.active(".browser-exe")}
        > */}
        <iframe
          id="iFrame"
          src={this.state.activeWebSite.url}
          title="browser"
          onLoad={e => {
            this.setupIframeClickHandler(e);
          }}
        />
        {/* <iframe src={snake3d} /> */}
        {/* </div> */}
      </Rnd>
    );
  }
}

export default Browser;
