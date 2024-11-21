import { Column, CreatedAt, DataType, Model, NotNull, PrimaryKey, Table, Unique } from 'sequelize-typescript';

@Table
export class Lots extends Model {
	@Unique
	@PrimaryKey
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4
	})
	pk_id: string;

	@NotNull
	@CreatedAt
	@Column({
		allowNull: false,
	})
	created_date: Date;

	@NotNull
	@Column({
		allowNull: false,
	})
	lot_name: string;

	@Column
	lot_address: string;

	@Column
	lot_city: string;

	@NotNull
	@Column({
		allowNull: false,
	})
	fk_g_states_pk_id: string;

	@Column
	lot_zip: string;

	@NotNull
	@Column({
		defaultValue: 0,
		allowNull: false,
	})
	lot_capacity: number;

	@NotNull
	@Column({
		allowNull: false,
		defaultValue: 1,
	})
	lot_active: number;

	@NotNull
	@Column({
		allowNull: false,
	})
	fk_manufacturers_pk_id: string;
}