import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Talk } from './talk.entity';

@Entity()
export class Speaker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  twitter: string;

  @Column()
  image: string;

  @Column()
  bio: string;

  @Column()
  company: string;

  @ManyToMany(
    type => Talk,
    talk => talk.speakers,
  )
  talks: Talk[];
}
