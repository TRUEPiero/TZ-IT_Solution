import { Query, Resolver } from '@nestjs/graphql';
import { Profile } from './entity.model.js';
import { ProfileService } from './service.js';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor (
    private profileService: ProfileService
  ) {}
  
  @Query(() => Profile)
  async profile(): Promise<Profile> {
    const me = await this.profileService.getMe();
    return me;
  }
}
