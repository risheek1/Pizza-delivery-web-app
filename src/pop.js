import React from 'react'
 function Pop({selected,closepop})
 { return(
   <React.Fragment>
   <div class="popup-box">
   <div class="box">
    <h1>{selected.name}</h1>
    <img src={selected.img}/>
    <h4>{selected.description}</h4>
            <span className="close-icon" onClick={closepop}>x</span>

   </div>
   </div>
   </React.Fragment>);
 }
 export default Pop;