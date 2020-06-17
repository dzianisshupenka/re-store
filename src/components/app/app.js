import React from "react";
import './app.css';
import store from "../../store";

const App = () => {
    console.log(store.getState());
    return <div>App</div>;
};

export default App;
