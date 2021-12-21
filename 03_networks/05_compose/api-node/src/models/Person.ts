import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Person {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column("varchar", { name: "first_name" })
  firstName: string;

  @Column("varchar", { name: "last_name" })
  lastName: string;

  @Column("int4")
  age: number;
}
