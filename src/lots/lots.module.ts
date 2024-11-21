import { Module } from '@nestjs/common';
import { LotsController } from './lots.controller';
import { LotsService } from './lots.service';
import { lotsProviders } from './lots.providers';
import { DatabaseModule } from 'src/database.module';

@Module({
	imports: [DatabaseModule],
	controllers: [LotsController],
	providers: [
		LotsService,
		...lotsProviders,
	]
})
export class LotsModule {}