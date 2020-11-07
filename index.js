import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = "Anuradha";
let curDate = new Date(2020, 11, 6, 14);
curDate = curDate.getHours();
let greetings = '';
const cssStyle = { };

if(curDate >= 1 && curDate < 12){
    greetings = 'Good Morning';
    cssStyle.color = "green";
}else if(curDate>=12 && curDate<19){
    greetings = "Good Afternoon";
    cssStyle.color = "orange";
}else{
    greetings = "Good Night";
    cssStyle.color = "black";
}


ReactDOM.render(
    <>
        <div>
            <h1>
              Hello {name},<span style={cssStyle}> { greetings }</span>
            </h1>
        </div>
    </>,
    document.getElementById("root")
)




// var h1 = document.createElement("h1");
// h1.innerHTML = "Thapa Technical";
// document.getElementById("root").appendChild(h1);
