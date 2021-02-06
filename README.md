# movieql

Movie API with GraphQL

---

```graphql
query {
  movies(limit: 2, rating: 6.2) {
    id
    title
    rating
  }
}
```

```graphql
query {
  movie(id: 27023) {
    title
    rating
    description_intro
  }
  suggestions(id: 27023) {
    medium_cover_image
    rating
  }
}
```
