# Clipboard Health code test

## install 

```
npm install
```

## run app
```
npm start
```

app will start on 3004 port
- http://localhost:3004


## test via curl
app has seed data, so you can test it directly.

### 1. login API
```
curl --silent --location --request POST 'http://localhost:3004/api/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "Email": "user1@example.com",
    "Password": "user1"
}'
```
Response:
```
{
    "Id": 1,
    "Username": "user1",
    "Email": "user1@example.com",
    "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InVzZXIxIiwiRW1haWwiOiJ1c2VyMUBleGFtcGxlLmNvbSIsImlhdCI6MTY3NDc0ODQ2NCwiZXhwIjoxNjc0NzUyMDY0fQ.UdHZlTjLvKZz0nozyVc9JCsBnCVu4vw7IE_IUJIqpW0",
    "DateLoggedIn": null,
    "DateCreated": "Thu Jan 26 2023 10:38:52 GMT-0500 (Eastern Standard Time)"
}
```
Copy Token for Authorize other api

### 2. Create employee API
```
curl --silent --location --request POST 'http://localhost:3004/api/employee' \
--header 'Content-Type: application/json' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InVzZXIxIiwiRW1haWwiOiJ1c2VyMUBleGFtcGxlLmNvbSIsImlhdCI6MTY3NDc0ODQ2NCwiZXhwIjoxNjc0NzUyMDY0fQ.UdHZlTjLvKZz0nozyVc9JCsBnCVu4vw7IE_IUJIqpW0' \
--data-raw '{
    "name": "Anurag",
    "salary": "110000",
    "currency": "USD",
    "on_contract": "true",
    "department": "Banking",
    "sub_department": "Loan"
}'
```
response:
```
{
    "message": "success"
}
```

### 3. searchbysalary API
```
curl --silent --location --request POST 'http://localhost:3004/api/employee/searchbysalary' \
--header 'Content-Type: application/json' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InVzZXIxIiwiRW1haWwiOiJ1c2VyMUBleGFtcGxlLmNvbSIsImlhdCI6MTY3NDc0ODQ2NCwiZXhwIjoxNjc0NzUyMDY0fQ.UdHZlTjLvKZz0nozyVc9JCsBnCVu4vw7IE_IUJIqpW0' \
--data-raw ''
```
Response:
```
{
    "message": "success",
    "data": [
        {
            "mean": 20076509,
            "min": 30,
            "max": 200000000
        }
    ]
}
```
### 4. searchbycontract API
```
curl --silent --location --request POST 'http://localhost:3004/api/employee/searchbycontract' \
--header 'Content-Type: application/json' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InVzZXIxIiwiRW1haWwiOiJ1c2VyMUBleGFtcGxlLmNvbSIsImlhdCI6MTY3NDc0ODQ2NCwiZXhwIjoxNjc0NzUyMDY0fQ.UdHZlTjLvKZz0nozyVc9JCsBnCVu4vw7IE_IUJIqpW0' \
--data-raw ''
```
Response:
```
{
    "message": "success",
    "data": [
        {
            "mean": 103333.33333333333,
            "min": 90000,
            "max": 110000
        }
    ]
}
```

### 5. searchbydepartment API
```
curl --silent --location --request POST 'http://localhost:3004/api/employee/searchbydepartment' \
--header 'Content-Type: application/json' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InVzZXIxIiwiRW1haWwiOiJ1c2VyMUBleGFtcGxlLmNvbSIsImlhdCI6MTY3NDc0ODQ2NCwiZXhwIjoxNjc0NzUyMDY0fQ.UdHZlTjLvKZz0nozyVc9JCsBnCVu4vw7IE_IUJIqpW0' \
--data-raw ''
```

Response:
```
{
    "message": "success",
    "data": [
        {
            "mean": 30,
            "min": 30,
            "max": 30,
            "department": "Administration"
        },
        {
            "mean": 100000,
            "min": 90000,
            "max": 110000,
            "department": "Banking"
        },
        {
            "mean": 40099006,
            "min": 30,
            "max": 200000000,
            "department": "Engineering"
        },
        {
            "mean": 35015,
            "min": 30,
            "max": 70000,
            "department": "Operations"
        }
    ]
}
```
### 6. searchbysubdepartment API
```
curl --silent --location --request POST 'http://localhost:3004/api/employee/searchbysubdepartment' \
--header 'Content-Type: application/json' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InVzZXIxIiwiRW1haWwiOiJ1c2VyMUBleGFtcGxlLmNvbSIsImlhdCI6MTY3NDc0ODQ2NCwiZXhwIjoxNjc0NzUyMDY0fQ.UdHZlTjLvKZz0nozyVc9JCsBnCVu4vw7IE_IUJIqpW0' \
--data-raw ''
```
Response:
```
{
    "message": "success",
    "data": [
        {
            "mean": 30,
            "min": 30,
            "max": 30,
            "department": "Administration",
            "sub_department": "Agriculture"
        },
        {
            "mean": 100000,
            "min": 90000,
            "max": 110000,
            "department": "Banking",
            "sub_department": "Loan"
        },
        {
            "mean": 200000000,
            "min": 200000000,
            "max": 200000000,
            "department": "Engineering",
            "sub_department": "Devops"
        },
        {
            "mean": 123757.5,
            "min": 30,
            "max": 240000,
            "department": "Engineering",
            "sub_department": "Platform"
        },
        {
            "mean": 35015,
            "min": 30,
            "max": 70000,
            "department": "Operations",
            "sub_department": "CustomerOnboarding"
        }
    ]
}
```
### 7. Delete api
```
curl --silent --location --request DELETE 'http://localhost:3004/api/employee/11' \
--header 'Content-Type: application/json' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InVzZXIxIiwiRW1haWwiOiJ1c2VyMUBleGFtcGxlLmNvbSIsImlhdCI6MTY3NDY3OTY1NywiZXhwIjoxNjc0NjgzMjU3fQ.Zoti72UoEWuMCkPCJS7LnWrPP5dnqC5WeBf62QTSHyA' \
--data-raw ''
```
Response:
```
{
    "message": "success"
}
```
or
```
{
    "error": "does not exist"
}
```