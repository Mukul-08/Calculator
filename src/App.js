import React from "react";
import "./style.css"
import { useState } from "react";



function App(){

   const [res,setres] = useState("");
   const [his,sethis] = useState("");

   const handclick = (e) => {
    setres(res.concat(e.target.name));
   }

   const clear = (e) => {
    setres("");
   }
   
   const cal = (e) => {
   let o = res[res.length-1];
   let oo = res[0];

     if(o === "+" || o === "/" || o === "-" || o ==="*" || oo === "+" || oo === "/" || oo === "-" || oo ==="*"){
      setres("");
      sethis("");
     }
     else{
      sethis(res);
      let k = "" + eval(res);
      setres(k);
     }
   }
   
   const backspace = (e) => {
    setres(res.slice(0,-1));
   }

  return (
 <div className="cal">
    <input type="text" className="ans" value={res} ></input>
    <br></br>

    <button type="button" className="ce" name="" onClick={clear} id="ce">CE</button>
    <button type="button" name="c"onClick={backspace} id="c">C</button>
    <button type="button" name="/" onClick={handclick} id="/">/</button>
      <br></br>

    <button type="button" name="7" onClick={handclick} id="7">7</button>
    <button type="button" name="8"onClick={handclick} id="8">8</button>
    <button type="button" name="9" onClick={handclick} id="9">9</button>
    <button type="button" name="*" onClick={handclick} id="*">x</button>
    <br></br>

    <button type="button" name="4" onClick={handclick} id="4">4</button>
    <button type="button" name="5"onClick={handclick} id="5">5</button>
    <button type="button" name="6" onClick={handclick} id="6">6</button>
    <button type="button" name="-" onClick={handclick} id="-">-</button>


    <br></br>
    <button type="button" name="1" onClick={handclick} id="1">1</button>
    <button type="button" name="2"onClick={handclick} id="2">2</button>
    <button type="button" name="3" onClick={handclick} id="3">3</button>
    <button type="button" name="+" onClick={handclick} id="+">+</button>

   <br></br>
    <button type="button" name="0"onClick={handclick} id="0">0</button>
    <button type="button" name="." onClick={handclick} id=".">.</button>
    <button type="button" className="eq" name="=" onClick={cal} id="=">=</button>
   <br></br>
   <button type="button" className="his">{his}</button>

 </div>
  );
}
export default App;













