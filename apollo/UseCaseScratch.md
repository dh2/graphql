# Use Cases

```graphql

{
  productById(id: "123-4") {
    name
    recommendedProducts(first: 5, next: "cde") {
        edges {
            node {
                name
                image {
                    url
                }
            }
        }
        pageInfo {
            hasNextPages(amount: 3) {
                cursor
            }
            hasPreviousPages(amount: 3) {
                cursor
            }
            hasNextPage
            hasPreviousPage
            endCursor
            startCursor
        }
    }
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
  "productById": {
    "name": "Blackbook",
    "recommendedProducts": {
        "edges": {
            "node": {
                "name": "USB to SD",
                "image": {
                    "url": "sd.png"
                }
            },
        "boughtTogetherPercentage": 5.7
        },
        "pageInfo": {
            "hasNextPages": [
                { "cursor": "ert" }
                { "cursor": "tyu" }
                { "cursor": "ewq" }
            ],
            "hasPreviousPages": [
                { "cursor": "ert" }
                { "cursor": "tyu" }
                { "cursor": "ewq" }
            ],
            "hasNextPage": true,
            "hasPreviousPage": false,
            "endCursor": null,
            "startCursor": null
        }
    },
    "description": "A great computer",
    "image": {
        "url": "https://example.com/abc.png",
        "description": "Blackbook Front View",
        "thumbnailUrl": "https://example.com/abc-xs-xs.png"
    }
  }  
}
```