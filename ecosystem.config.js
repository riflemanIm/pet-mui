// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "next-app",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      cwd: "/mnt/disk-1/www/s-pet.ru",
      env: { NODE_ENV: "production" },
    },
  ],
};
