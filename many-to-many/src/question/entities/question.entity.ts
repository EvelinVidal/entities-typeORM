import { MinLength } from "class-validator";
import { Category } from "src/category/entities/category.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"question"})
export class Question {
@PrimaryGeneratedColumn()
id:number;


@MinLength(10, {
    message: 'Title is too short',
  })
@Column() //pregunta
question:string;

// relación muchos a muchos con Category

@ManyToMany(()=>Category,categories=>categories.questions) //

// () => Category:  indica que la relación es con la entidad "Category". 
//.categories ---> ecategories es un nombre que se elige arbitrariamente y se utiliza 
// como un identificador para cada instancia de la entidad o modelo Category dentro de la relación. Es similar a definir una variable en una función y usarla para acceder a elementos de una colección. Este nombre no se usa posteriormente, solo se declara. 

//categories.questions ---> indica que en la entidad "Category", hay una propiedad llamada "questions" que se utiliza para representar esta relación.

category:Category[];// Esta propiedad se utiliza para almacenar la información de la relación "muchos a muchos" con el modelo Category. 
// Como se indica con Category[], es un arreglo de objetos de la clase Category, 
// lo que implica que puede haber múltiples categorías asociadas a este modelo.



}
