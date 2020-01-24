curl -X GET "http://localhost:8080/transactions/"
curl -X GET "http://localhost:8080/transactions/ID"
curl -X DELETE "http://localhost:8080/transactions/ID"
curl -d '{"categoria":"saldo", "descripcion":"primer saldo", "monto":"3500"}' -H "Content-Type: application/json" -X POST http://localhost:8080/transactions/