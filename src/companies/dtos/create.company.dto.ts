import { IsNumber, IsString, Min } from 'class-validator';

export class CreateCompanyDto {
    @IsNumber()
    @Min(0)
    nit: number;

    @IsString()
    name: string;

    @IsString()
    address: string;

    @IsNumber()
    @Min(0)
    telephone: number;
}