# API Project: Timestamp Microservice

-   The API endpoint is GET [project_url]/api/:date_string?

-   A date string is valid if can be successfully parsed by new Date(date_string).

-   If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.

-   If the date string is valid the api returns a JSON having the structure e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}

-   If the date string is invalid the api returns a JSON having the structure
    {"error" : "Invalid Date" }.

### Example Usage:

-   https://abzo-timestamp-microservice.herokuapp.com/api/2015-12-25
-   https://abzo-timestamp-microservice.herokuapp.com/api/1450137600

### Example Output:

{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}
