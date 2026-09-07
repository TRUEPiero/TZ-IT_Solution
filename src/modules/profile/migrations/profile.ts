import db from '../../../lib/prisma.js';

async function main() {
  const profile = await db.profile.create({
    data: {
      name: 'Vladislav',
      description: 'Fullstack Web Developer',
      links: [
        'https://github.com/TRUEPiero/',
      ],
      achievements: [
        'Developed web applications',
      ]
    }
  });

  const typescript = await db.skill.create({
    data: {
      title: 'TypeScript'
    }
  });

  const javascript = await db.skill.create({
    data: {
      title: 'JavaScript'
    }
  });

  const nestjs = await db.skill.create({
    data: {
      title: 'NestJS'
    }
  });

  const prisma = await db.skill.create({
    data: {
      title: 'Prisma'
    }
  });

  const company = await db.company.create({
    data: {
      title: 'iRidi'
    }
  });

  await db.project.create({
    data: {
      title: 'Holder',
      link: 'https://github.com/TRUEPiero/holder-backend',
      technologies: [
        'TypeScript',
        'Elysia',
        'Prisma',
        'PostgreSQL',
        'Docker',
        'Redis',
        'grammyJS'        
      ],
      profileId: profile.id
    }
  });

  await db.experience.create({
    data: {
      position: 'Web Developer',
      responsibilities: 'Development and maintenance of web applications',
      startDate: new Date('2024-01-01'),
      endDate: null,
      profileId: profile.id,
      companyId: company.id
    }
  });

  await db.profileSkill.createMany({
    data: [
      {
        profileId: profile.id,
        skillId: typescript.id,
        level: 'EXPERT'
      },
      {
        profileId: profile.id,
        skillId: javascript.id,
        level: 'ADVANCED'
      },
      {
        profileId: profile.id,
        skillId: nestjs.id,
        level: 'INTERMEDIATE'
      },
      {
        profileId: profile.id,
        skillId: prisma.id,
        level: 'ADVANCED'
      }
    ]
  });
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect());