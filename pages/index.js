import { useState } from "react";

function Home() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={addCount}>Add</button>
    </div>
  );
}

export default Home;
