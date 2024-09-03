import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('lots') // /lots
export class LotsController {
	/*
		GET /lots
		GET /lots/:id
		POST /lots
		PUT/PATCH /lots/:id
		DELETE /lots/:id
	*/

	@Get() // GET /lots or /lots?active=value&lot_name=value
	getLots(@Query('active') active?: '1' | '0') {
		return [];
	}

	@Get(':id') // GET /lots/:id
	getLot(@Param('id') id: string) {
		return {id};
	}

	@Post() // POST /lots
	create(@Body() lot: {}) {
		return lot;
	}

	@Patch(':id') // PUT/PATCH /lots/:id
	updateLot(@Param('id') id: string, @Body() lotUpdate: {}) {
		return { id, ...lotUpdate };
	}

	@Delete(':id') // DELETE /lots/:id
	deleteLot(@Param('id') id: string) {
		return { id };
	}
}
