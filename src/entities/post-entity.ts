import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  author: string;

  @CreateDateColumn({ type: 'date' })
  creationDate: Date;
}
