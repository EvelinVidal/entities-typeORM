import { Question } from 'src/question/entities/question.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'category' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  

  
  @Column() // nombre de categoria
  nombre:string;


  
// relación muchos a muchos con Question
@ManyToMany(()=>Question,questions=>questions.category)
@JoinTable({name:"category_question"})
questions:Question[];

}
