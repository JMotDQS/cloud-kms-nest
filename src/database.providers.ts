
import { Sequelize } from 'sequelize-typescript';
import { Lot } from './lots/lot.entity';

export const databaseProviders = [
	{
		provide: 'SEQUELIZE',
		useFactory: async () => {
		const sequelize = new Sequelize({
			dialect: 'mysql',
			host: 'localhost',
			port: 3369,
			username: 'root',
			password: 'L0rdOfL1ghtn!ng',
			database: 'kms_v2_mysql',
		});
		sequelize.addModels([Lot]);
		await sequelize.sync();
		return sequelize;
		},
	},
];