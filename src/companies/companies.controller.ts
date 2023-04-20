import {
    Controller,
    Post,
    Body,
    UseGuards,
    Patch,
    Param,
    Get,
    Query,
  } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { CompanyDto } from './dtos/company.dto';
import { CreateCompanyDto } from './dtos/create.company.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
  
  @Controller('companies')
  export class CompaniesController {
    constructor(private companiesService: CompaniesService) {}

    @Post()
    // @UseGuards(AuthGuard)
    @Serialize(CompanyDto)
    createCompany(@Body() body: CreateCompanyDto) {
      console.log('body', body);
        return this.companiesService.create(body);
    }

    @Get()
    getAllCompanies() {
      return this.companiesService.getAll();
    }
  }