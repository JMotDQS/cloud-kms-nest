import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { LotsModule } from './lots/lots.module';

@Module({
	imports: [
		SequelizeModule.forRoot({
			dialect: 'mysql',
			host: 'localhost',
			port: 3396,
			username: 'root',
			password: 'L0rdOfL1ghtn!ng',
			database: 'kms_v2_mysql',
			models: [],
		}),
		UsersModule,
		LotsModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
