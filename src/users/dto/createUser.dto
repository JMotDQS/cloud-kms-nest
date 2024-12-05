import {
	IsEmail,
	IsNotEmpty,
	IsString,
	Matches,
	MaxLength,
	MinLength,
} from 'class-validator';

export class CreateUserDto {
	@IsNotEmpty({
		message: 'First name is required'
	})
	@IsString()
	@MinLength(2)
	@MaxLength(30)
	first_name: string;
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
