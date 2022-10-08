import React from "react";

import User from "./components/users";
import UserPager from "./components/userPager";

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<div>Loading...</div>}>
        <UserPager />
        <User />
      </React.Suspense>
    </div>
  );
}

export default App;
