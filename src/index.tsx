import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios'


/* const battleRegistrationData: BattleRegistrationType = {
  method: "Register",
  params: {
    application: {
      name: state.warriorName,
      warriorType: state.selectedWarrior,
      attacks: state.selectedAttacks,
    },
  },
};

const battleResultsData: BattleResultsType = {
  method: "Status",
  params: {
    id: id,
  },
}; */

axios.interceptors.request.use(
  (req) => {
     req.data = {
      jsonrpc: "2.0",
      id: "1",
      method: req.data.method,
      params: {
        ...req.data.params
      },
     }
     
     return req;
  },
  (err) => {
     return Promise.reject(err);
  }
);

// For POST requests
axios.interceptors.response.use(
  (res) => {
     if (res.status === 201) {
        console.log('Posted Successfully');
     }
     return res;
  },
  (err) => {
     return Promise.reject(err);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
