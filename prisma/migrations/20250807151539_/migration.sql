/*
  Warnings:

  - You are about to drop the column `lengthHeight` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `packageHeight` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `packageWeight` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `packageWidth` on the `Food` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Food` DROP COLUMN `lengthHeight`,
    DROP COLUMN `packageHeight`,
    DROP COLUMN `packageWeight`,
    DROP COLUMN `packageWidth`,
    ADD COLUMN `packageSize` VARCHAR(191) NULL;
