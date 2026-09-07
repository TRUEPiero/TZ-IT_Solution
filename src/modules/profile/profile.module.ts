import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProfileResolver } from './profile.resolver.js';
import { ProfileRepository } from './repository.js';
import { ProfileService } from './service.js';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
        }),
    ],
    providers: [
        ProfileResolver,
        ProfileRepository,
        ProfileService
    ]
})

export class ProfileModule {}


