
import { Injectable, Inject } from '@nestjs/common';
import { CreateLotDto } from './dto/create-lot.dto';
import { Lot } from './lot.entity';

@Injectable()
export class LotsService {
	constructor(
		@Inject('LOTS_REPOSITORY')
		private lotsRepository: typeof Lot
	) {}

	async findAll(): Promise<Lot[]> {
		return this.lotsRepository.findAll<Lot>();
	}
}