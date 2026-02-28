// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "s-pet",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 8080",
      cwd: "/mnt/disk-1/www/s-pet.ru",
      env: { NODE_ENV: "production" },
    },
  ],
};
