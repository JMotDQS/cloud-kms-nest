import { Module } from '@nestjs/common';
import { LotsController } from './lots.controller';
import { LotsService } from './lots.service';
import { Column, CreatedAt, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Module({
	controllers: [LotsController],
	providers: [LotsService]
})

@Table
export class LotsModule extends Model {
	@PrimaryKey
	declare pk_id: string;

	@CreatedAt
	created_date: Date;

	@Column
	lot_name: string;

	@Column
	lot_address: string;

	@Column
	lot_city: string;

	@Column
	fk_g_states_pk_id: string;

	@Column
	lot_zip: string;

	@Column
	lot_capacity: number;

	@Column
	lot_active: number;

	@Column
	fk_manufacturers_pk_id: string;
}
