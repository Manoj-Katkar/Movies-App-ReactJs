import React, { useState } from 'react';

function QuickUpdateIssue() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    // Simple useState call
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Quick Update Issue</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default QuickUpdateIssue;