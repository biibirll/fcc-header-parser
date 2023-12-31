# FCC Header Parser

This project is a header parser that returns relevant data about the requesting client. The project was designed as a solution to FreeCodeCamp's [Back End Development and APIs Certification](https://www.freecodecamp.org/learn/back-end-development-and-apis/#back-end-development-and-apis-projects).

The header parser has only one endpoint, `/api/whoami`, which returns a JSON response containing the following data:

- ipaddress: a string representing the requesting client's IP address.
- language: a string representing one or more preferred languages sent by the client in the request headers, as defined in [MDN's documentation on Accept-Language header field](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language).
- software: a string representing the client's user agent, defined in the User-Agent field.

## Setting up locally

1. Clone the repo with `git clone https://github.com/biibirll/fcc-header-parser.git`.
2. Navigate to the cloned directory using `cd fcc-header-parser`.
3. Install the dependencies by running `yarn`.
4. Watch for changes, rebuild the project and run the server with `yarn dev`.