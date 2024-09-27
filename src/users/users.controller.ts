import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')// handles routing for anything going to the /users route(directory)
export class UsersController {
	/*
		GET /users - gets all users
		GET /users/:id - gets specific user
		POST /users - adds a new user
		PUT/PATCH /users/:id - updates a specific user
		DELETE /users/:id - deletes a specific user
	*/

	/*@Get() // GET /users
	findAll() {
		return [];
	}*/

	@Get() // GET /users or /users?role=value
	findAll(@Query('role') role?: 'SECURITY SUPERVISOR' | 'SECURITY GUARD' | 'DRIVEAWAY' | 'ADMIN') {
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
