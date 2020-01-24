curl -X GET "http://localhost:8080/transactions/"
curl -X GET "http://localhost:8080/transactions/ID"
curl -X DELETE "http://localhost:8080/transactions/ID"
curl -d '{"categoria":"saldo", "descripcion":"primer saldo", "monto":"3500", "tipo":"ingreso"}' -H "Content-Type: application/json" -X POST http://localhost:8080/transactions/
curl -X PUT -H "Content-Type: application/json" -d '{"categoria":"otra","descripcion":"nueva nueva des", "monto":8000, "tipo":"gasto"}' http://localhost:8080/transactions/ID
