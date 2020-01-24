import React from 'react'

const TransactionTable = props => (
  <table>
    <thead>
      <tr>
        <th>Categoria</th>
        <th>Descripcion</th>
        <th>Fecha</th>
        <th>Monto</th>
        <th>Tipo</th>
      </tr>
    </thead>
    <tbody>
      {props.transactions.length > 0 ? (
        props.transactions.map(transaction => (
      <tr key={transaction.id}>
        <td>{transaction.categoria}</td>
        <td>{transaction.descripcion}</td>
        <td>{transaction.fecha}</td>
        <td>{transaction.monto}</td>
        <td>{transaction.tipo}</td>
        <td>
          <button className="button muted-button">Edit</button>
          <button className="button muted-button">Delete</button>
        </td>
      </tr>))
      ):(
        <tr>
          <td colSpan={3}>No transactions</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default TransactionTable