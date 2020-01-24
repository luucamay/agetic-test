curl -X GET "http://localhost:8080/goals/"
curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "description=Read about functional programming every day" "http://localhost:8080/goals/"
curl -X GET "http://localhost:8080/goals/JJtcFVQnoAxW7KXc"
curl -X DELETE "http://localhost:8080/goals/JJtcFVQnoAxW7KXc"
