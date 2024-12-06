import {
	IsDate,
	IsEmail,
	IsNotEmpty,
	IsNumber,
	IsString,
	MaxLength,
	MinLength,
} from 'class-validator';

export class CreateUserDto {
	@IsNotEmpty()
	@IsDate()
	created_date: Date;

	@IsDate()
	updated_date: Date;

	@IsNotEmpty({
		message: 'Must have an employee id.'
	})
	@IsString()
	emp_id: string;

	@IsNotEmpty({
		message: 'First name is required'
	})
	@IsString()
	@MinLength(2)
	@MaxLength(30)
	first_name: string;

	@IsNotEmpty({
		message: 'Last name is required'
	})
	@IsString()
	@MinLength(2)
	@MaxLength(30)
	last_name: string;

	@IsString()
	@MinLength(2)
	@MaxLength(30)
	middle_initial: string;

	@IsString()
	@MinLength(2)
	@MaxLength(30)
	@IsEmail()
	email_address: string;

	@IsString()
	@MinLength(2)
	@MaxLength(30)
	pass_word: string;

	@IsNotEmpty()
	@IsNumber()
	change_password: number;

	@IsNotEmpty()
	@IsNumber()
	is_active: number;

	@IsNotEmpty()
	@IsNumber()
	is_admin: number;
}