import { Injectable } from "@nestjs/common";
import { ProfileRepository } from "./repository.js";
import { NotFoundError } from "../../lib/error.js";

@Injectable()
export class ProfileService {
    constructor (
        private repo: ProfileRepository
    ) {}

    public async getMe() {
        const profile = await this.repo.getByID(1);
        if(!profile) throw new NotFoundError('PROFILE');

        return profile;
    }

}