# API Documentation

## GET /lyrics?title={title}&artist={artist}
Searches for lyrics based on title and artist.

**Query Parameters**
- `title` (string, required)

**Response**
```json
{
  "title": "Against the kitchen floor",
  "lyrics": "because it has to be all about wills problems"
}
