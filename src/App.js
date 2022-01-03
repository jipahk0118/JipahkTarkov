import { useState } from "react";
import "./App.css";

function App() {
  const [mapName, setMapName] = useState(undefined);
  const [ammoName, setAmmoName] = useState(undefined);
  const [menuDrawer, setMenuDrawer] = useState(false);

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
        {/* 탄약차트 */}
        <div id="menu3">
          <a href="top">top</a>
          <div
            onClick={() => {
              setMenuDrawer(!menuDrawer);
            }}
          >
            탄약
          </div>
          {menuDrawer && (
            <div className="bullet">
              <div className="List">
                <div className="bulletType">권총탄</div>
                <img src="/images/ammo/7.62x25.png" />
                7.62x25mm
                <img src="/images/ammo/9x18.png" />
                9x18mm
                <img
                  src="/images/ammo/9x19.png"
                  onClick={() => {
                    setAmmoName("9x18");
                  }}
                />
                9x19mm
                <img src="/images/ammo/9x21.png" />
                9x21mm
                <img src="/images/ammo/45ACP.png" />
                .45 ACP
              </div>
              <div className="List">
                <div className="bulletType">PDW탄</div>
                <img src="/images/ammo/4.6x30.png" />
                4.6x30mm
                <img src="/images/ammo/5.7x28.png" />
                5.7x28mm
              </div>
              <div className="List">
                <div className="bulletType">소총탄</div>
                <img src="/images/ammo/5.45x39.png" />
                5.45x39mm
                <img src="/images/ammo/5.56x45.png" />
                5.56x45mm
                <img src="/images/ammo/300Blackout.png" />
                300Blackout
                <img src="/images/ammo/7.62x39.png" />
                7.62x39mm
                <img src="/images/ammo/7.62x51.png" />
                7.62x51mm
                <img src="/images/ammo/7.62x54.png" />
                7.62x54mm
                <img src="/images/ammo/338.png" />
                338Lapua
                <img src="/images/ammo/9x39.png" />
                9x39mm
                <img src="/images/ammo/366.png" />
                366 TKM
                <img src="/images/ammo/12.7x55.png" />
                12.7x55mm
              </div>
              <div className="List">
                <div className="bulletType">샷건탄</div>
                <img src="/images/ammo/12x70.png" />
                12x70mm
                <img src="/images/ammo/20x70.png" />
                20x70mm
                <img src="/images/ammo/23x75.png" />
                23x75mm
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
