import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { LotsService } from './lots.service';
import { ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { CreateLotDto } from './dto/create-lot.dto';
import { UpdateLotDto } from './dto/update-lot.dto';

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
	getLot(@Param('id', ParseIntPipe) id: number) {
		return this.lotsService.getLot(id);
	}

	@Post() // POST /lots
	createLot(@Body(ValidationPipe) createLotDto: CreateLotDto) {
		return this.lotsService.createLot(createLotDto);
	}

	@Patch(':id') // PUT/PATCH /lots/:id
	updateLot(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateLotDto: UpdateLotDto) {
		return this.lotsService.updateLot(id, updateLotDto);
	}

	@Delete(':id') // DELETE /lots/:id
	deleteLot(@Param('id', ParseIntPipe) id: number) {
		return this.lotsService.deleteLot(id);
	}
}
