import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LotsModule } from './lots/lots.module';
import { SequelizeModule } from '@nestjs/sequelize';

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
		/*TypeOrmModule.forRoot({
			type: 'mssql',
			host: 'localhost',
			port: 1433,
			username: '',
			password: '',
			database: 'kms_cloud',
			entities: [],
			synchronize: true,
		}),*/
		UsersModule,
		LotsModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
