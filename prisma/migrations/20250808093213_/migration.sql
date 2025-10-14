/*
  Warnings:

  - You are about to drop the `Food` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Food` DROP FOREIGN KEY `Food_hardnessId_fkey`;

-- DropForeignKey
ALTER TABLE `Food` DROP FOREIGN KEY `Food_ingredientId_fkey`;

-- DropForeignKey
ALTER TABLE `Food` DROP FOREIGN KEY `Food_tasteId_fkey`;

-- DropForeignKey
ALTER TABLE `FoodAge` DROP FOREIGN KEY `FoodAge_foodId_fkey`;

-- DropForeignKey
ALTER TABLE `FoodDesignedFor` DROP FOREIGN KEY `FoodDesignedFor_foodId_fkey`;

-- DropForeignKey
ALTER TABLE `FoodPackage` DROP FOREIGN KEY `FoodPackage_foodId_fkey`;

-- DropForeignKey
ALTER TABLE `FoodPetSize` DROP FOREIGN KEY `FoodPetSize_foodId_fkey`;

-- DropForeignKey
ALTER TABLE `FoodTypeTreat` DROP FOREIGN KEY `FoodTypeTreat_foodId_fkey`;

-- DropTable
DROP TABLE `Food`;

-- CreateTable
CREATE TABLE `foods` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `artikul` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `price` DOUBLE NOT NULL DEFAULT 0.0,
    `priceDiscount` DOUBLE NOT NULL DEFAULT 0.0,
    `vat` BOOLEAN NOT NULL DEFAULT false,
    `isPromo` BOOLEAN NOT NULL DEFAULT false,
    `ozonId` VARCHAR(191) NULL,
    `img` VARCHAR(191) NULL,
    `imgUrl` VARCHAR(191) NULL,
    `imgs` TEXT NULL,
    `feature` VARCHAR(191) NULL,
    `weight` INTEGER NULL,
    `quantity` INTEGER NULL,
    `quantityPackages` INTEGER NULL,
    `type` ENUM('Treat', 'Souvenirs', 'DryFood') NOT NULL,
    `expiration` INTEGER NULL,
    `annotation` TEXT NULL,
    `packageSize` VARCHAR(191) NULL,
    `tasteId` INTEGER NULL,
    `ingredientId` INTEGER NULL,
    `hardnessId` INTEGER NULL,
    `published_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `stock` INTEGER NOT NULL DEFAULT 0,

    INDEX `foods_tasteId_idx`(`tasteId`),
    INDEX `foods_ingredientId_idx`(`ingredientId`),
    INDEX `foods_hardnessId_idx`(`hardnessId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `balance` DECIMAL(15, 2) NOT NULL DEFAULT 0.0,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(256) NULL,
    `name` VARCHAR(256) NULL,
    `authType` ENUM('ConfirmCode', 'Password') NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_confirm_code` (
    `user_id` INTEGER NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `try_date` DATETIME(3) NULL,
    `uuid` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `uuid`(`uuid`),
    PRIMARY KEY (`user_id`, `uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `food_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `orderNum` INTEGER NOT NULL,
    `ordered_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `orders_food_id_idx`(`food_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ratings` (
    `food_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `score` TINYINT NOT NULL,
    `rated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `uniq_food_user_idx`(`food_id`, `user_id`),
    PRIMARY KEY (`food_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `foods` ADD CONSTRAINT `foods_tasteId_fkey` FOREIGN KEY (`tasteId`) REFERENCES `Taste`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `foods` ADD CONSTRAINT `foods_ingredientId_fkey` FOREIGN KEY (`ingredientId`) REFERENCES `ingredient`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `foods` ADD CONSTRAINT `foods_hardnessId_fkey` FOREIGN KEY (`hardnessId`) REFERENCES `Hardness`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodDesignedFor` ADD CONSTRAINT `FoodDesignedFor_foodId_fkey` FOREIGN KEY (`foodId`) REFERENCES `foods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodTypeTreat` ADD CONSTRAINT `FoodTypeTreat_foodId_fkey` FOREIGN KEY (`foodId`) REFERENCES `foods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodAge` ADD CONSTRAINT `FoodAge_foodId_fkey` FOREIGN KEY (`foodId`) REFERENCES `foods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodPackage` ADD CONSTRAINT `FoodPackage_foodId_fkey` FOREIGN KEY (`foodId`) REFERENCES `foods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodPetSize` ADD CONSTRAINT `FoodPetSize_foodId_fkey` FOREIGN KEY (`foodId`) REFERENCES `foods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_confirm_code` ADD CONSTRAINT `user_confirm_code_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_food_id_fkey` FOREIGN KEY (`food_id`) REFERENCES `foods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ratings` ADD CONSTRAINT `ratings_food_id_fkey` FOREIGN KEY (`food_id`) REFERENCES `foods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ratings` ADD CONSTRAINT `ratings_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
