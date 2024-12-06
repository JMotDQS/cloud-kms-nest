import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/createUser.dto";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
	constructor(
		@InjectModel(User)
		private userModel: typeof User
	) {}

	create(
		createUserDto: CreateUserDto
	) {
		return this.userModel.create({ ...createUserDto });
	}
}