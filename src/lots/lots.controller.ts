import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { LotsService } from './lots.service';

@Controller('lots') // /lots
export class LotsController {
	constructor(private readonly lotsService: LotsService) {};
	/*
		GET /lots
		GET /lots/:id
		POST /lots
		PUT/PATCH /lots/:id
		DELETE /lots/:id
	*/

	@Get() // GET /lots or /lots?lot_active=value&lot_name=value
	getLots(@Query('lot_active') lot_active?: '1' | '0') {
		return this.lotsService.getLots(lot_active);
	}

	@Get(':id') // GET /lots/:id
	getLot(@Param('id') id: string) {
		return this.lotsService.getLot(parseInt(id));
	}

	@Post() // POST /lots
	createLot(@Body() lot: {lot_name: string, lot_address: string, lot_city: string, lot_state: string, lot_zip: number, lot_capacity: number, lot_active: number, lot_man: string}) {
		return this.lotsService.createLot(lot);
	}

	@Patch(':id') // PUT/PATCH /lots/:id
	updateLot(@Param('id') id: string, @Body() lotUpdate: {lot_name?: string, lot_address?: string, lot_city?: string, lot_state?: string, lot_zip?: number, lot_capacity?: number, lot_active?: number, lot_man?: string}) {
		return this.lotsService.updateLot(parseInt(id), lotUpdate);
	}

	@Delete(':id') // DELETE /lots/:id
	deleteLot(@Param('id') id: string) {
		return this.lotsService.deleteLot(parseInt(id));
	}
}
