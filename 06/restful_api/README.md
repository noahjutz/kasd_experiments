# RESTful APIs

An API is restful when it complies with the REST architectural style, which is characterized by the following 6 constraints (particularized for modern RESTful web APIs):

## Uniform interface

4 Constraints pertaining to the request and response format:

### Resource identification

- API endpoints are URLs.

### Intuitive Update & Delete

In accordance with [HATEOAS](#hateoas), endpoints pertaining to update & delete operations can be discovered in a previously received object's metadata.

### Self-descriptive messages

Requests and responses should be formatted in a self-explanatory way.

### HATEOAS

Responses contain related API endpoints, such that every possible endpoint can be discovered from the entry point URL.

## Client-Server decoupling

The server is decoupled from the client. API responses are formatted in JSON, abstracting the internal data representation.

## Stateless

The API Server doesn't retain information.

## Cacheable

- Responses define themselves as either cacheable or non-cacheable.

## Layered system

The client can't tell if there are layers between it and the server.

## Code on demand (optional)

The ability to send executable code from the server to the client when requested, extending client functionality. 

## Further reading

- [REST - Wikipedia](https://en.wikipedia.org/wiki/Representational_state_transfer)
- [RESTful API - AWS](https://aws.amazon.com/what-is/restful-api/)
- [REST API - IBM](https://www.ibm.com/topics/rest-apis)
- [REST API - RHEL](https://www.redhat.com/en/topics/api/what-is-a-rest-api)
