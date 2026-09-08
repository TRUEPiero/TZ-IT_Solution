import fs from "fs";
import db from "../../../lib/prisma.js";

type SeedData = {
  profile: {
    name: string;
    description: string;
    links: string[];
    achievements: string[];
  };

  skills: {
    title: string;
    level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "EXPERT";
  }[];

  companies: {
    title: string;
  }[];

  projects: {
    title: string;
    link: string;
    technologies: string[];
  }[];

  experience: {
    position: string;
    responsibilities: string;
    startDate: string;
    endDate: string | null;
    company: string;
  }[];
};

async function readFile() {
  const file = fs.readFileSync(new URL("./json/profile.json", import.meta.url), 'utf-8');
  const data: SeedData = JSON.parse(file);

  return data;
}

async function writeToDB(data: SeedData) {
  const profile = await db.profile.create({
    data: {
      name: data.profile.name,
      description: data.profile.description,
      links: data.profile.links.join('\\n'),
      achievements: data.profile.achievements.join('\\n'),
    },
  });

  const skills = await Promise.all(
    data.skills.map(skill =>
      db.skill.create({
        data: {
          title: skill.title,
        },
      })
    )
  );

  const companies = await Promise.all(
    data.companies.map(company =>
      db.company.create({
        data: {
          title: company.title,
        },
      })
    )
  );

  await db.project.createMany({
    data: data.projects.map(project => ({
      title: project.title,
      link: project.link,
      technologies: project.technologies.join('\\n'),
      profileId: profile.id,
    })),
  });

  await db.experience.createMany({
    data: data.experience.map(experience => {
      const company = companies.find(
        company => company.title === experience.company
      );

      if (!company) {
        throw new Error(
          `Company "${experience.company}" not found`
        );
      }

      return {
        position: experience.position,
        responsibilities: experience.responsibilities,
        startDate: new Date(experience.startDate),
        endDate: experience.endDate
          ? new Date(experience.endDate)
          : null,
        profileId: profile.id,
        companyId: company.id,
      };
    }),
  });

  await db.profileSkill.createMany({
    data: data.skills.map((skill, index) => ({
      profileId: profile.id,
      skillId: skills[index].id,
      level: skill.level,
    })),
  });
}

async function main() {
  const data = await readFile();

  await writeToDB(data);
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect());