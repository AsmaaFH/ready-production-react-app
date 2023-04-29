import { useState, useEffect, useContext } from "react";
import Card from "./components/Card";
import Layout from "./components/Layout";
import "./App.css";
import { Context } from "./context";


function App() {
  const [count, setCount] = useState();

  const {state, dispatch} = useContext(Context)  

  useEffect(() => {
    setCount(`you have ${state.items.length} image${state.items.length > 1 ? "s" : ""}`);
  }, [state.items]);

  return (
    <Layout >
      <h1 className="text-center">Gallery</h1>
      {count}
      <div className="row">
        {state.items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </Layout>
  );
}
export default App;
