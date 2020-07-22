import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Speaker } from './speaker.entity';

@Entity()
export class Talk {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column()
  date: Date;

  @Column()
  image: string;

  @ManyToMany(
    type => Speaker,
    speaker => speaker.talks,
  )
  @JoinTable()
  speakers: Speaker[];
}
