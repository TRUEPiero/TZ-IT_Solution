import { Injectable } from "@nestjs/common";

import db from "../../lib/prisma.js";
import { Profile } from "./entity.model.js";

@Injectable()
export class ProfileRepository {
    public async getByID(id: number) {
        const res = await db.profile.findFirst({
            where: {
                id
            },
            include: {
                experience: {
                    include: {
                        company: true
                    }
                },
                projects: true,
                skills: {
                    include: {
                        skill: true
                    }
                },
            }
        })        
        if(!res) return null;
        
        return new Profile(res);
    }
}