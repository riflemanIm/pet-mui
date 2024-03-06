/*
  Warnings:

  - You are about to drop the column `ordered_at` on the `foods` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `foods` DROP COLUMN `ordered_at`,
    ADD COLUMN `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `published_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);
