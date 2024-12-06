import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersService } from "./users.service";
import { UsersController } from './users.controller';
import { Models } from "src/models.db";

@Module({
	controllers: [UsersController],
	imports: [SequelizeModule.forFeature(Models)],
	providers: [UsersService],
})
export class UserModule{}