### Query todos list

### Request
POST /v1/todo

### Request Body
```javascript
  query: "{  todo {    value    id    status  }  }",
  variables: {}
```

### Response
```javascript
{
    "data": {
        "todo": [
            {
                "value": "buy milk",
                "id": 1,
                "status": "ACTIVE"
            },
            {
                "value": "visit doctor",
                "id": 3,
                "status": "ACTIVE"
            }
        ]
    }
}
```