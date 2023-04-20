import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './company.entity';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from './dtos/create.company.dto';

@Injectable()
export class CompaniesService {
    constructor(@InjectRepository(Company) private repo: Repository<Company>) {}

    create(companyDto: CreateCompanyDto) {
        const company = this.repo.create(companyDto);
        return this.repo.save(company);
    }

    getAll() {
        return this.repo.find();
    }
}