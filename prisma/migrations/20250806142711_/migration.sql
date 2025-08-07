/*
  Warnings:

  - You are about to drop the column `designedForId` on the `Food` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Food` DROP FOREIGN KEY `Food_designedForId_fkey`;

-- AlterTable
ALTER TABLE `Food` DROP COLUMN `designedForId`;

-- CreateTable
CREATE TABLE `FoodDesignedFor` (
    `foodId` INTEGER NOT NULL,
    `designedForId` INTEGER NOT NULL,

    PRIMARY KEY (`foodId`, `designedForId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FoodDesignedFor` ADD CONSTRAINT `FoodDesignedFor_foodId_fkey` FOREIGN KEY (`foodId`) REFERENCES `Food`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodDesignedFor` ADD CONSTRAINT `FoodDesignedFor_designedForId_fkey` FOREIGN KEY (`designedForId`) REFERENCES `DesignedFor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
