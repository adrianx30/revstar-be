import { Expose } from 'class-transformer';

export class CompanyDto {
    @Expose()
    nit: number;

    @Expose()
    name: string;

    @Expose()
    address: string;

    @Expose()
    telephone: number; 
  }
  