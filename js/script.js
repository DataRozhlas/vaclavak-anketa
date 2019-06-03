import { h, render } from "preact";
/** @jsx h */

// jmeno, prijmeni, fotolink, vek, mesto, povolani, canc

function onLoad(resp) {
  console.log(resp);
}
const r = new XMLHttpRequest();
r.addEventListener("load", onLoad);
r.open("GET", "https://data.irozhlas.cz/vaclavak-anketa/data/data.json");
r.send();

const data = [
  { jmeno: "Mirek", prijmeni: "Novák", odpoved: "abc" },
  { jmeno: "Karel", prijmeni: "Horák", odpoved: "def" },
];
render((
  <div>
    {data.map(el => (
      <div className="respondent">
        <img className="portret" src="x.jpg" />
        <p className="jmeno">{`${el.jmeno} ${el.prijmeni}`}</p>
        <p className="odpoved">{el.odpoved}</p>
      </div>
    ))}
  </div>
), document.getElementById("anketa"));
