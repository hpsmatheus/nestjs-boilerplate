import ExampleResponse from 'src/typings/example/example.response.dto';

export default class ExampleService {
  public example(): ExampleResponse {
    return { message: 'Hello, World!' };
  }
}
