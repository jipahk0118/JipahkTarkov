import { useState } from "react";
import "./App.css";

function App() {
  const [mapName, setMapName] = useState(undefined);

  return (
    <div className="app">
      <div className="header">
        <div>Jipahk's project</div>
        <div className="top-button">
          <a href="#menu1">a</a>
          <a href="#menu2">Maps</a>
          <a href="#menu3">Ammunitions</a>
        </div>
      </div>
      <div className="body">
        <div id="menu1">
          test box from a<a href="top">top</a>
        </div>
        <div id="menu2">
          <div id="map-bar">
            <a href="top">top</a>
            <ul className="map-list">List</ul>
            <li>
              <a
                href="javascript:void(0);"
                onClick={() => {
                  setMapName("Shoreline");
                }}
              >
                Shoreline
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                onClick={() => {
                  setMapName("customs");
                }}
              >
                Customs
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                onClick={() => {
                  setMapName("woods");
                }}
              >
                Woods
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                onClick={() => {
                  setMapName("interchange");
                }}
              >
                Interchange
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                onClick={() => {
                  setMapName("lighthouse");
                }}
              >
                Lighthouse
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                onClick={() => {
                  setMapName("reserve");
                }}
              >
                Reserve
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                onClick={() => {
                  setMapName("factory");
                }}
              >
                Factory
              </a>
            </li>
          </div>
          <div id="map-window">
            <img src={`/images/maps/${mapName}.png`} />
          </div>
        </div>
        <div id="menu3">
          3<a href="top">top</a>
        </div>
      </div>
    </div>
  );
}

export default App;
