import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LotsModule } from './lots/lots.module';

@Module({
	imports: [UsersModule, LotsModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
