import React, { useState, useEffect } from 'react'
import TransactionTable from './TransactionTable.js'
import axios from 'axios';

function App() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    getTransactions()
  }, [])

  const getTransactions = async () => {
    await axios.get('http://localhost:8080/transactions')
      .then(response => {
        console.log(response.data)
        setTransactions(response.data)
      }).catch(error => {
        console.error(error)
      })
  }

  return (
    <div className="container">
      <h1>Registro de gastos e ingresos</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Transacciones</h2>
          <TransactionTable transactions={transactions} />
        </div>
      </div>
    </div>
  );
}

export default App;
