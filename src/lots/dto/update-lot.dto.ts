import { CreateLotDto } from "./create-lot.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateLotDto extends PartialType(CreateLotDto) {};