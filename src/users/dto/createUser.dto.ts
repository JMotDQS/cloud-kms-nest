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

/*export class CreateUserDto {
	@IsNotEmpty({
		message: 'Firstname is required'
	})
	@IsString()
	@MinLength(2)
	@MaxLength(30)
	firstname: string;

	@IsNotEmpty({
		message: 'Lastname is required'
	})
	@IsString()
	@MinLength(2)
	@MaxLength(30)
	lastname: string;

	@IsNotEmpty({
		message: 'Email is required'
	})
	@IsEmail()
	email: string;

	@IsNotEmpty({
		message: 'Password is required'
	})
	@MinLength(6)
	@MaxLength(20)
	@Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
		message: 'Password is too weak',
	})
	password: string;
}*/
