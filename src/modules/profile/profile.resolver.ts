import { Query, Resolver } from '@nestjs/graphql';
import { Profile } from './profile.model.js';
import { ProfileService } from './service.js';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor (
    private profileService: ProfileService
  ) {}
  
  @Query(() => Profile)
  profile(): Profile {
    return {
      id: 1,
      name: "Vlad",
      description: "My description",
      links: [
        'https://example.com'
      ],
      skills: [],
      projects: [],
      experience: [],
      achievements: [],
    };
  }
}
