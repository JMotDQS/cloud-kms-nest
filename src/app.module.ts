import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { LotsModule } from './lots/lots.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
	imports: [
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
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'client'),
			exclude: ['api/*'],
		}),
		UsersModule,
		LotsModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
function forRoot(arg0: { rootPath: any; }): import("@nestjs/common").Type<any> | import("@nestjs/common").DynamicModule | Promise<import("@nestjs/common").DynamicModule> | import("@nestjs/common").ForwardReference<any> {
	throw new Error('Function not implemented.');
}

