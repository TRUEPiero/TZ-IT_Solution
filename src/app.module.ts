import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';

import { ProfileModule } from './modules/profile/profile.module.js';
import { ExperienceModule } from './modules/experiense/experience.module.js';
import { SkillModule } from './modules/skill/skill.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ProfileModule,
    ExperienceModule,
    SkillModule
  ],
})
export class AppModule {}

