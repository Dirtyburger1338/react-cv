import React from "react";
import "./Folder.css";
import FolderIco from "../../../images/shell32_264.ico";
import chromeIcon from "../../../images/Chrome-icon.png";
import ProgramContextProvider, {
  ProgramContext
} from "../../general-components/programContext";

const leftArr = (
  <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 492 492">
    <g>
      {" "}
      <g>
        {" "}
        <path d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124    c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844    L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412    c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008    c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788    C492,219.198,479.172,207.418,464.344,207.418z" />{" "}
      </g>
    </g>
  </svg>
);
const rightArr = (
  <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 492.004 492.004">
    <g>
      <g>
        <path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136    c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002    v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864    c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872    l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z" />
      </g>
    </g>
  </svg>
);
const rightArr2 = (
  <svg viewBox="0 0 50 50" version="1.1">
    <path d="M 18.136719 3 C 17.875 3.003906 17.628906 3.105469 17.441406 3.289063 L 11.417969 9.265625 C 11.027344 9.65625 11.023438 10.289063 11.410156 10.679688 L 25.644531 25.03125 L 11.296875 39.265625 C 10.902344 39.65625 10.898438 40.289063 11.289063 40.679688 L 17.265625 46.703125 C 17.65625 47.097656 18.289063 47.101563 18.679688 46.710938 L 39.765625 25.796875 C 40.15625 25.40625 40.160156 24.773438 39.769531 24.378906 L 18.859375 3.296875 C 18.667969 3.101563 18.40625 2.996094 18.136719 3 Z "></path>
  </svg>
);
const downArr = (
  <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 444.819 444.819">
    <g>
      <path d="M434.252,114.203l-21.409-21.416c-7.419-7.04-16.084-10.561-25.975-10.561c-10.095,0-18.657,3.521-25.7,10.561   L222.41,231.549L83.653,92.791c-7.042-7.04-15.606-10.561-25.697-10.561c-9.896,0-18.559,3.521-25.979,10.561l-21.128,21.416   C3.615,121.436,0,130.099,0,140.188c0,10.277,3.619,18.842,10.848,25.693l185.864,185.865c6.855,7.23,15.416,10.848,25.697,10.848   c10.088,0,18.75-3.617,25.977-10.848l185.865-185.865c7.043-7.044,10.567-15.608,10.567-25.693   C444.819,130.287,441.295,121.629,434.252,114.203z" />
    </g>
  </svg>
);
const upArr = (
  <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 492 492">
    <g>
      <g>
        <path d="M442.627,185.388L265.083,7.844C260.019,2.78,253.263,0,245.915,0c-7.204,0-13.956,2.78-19.02,7.844L49.347,185.388    c-10.488,10.492-10.488,27.568,0,38.052l16.12,16.128c5.064,5.06,11.82,7.844,19.028,7.844c7.204,0,14.192-2.784,19.252-7.844    l103.808-103.584v329.084c0,14.832,11.616,26.932,26.448,26.932h22.8c14.832,0,27.624-12.1,27.624-26.932V134.816l104.396,104.752    c5.06,5.06,11.636,7.844,18.844,7.844s13.864-2.784,18.932-7.844l16.072-16.128C453.163,212.952,453.123,195.88,442.627,185.388z" />
      </g>
    </g>
  </svg>
);
const magnifyingGlass = (
  <svg viewBox="0 0 16 16" version="1.1">
    <path d="M 10.5 1 C 8.019531 1 6 3.019531 6 5.5 C 6 6.558594 6.382813 7.523438 7 8.292969 L 2.023438 13.269531 L 2.726563 13.980469 L 7.707031 9 C 8.476563 9.617188 9.441406 10 10.5 10 C 12.980469 10 15 7.980469 15 5.5 C 15 3.019531 12.980469 1 10.5 1 Z M 10.5 2 C 12.4375 2 14 3.5625 14 5.5 C 14 7.4375 12.4375 9 10.5 9 C 8.5625 9 7 7.4375 7 5.5 C 7 3.5625 8.5625 2 10.5 2 Z " />
  </svg>
);
const refreshSymbol = (
  <svg viewBox="0 0 24 24" version="1.1">
    <path d="M 20 12 C 20 16.417969 16.417969 20 12 20 C 7.582031 20 4 16.417969 4 12 C 4 7.582031 7.582031 4 12 4 C 13.113281 4 14.167969 4.238281 15.132813 4.648438 L 12.628906 7.324219 L 20.121094 7.074219 L 19.484375 0 L 17.273438 2.359375 C 15.710938 1.5 13.914063 1 12 1 C 5.925781 1 1 5.925781 1 12 C 1 18.074219 5.925781 23 12 23 C 18.074219 23 23 18.074219 23 12 Z "></path>
  </svg>
);

class Folder extends React.Component {
  // static contextType = ProgramContext;
  constructor(props) {
    super(props);
    this.state = {
      dirtyminiaturesActive: false,
      snake3dActive: false,
      minWidth: 600,
      minHeight: 400,
      x: 10,
      y: 10,
      isfullscreen: false
    };
    this.clicks = [];
    //context = {};
  }
  componentDidMount() {
    //console.log(this.context);
    /* perform a side-effect at mount using the value of MyContext */
  }
  //Single or Double click navigator
  clickHandler(state, e) {
    e.persist();
    e.preventDefault();
    this.clicks.push(new Date().getTime());
    window.clearTimeout(this.timeout);
    this.timeout = window.setTimeout(() => {
      if (
        this.clicks.length > 1 &&
        this.clicks[this.clicks.length - 1] -
          this.clicks[this.clicks.length - 2] <
          300
      ) {
        this.openShortcut(state);
      }
    }, 300);
    // this.setFolderIconActive(state);
  }
  openShortcut(state) {
    // this.props.shortcutOpened(state);
    var programs = this.context.programs.map(x => {
      if (x.id === "browser") {
        x.active = true;
        x.open = true;
      } else {
        x.active = false;
      }
      return x;
    });

    var websites = this.context.webpages.map(x => {
      if (x.name === state.name) {
        x.active = true;
        x.open = true;
      } else {
        x.active = false;
      }
      return x;
    });
    // console.log(websites);
    // console.log(programs);
    this.context.setNewState({ programs: programs, webpages: websites });
  }

  setFolderIconActive(name) {
    // this.setState({
    //   snake3dActive: false,
    //   dirtyminiaturesActive: false
    // });
    // if (name === "dirtyminiatures") {
    //   this.setState({ dirtyminiaturesActive: true });
    // } else if (name === "snake3d") {
    //   this.setState({ snake3dActive: true });
    // }
  }

  render() {
    var webpages = this.context.webpages;
    return (
      <div id="Folder">
        <div className="folder-btn-row not-draggable">
          <span>File</span>
          <span>Edit</span>
          <span>Format</span>
          <span>View</span>
          <span>Help</span>
        </div>
        <div className="folder-navigation-bar  not-draggable">
          <div className="arrow-btn-container">
            <div>{leftArr}</div>
            <div>{rightArr}</div>
            <div>{downArr}</div>
            <div>{upArr}</div>
          </div>
          <div className="folder-bread-crums">
            <div>
              <div className="folder-bread-crums-crums">
                <div>
                  {" "}
                  <img src={FolderIco} alt="folder"></img>
                </div>
                <div>&#xAB;</div>
                <div>user</div>
                <div>{rightArr2}</div>
                <div>src</div>
                <div>{rightArr2}</div>
                <div>My Projects</div>
              </div>
              <div className="folder-bread-crums-right-btns">
                <div>{downArr}</div>
                <div>{refreshSymbol}</div>
              </div>
            </div>
          </div>
          <div className="folder-search-box">
            <span>Seach My Projects</span>
            <span>{magnifyingGlass}</span>
          </div>
        </div>
        <div className="folder-content-window not-draggable">
          <div className="folder-content-shortcuts">
            {webpages.map((site, i) => (
              <div
                tabIndex={i}
                key={site.name}
                onClick={e => this.clickHandler(site, e)}
              >
                <img src={chromeIcon} alt="folder"></img>
                <span>{site.iconName}</span>
              </div>
            ))}
          </div>

          {/* <div
              onClick={e => this.clickHandler("dirtyminiatures", e)}
              className={
                this.state.dirtyminiaturesActive ? "folder-icon-active" : ""
              }
            >
              <img src={chromeIcon} alt="folder"></img>
              <span>Dirtyminiatures.html</span>
            </div>
            <div
              onClick={e => this.clickHandler("snake3d", e)}
              className={this.state.snake3dActive ? "folder-icon-active" : ""}
            >
              <img src={chromeIcon} alt="folder"></img>
              <span>Snake3d.html</span>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}
Folder.contextType = ProgramContext;
export default Folder;
