import { h, render } from "preact";
/** @jsx h */

function onLoad(e) {
  const data = JSON.parse(e.target.response);
  render((
    <div id="anketa">
      {data.map(el => (
        <div className="respondent">
          <img className="portret" src={el.obr} alt={el.jm} />
          <div className="bio">
            <div className="jmeno">{`${el.jm} ${el.pr}`}</div>
            <div className="vekpov">{`${el.p} • ${el.v} let`}</div>
            <div className="mesto">{el.m}</div>
          </div>
          <div className="odpoved">{el.o}</div>
        </div>
      ))}
    </div>
  ), document.getElementById("anketa-wrapper"));
}

const r = new XMLHttpRequest();
r.addEventListener("load", onLoad);
r.open("GET", "https://data.irozhlas.cz/vaclavak-anketa/data/data.json");
//r.open("GET", "data/data.json");
r.send();
