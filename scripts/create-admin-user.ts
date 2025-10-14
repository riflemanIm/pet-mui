import md5 from 'md5';
import prisma from '../lib/prisma';

async function main() {
  const email = 'oleglambin@gmail.com';
  const password = 'rock11city';
  const name = 'Oleg';

  const result = await prisma.user.upsert({
    where: { email },
    update: {
      name,
      role: 'Admin',
      balance: '1000',
      password: md5(password)
    },
    create: {
      email,
      name,
      role: 'Admin',
      balance: '1000',
      password: md5(password)
    },
    select: { id: true, email: true, name: true, role: true, balance: true }
  });

  console.log('Admin user ensured:', result);
}

main()
  .catch((err) => {
    console.error('Failed to create admin user:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
