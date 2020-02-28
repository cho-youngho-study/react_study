import React from 'react';
import Counter from "./component/Counter";

function App(){
  return(
    <>
    <Counter />
    </>
  )
}

export default App;

// <script>
// const text = document.querySelector("#text");
// const increment = document.querySelector("#increment");
// const decrement = document.querySelector("#decrement");

// function onClickEvent(e){
//     const id = e.target.id;
//     const textValue = parseInt(text.innerText);
//     if(id === 'increment'){
//         text.innerText = textValue+1;
//     }else if(id === 'decrement'){
//         text.innerText = textValue-1;
//     }
// }

// increment.addEventListener("click", onClickEvent);
// decrement.addEventListener("click", onClickEvent);

// </script>