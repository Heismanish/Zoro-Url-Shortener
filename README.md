# Zoro : URL Shortener ⚔️

Zoro is a express app as of now which provides you with a shorter url as a replacement for your huge and hefty urls 🕶️

## Routes:

- POST at `/url` : Generates a new url(shortened version) for a provided URL in the form "example.com/random-id"
- GET at `/:id` : Redirects to the original URL.
- GET at `/url/analytics/:id` : Returns the clicks for the provided shortId.
