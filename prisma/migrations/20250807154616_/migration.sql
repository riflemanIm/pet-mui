/*
  Warnings:

  - You are about to drop the column `img` on the `Food` table. All the data in the column will be lost.
  - You are about to alter the column `imgs` on the `Food` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Json`.

*/
-- AlterTable
ALTER TABLE `Food` DROP COLUMN `img`,
    MODIFY `imgUrl` TEXT NULL,
    MODIFY `imgs` JSON NULL;
