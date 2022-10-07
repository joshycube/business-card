import React from "react";

import UserCards from "./components/userCards";
import UserForm from "./components/userForm";
import UserPager from "./components/userPager";

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<div>Loading...</div>}>
        <UserPager />
        <UserForm />
        <UserCards />
      </React.Suspense>
    </div>
  );
}

export default App;
