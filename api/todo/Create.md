### Create todo 

### Request
POST /v1/todo

### Request Body
```javascript

  query: "mutation {  add( value: \"test\") {    id    value  }}",
  variables: {}

```

### Response

```javascript
    {
    "data": {
        "add": {
            "id": 18,
            "value": "test"
        }
    }
}
```

### Error response
```javascipt
{ errors: [ '{"value":"TOO_HIGH"}' ], data: { add: null } }
```
### Error response
```javascipt
{ errors: "SERVER_ERROR" }
```

### cURL example
```bash
curl --location --request POST 'localhost:3000/v1/todo' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"mutation {\n  add( value: \"test\") {\n    id\n    value\n  }\n}","variables":{}}'
```