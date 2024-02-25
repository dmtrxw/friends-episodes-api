# Friends Episodes API

List and randomize friends episode.

URL:
[https://friends-episodes-api.vercel.app](https://friends-episodes-api.vercel.app)

Episode Schema:

```json
{
    "code": "string",
    "season": "number",
    "no_in_season": "number",
    "title": "string",
    "synopsis": "string",
    "image_url": "string",
    "netflix_url": "string"
}
```

## Available endpoints

JSON

-   `GET /seasons/:season/episodes`, returns array of `Episodes` from given `:season`
-   `GET /seasons/:season/episodes/:noInSeason`, returns object of `Episode`
-   `GET /randomize`, randomize an episode and returns the `Episode`
-   `GET /randomize-redirect`, randomize an episode and directly takes you to Netflix (Experimental)
