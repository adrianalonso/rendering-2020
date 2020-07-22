import {
  Controller,
  Get,
  Render,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Talk } from './entity/talk.entity';
import { Speaker } from './entity/speaker.entity';

@Controller()
export class AppController {
  constructor(
    @InjectRepository(Talk) private talkRepository: Repository<Talk>,
    @InjectRepository(Speaker) private speakerRepository: Repository<Speaker>,
  ) {
    this.talkRepository = talkRepository;
    this.speakerRepository = speakerRepository;
  }

  @Get()
  @Render('index')
  async root() {
    const talks = await this.talkRepository.find({
      relations: ['speakers'],
    });

    return {
      list: talks,
    };
  }

  @Get('talk/:id')
  @Render('talk')
  async talk(@Param() params) {
    const talk = await this.talkRepository.findOne({
      relations: ['speakers'],
      where: { id: params.id },
    });

    if (!talk) {
      throw new NotFoundException();
    }

    return { talk };
  }

  @Get('speaker/:id')
  @Render('speaker')
  async speaker(@Param() params) {
    const speaker = await this.speakerRepository.findOne({
      relations: ['talks'],
      where: { id: params.id },
    });

    if (!speaker) {
      throw new NotFoundException();
    }

    return { speaker };
  }
}
