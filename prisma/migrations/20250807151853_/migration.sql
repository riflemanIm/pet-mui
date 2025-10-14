/*
  Warnings:

  - You are about to drop the column `composition` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `contentOfMeet` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `energyValue` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `fats` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `keywords` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `materials` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `numInPackage` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `possibleStartMonth` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `proteins` on the `Food` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Food` DROP COLUMN `composition`,
    DROP COLUMN `contentOfMeet`,
    DROP COLUMN `energyValue`,
    DROP COLUMN `fats`,
    DROP COLUMN `keywords`,
    DROP COLUMN `materials`,
    DROP COLUMN `numInPackage`,
    DROP COLUMN `possibleStartMonth`,
    DROP COLUMN `proteins`;
