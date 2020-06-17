import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import store from "./store";
import BookstoreService from "./services/bookstore-service";
import {Provider} from "react-redux";
import ErrorBoundary from "./components/error-boundry";
import {BookstoreServiceProvider} from "./components/bookstore-service-context";
import {BrowserRouter} from "react-router-dom";

const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookstoreServiceProvider value={bookstoreService}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </BookstoreServiceProvider>
        </ErrorBoundary>
    </Provider>
  ,
  document.getElementById('root')
);
