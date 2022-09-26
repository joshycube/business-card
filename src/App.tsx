import React from "react";

import UserCards from "./components/userCards";
import UserPager from "./components/userPager";

function App() {
  return (
    <div className="App">
      <UserPager />
      <React.Suspense fallback={<div>Loading...</div>}>
        <UserCards />
      </React.Suspense>
    </div>
  );
}

export default App;
