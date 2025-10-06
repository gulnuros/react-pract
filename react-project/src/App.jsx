import { useEffect, useReducer } from "react";
import "./App.css";
import chef from "./images/LinkedinPic.jpeg";
function Header({ name, year }) {
  return (
    <header>
      <h1>{name} Recipies</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = ["Mac and Cheese", "Lasagna", "Juice"];
const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

function Main({ dishes, onstatus, setStatus }) {
  return (
    <main>
      <img src={chef} alt="chef's portrait image" height="200" />
      <button onClick={setStatus}>Toggle status</button>
      <h2>
        {" "}
        Welcom to our beautiful restaurant. {onstatus ? "Open" : "Closed"}
      </h2>

      <ul>
        {dishes.map((dish) => (
          <li key={dish.id} style={{ listStyleType: "none" }}>
            {dish.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
function App() {
  const [status, toggle] = useReducer((status) => !status, true);

  useEffect(() => {
    console.log(`The restaurant status is ${status ? "open" : "closed"}`);
  }, [status]);
  return (
    <>
      <div>
        <h1>Here is the current value : {status ? "Open" : "Closed"}</h1>
        <button onClick={toggle}>
          {status ? "Close" : "Open "} restaurant
        </button>
        <h2>Welcome</h2>
      </div>
      <Header name="Veggie" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} onstatus={status} setStatus={toggle} />
      <main>
        <h2>something</h2>
      </main>
    </>
  );
}

export default App;
