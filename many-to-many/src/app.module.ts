import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModule } from './question/question.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type":"mysql",
      "host":"localhost",
      "port":3306,
      "username":"root",
      "password":"Misql8",
      "database":"entities",
      "entities":[__dirname + "/**/**/**.entity{.ts,.js}"],
      // ["dist/**/**.entity{.ts,.js}"],
      "synchronize":true
    }),
    QuestionModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
