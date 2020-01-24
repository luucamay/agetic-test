import React from 'react'

const TransactionTable = () => (
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
      <tr>
        <td>data</td>
        <td>data</td>
        <td>data</td>
        <td>data</td>
        <td>data</td>
        <td>
          <button className="button muted-button">Edit</button>
          <button className="button muted-button">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
)

export default TransactionTable