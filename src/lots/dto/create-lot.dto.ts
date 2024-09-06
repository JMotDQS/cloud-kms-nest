import { IsInt, IsString, IsNotEmpty } from "class-validator";

export class CreateLotDto {
    @IsString()
    @IsNotEmpty()
    lot_name: string;

    @IsString()
    @IsNotEmpty()
    lot_address: string;

    @IsString()
    @IsNotEmpty()
    lot_city: string;

    @IsString()
    @IsNotEmpty()
    lot_state: string;

    @IsInt()
    @IsNotEmpty()
    lot_zip: number;

    @IsInt()
    @IsNotEmpty()
    lot_capacity: number;

    @IsInt()
    @IsNotEmpty()
    lot_active: number;

    @IsString()
    @IsNotEmpty()
    lot_man: string;
}