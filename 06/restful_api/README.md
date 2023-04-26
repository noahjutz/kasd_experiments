# RESTful APIs

An API is restful when it complies with the REST architectural style.

## REST Constraints

1. Uniform interface

   1. Resource identification

      API endpoints are URLs.

   1. Intuitive Update & Delete

      In accordance with HATEOAS, endpoints pertaining to update & delete operations can be discovered in a previously received object.

   1. Self-descriptive messages

      Requests and responses should be formatted in a self-explanatory way.

   1. HATEOAS

      Responses contain related API endpoints, such that every possible endpoint can be discovered from the entry point URL.

1. Client-Server decoupling

   The server is decoupled from the client. API responses are formatted in JSON, abstracting the internal data representation.

1. Stateless

   The API Server doesn't retain information.

1. Cacheable

   Responses define themselves as either cacheable or non-cacheable.

1. Layered system

   Neither the client nor the server can tell if there are layers between them.

1. Code on demand (optional)

   The ability to send executable code from the server to the client when requested, extending client functionality.

## Further reading

- [REST - Wikipedia](https://en.wikipedia.org/wiki/Representational_state_transfer)
- [RESTful API - AWS](https://aws.amazon.com/what-is/restful-api/)
- [REST API - IBM](https://www.ibm.com/topics/rest-apis)
- [REST API - RHEL](https://www.redhat.com/en/topics/api/what-is-a-rest-api)
