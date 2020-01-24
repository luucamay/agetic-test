import React from 'react';
import TransactionTable from './TransactionTable.js'

function App() {
  return (
    <div className="container">
      <h1>Registro de gastos e ingresos</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Transacciones</h2>
          <TransactionTable />
        </div>
      </div>
    </div>
  );
}

export default App;
