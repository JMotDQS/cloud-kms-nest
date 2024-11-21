import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Lots } from './lots.model';
import { LotsController } from './lots.controller';
import { LotsService } from './lots.service';

@Module({
	imports: [SequelizeModule.forFeature([Lots])],
	providers: [LotsService],
	controllers: [LotsController]
})
export class LotsModule {}