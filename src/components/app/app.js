import React from "react";
import './app.css';
import withBookstoreService from "../hoc";

const App = ({bookstoreService}) => {
    return (
        <div>
            App
            {bookstoreService.getBooks().map((e) => <div>{e.id}. {e.title} {e.author}</div>)}
        </div>);
};

export default withBookstoreService()(App);
