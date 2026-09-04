import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';

import { ProfileModule } from './modules/profile/profile.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [ProfileModule],
})
export class AppModule {}

