import react from "react";
const date = new Date();
const currentTime = date.getHours();
console.log(currentTime);
var greetings = "GOOD TIME"

const ccolor = "";

if(currentTime < 12){
   greetings = "GOOD MORNING";
   ccolor = "blue";
}
else if(currentTime < 18){
    greetings = "GOOD AFTERNOON";
    ccolor = "red";
}
else{
    greetings = "GOOD EVENING";
    ccolor = "pink";
}

function heading(){
   return(
     <div>
        <table>
        <tr >
        <h1 style={{color:{ccolor}}}>{greetings}</h1>
        </tr>
        </table>
     </div>
   );
}
export default heading;