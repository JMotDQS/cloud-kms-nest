import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LotsModule } from './lots/lots.module';

@Module({
	imports: [LotsModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
