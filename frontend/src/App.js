import React, { useState } from 'react'
import TransactionTable from './TransactionTable.js'

function App() {
  const transactionsData = [
    { id: 1, categoria: 'Salario', descripcion: 'flopp', fecha: '2020-01-21', monto: 2000, tipo:'ingreso' },
    { id: 1, categoria: 'gatos', descripcion: 'es necesario', fecha: '2020-01-21', monto: 1000, tipo:'gasto' },
    { id: 1, categoria: 'comida', descripcion: 'importante', fecha: '2020-01-21', monto: 800, tipo:'gasto' }
  ]

  const [transactions, setTransactions] = useState(transactionsData)
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
