import { Lot } from "./lot.entity";

export const lotsProviders = [
	{
		provide: 'LOTS_REPOSITORY',
		useValue: Lot,
	}
]