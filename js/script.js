﻿import { h, render } from "preact";
/** @jsx h */

function onLoad(e) {
  const data = JSON.parse(e.target.response);
  render((
    <div id="anketa">
      {data.map(el => (
        <div className="respondent">
          <img className="portret" src={'https://data.irozhlas.cz/vaclavak-anketa/img/' + el.obr} alt={el.jm} />
          <div className="bio">
            <div className="jmeno">{`${el.jm} ${el.pr}`}</div>
            <div className="vek">{el.p}</div>
            <div className="vek">{el.v && `${el.v} let`}</div>
            <div className="mesto">{el.m}</div>
          </div>
          <div className="odpoved">{el.o}</div>
        </div>
      ))}
    </div>
  ), document.getElementById("anketa-wrapper"));
};

const r = new XMLHttpRequest();
r.addEventListener("load", onLoad);
r.open("GET", "https://data.irozhlas.cz/vaclavak-anketa/data/data.json");
r.send();
