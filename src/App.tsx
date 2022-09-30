import React from "react";

import UserCards from "./components/userCards";
import UserPager from "./components/userPager";

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<div>Loading...</div>}>
        <UserPager />
        <UserCards />
      </React.Suspense>
    </div>
  );
}

export default App;
