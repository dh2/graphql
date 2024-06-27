# Use Cases

```graphql

{
  product(id: "123-4") {
    name
    description
    image {
      url
      description
      descriptionHTML: description(format: HTML)
      thumbnailUrl
    }
  }  
}
```

```json

{
  "product": {
    "name": "Blackbook",
    "description": "A great computer"
    "image": {
        "url": "https://example.com/abc.png",
        "description": "Blackbook Front View",
        "thumbnailUrl": "https://example.com/abc-xs-xs.png"
    }
  }  
}
```