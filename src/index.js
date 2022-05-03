import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function renderCats(containerId, history) {
  if(document.getElementById(containerId).innerHTML===""){
    const portal = ReactDOM.createRoot(document.getElementById(containerId));
    portal.render(<React.StrictMode>
      <App history={history} />
    </React.StrictMode>);
  }
};

function unmountCats(containerId){
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
window.renderCats = renderCats;
window.unmountCats = unmountCats;

if (!document.getElementById('Cats-container')) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
