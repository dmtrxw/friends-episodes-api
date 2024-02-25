# Friends Episodes API

List and randomize friends episode.

URL:  
[https://friends-episodes.vercel.app](https://friends-episodes.vercel.app)

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

-   `/seasons/:season/episodes`, returns array of `Episodes` from given `:season`
-   `/seasons/:season/episodes/:noInSeason`, returns object of `Episode`
-   `/randomize`, randomize an episode and returns the `Episode`
-   `/randomize-redirect`, randomize an episode and directly takes you to Netflix
