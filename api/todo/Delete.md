### Delete todo 

### Request
POST /v1/todo

### Request Body
```javascript
 query: "mutation {\n  destroy(id: 3) {\n    id\n    value\n  }\n}",
  variables: {}

```

### Response 
```javascript
{
    "data": {
        "update": {
            "id": 3,
            "value": "test55"
        }
    }
}
```

### Error Response

```javascript
{
    "errors": [
        "ENTITY_NOT_EXIST"
    ],
    "data": {
        "update": null
    }
}
```

### cURL example
```javascript
curl --location --request POST 'localhost:3000/v1/todo' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"mutation {\n  destroy(id: 3) {\n    id\n    value\n  }\n}","variables":{}}'
```