import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
	/*
		GET /users
		GET /users/:id
		POST /users
		PUT/PATCH /users/:id
		DELETE /users/:id
	*/

	@Get() // GET /users
	findAll() {
		return [];
	}

	@Get(':id') // GET /users/:id
	findOne(@Param('id') id: string) {
		return { id };
	}

	@Post() // POST /users
	create(@Body() user: {}) {
		return user;
	}

	@Patch(':id') // PUT/PATCH /users/:id
	updateUser(@Param('id') id: string, @Body() userUpdate: {}) {
		return { id, ...userUpdate };
	}

	@Delete(':id') // DELETE /users/:id
	deleteUser(@Param('id') id: string) {
		return { id };
	}
} 
