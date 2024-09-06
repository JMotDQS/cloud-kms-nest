import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { LotsModule } from './lots/lots.module';

@Module({
	imports: [
		/*TypeOrmModule.forRoot({
			type: 'mssql',
			host: 'localhost',
			port: 1433,
			username: 'test_kms_user',
			password: 'my_password',
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
