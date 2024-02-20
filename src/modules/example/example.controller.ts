import { Controller, Get, Query } from '@nestjs/common'
import ExampleService from './example.service'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { SwaggerResponse } from 'src/core/swagger-response'
import ExampleResponse from 'src/typings/example/example.response.dto'
import ExampleParams from 'src/typings/example/example.params.dto'

@Controller('example')
@ApiTags('Example')
export default class ExampleController {
	constructor(private readonly exampleService: ExampleService) {}

	@Get()
	@ApiResponse(SwaggerResponse.Ok(ExampleResponse))
	@ApiResponse(SwaggerResponse.InputValidationError)
	@ApiResponse(SwaggerResponse.InternalError)
	public example(@Query() params: ExampleParams): ExampleResponse {
		if (params.name === 'Maria') throw new Error('Invalid name!')
		return this.exampleService.example(params.name)
	}
}
