const md5 = require("md5");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

function parseUsersFromEnv() {
  const raw = String(process.env.ADMIN_USERS || "").trim();
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter(Boolean)
      .map((u) => ({
        email: String(u.email || "").trim(),
        password: String(u.password || "").trim(),
        name: u.name == null ? null : String(u.name),
      }))
      .filter((u) => u.email && u.password);
  } catch {
    return [];
  }
}

async function main() {
  const users = parseUsersFromEnv();
  if (users.length === 0) {
    console.error(
      "ADMIN_USERS is empty or invalid. Expected JSON array of users."
    );
    process.exit(1);
  }

  const results = [];

  for (const u of users) {
    const email = u.email.trim();
    const password = u.password.trim();
    const name = u.name == null ? null : String(u.name);

    const existing = await prisma.user.findFirst({
      where: { email },
      select: { id: true },
    });

    await prisma.user.upsert({
      where: { email },
      update: {
        name,
        role: "Admin",
        password: md5(password),
      },
      create: {
        email,
        name,
        role: "Admin",
        balance: "0",
        password: md5(password),
      },
    });

    results.push({ email, created: !existing });
  }

  for (const r of results) {
    console.log(`${r.created ? "CREATED" : "UPDATED"}: ${r.email}`);
  }
}

main()
  .catch((err) => {
    console.error("Failed to create admin users:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
