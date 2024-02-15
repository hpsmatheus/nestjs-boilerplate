import { Controller, Get } from '@nestjs/common';
import ExampleService from './example.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SwaggerResponse } from 'src/core/swagger-response';
import ExampleResponse from 'src/typings/example/example.response.dto';

@Controller('example')
@ApiTags('Example')
export default class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  @ApiResponse(SwaggerResponse.Ok(ExampleResponse))
  @ApiResponse(SwaggerResponse.InternalError)
  public example(): ExampleResponse {
    return this.exampleService.example();
  }

  @Get('/error')
  @ApiResponse(SwaggerResponse.Ok(ExampleResponse))
  @ApiResponse(SwaggerResponse.InternalError)
  public error(): ExampleResponse {
    throw new Error('Error example');
  }
}
