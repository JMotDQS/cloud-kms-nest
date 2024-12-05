import { IntegerDataType } from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
	@Column({
		primaryKey: true,
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		unique: true,
		allowNull: false,
	})
	pk_id: string;

	@Column({
		type: DataType.DATE,
		validate: {
			notEmpty: true
		},
		allowNull: false,
	})
	created_date: Date;

	@Column({
		type: DataType.DATE,
		allowNull: true,
	})
	updated_date: Date;

	@Column({
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	})
	first_name: string;

	@Column({
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	})
	last_name: string;


	@Column({
		allowNull: true,
	})
	middle_initial: string;

	@Column({
		allowNull: true,
	})
	email_address: string;

	@Column({
		allowNull: true,
	})
	pass_word: string;

	@Column({
		type: DataType.TINYINT,
		defaultValue: 0,
		allowNull: false,
	})
	change_password: IntegerDataType;

	@Column({
		type: DataType.TINYINT,
		defaultValue: 1,
		allowNull: false,
	})
	is_active: IntegerDataType;

	@Column({
		type: DataType.TINYINT,
		defaultValue: 0,
		allowNull: false,
	})
	is_admin: IntegerDataType;
}