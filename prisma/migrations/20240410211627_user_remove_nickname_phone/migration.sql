/*
  Warnings:

  - You are about to drop the column `nickname` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `nickname` ON `users`;

-- DropIndex
DROP INDEX `phone` ON `users`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `nickname`,
    DROP COLUMN `phone`;
