import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';

// Creates a React root to manage updates to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renders the main App component into the root DOM element
root.render(
  
  <Provider store={store}> {/* Redux Provider to manage global state */}
    <App />
    </Provider>
   
    
);

reportWebVitals(); // Optional: For measuring performance
// If you want to start measuring performance in your app, pass a function