import { useState } from 'react';
import './App.css'
import HeaderComp from './components/HeaderComp';

// function App() {
//   let obj = {
//     "name": "Dinesh",
//     "phone": 1234567890,
//     "batch": "Batch 27",
//     "active": true
//   }
//   let menus = ["Menu 1", "Menu 2", "Menu 3", "Menu 4", "Menu 5"];
//   let output = [];
//   for(let i = 0; i < menus.length; i++) {
//     output.push(<li key={i}>{menus[i]}</li>)
//   }

//   // const handleShow = () => {

//   // }

//   function handleShow() {
//     console.log("handleShow");
//   }

//   function handleHide() {
//     console.log("handleHide");
//   }

//   return (
//     <>
//       <div>
//         First React Component!
//       </div>

//       {/* {
//         obj.active
//           ?
//           <HeaderComp age={10} name="Dinesh" data={obj} />
//           :
//           "" 
//       } */}

//       {/* {
//         obj.active && <HeaderComp age={10} name="Dinesh" data={obj} />
//       } */}
      
//       <button onClick={handleShow}>Show</button>
//       <button onClick={handleHide}>Hide</button>

//       <ul>
//       {
//         menus.map((v, i) => {
//           return (
//             <li key={i}>{v}</li>
//           )
//         })
//       }
//       </ul>

//       <ul>
//         {output}
//       </ul>
//     </>
//   )
// }

function App() {
  let age = 20;

  console.log(age);

  const [name, setName] = useState("Dinesh");
  const [logged, setLogged] = useState(false);

  // function handleChangeAge() {
  //   console.log("Function called...")
  // }

  // let handleChangeAge1 = function() {
  //   console.log("Function called...")
  // }

  let handleChangeAge = () => {
    console.log("Function called...");
    console.log(age, " - inside function before change...");
    age = 30;
    setName("Pradeep");
    setLogged(true);
    console.log(age, " - inside function after change...");
  }

  return (
    <>
      <p>Age: {age}</p>
      <p>Name: {name}</p>

      <p><button onClick={handleChangeAge}>Change Age</button></p>

      <p><button onClick={() => {
    setLogged(false);
  }}>Change Age</button></p>

    {
      logged && <HeaderComp />
    }

    </>
  )
}

export default App
