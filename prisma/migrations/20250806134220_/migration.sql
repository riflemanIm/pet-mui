-- CreateTable
CREATE TABLE `Food` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `artikul` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `price` DOUBLE NOT NULL DEFAULT 0.0,
    `priceDiscount` DOUBLE NOT NULL DEFAULT 0.0,
    `vat` BOOLEAN NOT NULL DEFAULT false,
    `isPromo` BOOLEAN NOT NULL DEFAULT false,
    `ozonId` VARCHAR(191) NULL,
    `barcode` VARCHAR(191) NULL,
    `packageWeight` INTEGER NULL,
    `packageWidth` INTEGER NULL,
    `packageHeight` INTEGER NULL,
    `lengthHeight` INTEGER NULL,
    `img` VARCHAR(191) NULL,
    `imgUrl` VARCHAR(191) NULL,
    `imgs` JSON NULL,
    `feature` VARCHAR(191) NULL,
    `annotation` VARCHAR(191) NULL,
    `keywords` VARCHAR(191) NULL,
    `composition` VARCHAR(191) NULL,
    `materials` VARCHAR(191) NULL,
    `weight` INTEGER NULL,
    `quantity` INTEGER NULL,
    `quantityPackages` INTEGER NULL,
    `possibleStartMonth` INTEGER NULL,
    `numInPackage` INTEGER NULL,
    `proteins` DOUBLE NULL,
    `fats` DOUBLE NULL,
    `contentOfMeet` INTEGER NULL,
    `energyValue` INTEGER NULL,
    `expiration` INTEGER NULL,
    `type` VARCHAR(191) NULL,
    `brandId` INTEGER NULL,
    `tasteId` INTEGER NULL,
    `designedForId` INTEGER NULL,
    `ingredientId` INTEGER NULL,
    `hardnessId` INTEGER NULL,
    `specialNeedsId` INTEGER NULL,
    `madeInId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Brand` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Brand_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Taste` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Taste_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DesignedFor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `DesignedFor_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ingredient` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ingredient_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hardness` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Hardness_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SpecialNeeds` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SpecialNeeds_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MadeIn` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `MadeIn_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Age` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Age_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Package` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Package_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TypeTreat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `TypeTreat_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PetSize` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PetSize_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Feature` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Feature_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FoodAge` (
    `foodId` INTEGER NOT NULL,
    `ageId` INTEGER NOT NULL,

    PRIMARY KEY (`foodId`, `ageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FoodPackage` (
    `foodId` INTEGER NOT NULL,
    `packageId` INTEGER NOT NULL,

    PRIMARY KEY (`foodId`, `packageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FoodTypeTreat` (
    `foodId` INTEGER NOT NULL,
    `typeTreatId` INTEGER NOT NULL,

    PRIMARY KEY (`foodId`, `typeTreatId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FoodPetSize` (
    `foodId` INTEGER NOT NULL,
    `petSizeId` INTEGER NOT NULL,

    PRIMARY KEY (`foodId`, `petSizeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FoodFeature` (
    `foodId` INTEGER NOT NULL,
    `featureId` INTEGER NOT NULL,

    PRIMARY KEY (`foodId`, `featureId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Food` ADD CONSTRAINT `Food_brandId_fkey` FOREIGN KEY (`brandId`) REFERENCES `Brand`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Food` ADD CONSTRAINT `Food_tasteId_fkey` FOREIGN KEY (`tasteId`) REFERENCES `Taste`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Food` ADD CONSTRAINT `Food_designedForId_fkey` FOREIGN KEY (`designedForId`) REFERENCES `DesignedFor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Food` ADD CONSTRAINT `Food_ingredientId_fkey` FOREIGN KEY (`ingredientId`) REFERENCES `ingredient`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Food` ADD CONSTRAINT `Food_hardnessId_fkey` FOREIGN KEY (`hardnessId`) REFERENCES `Hardness`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Food` ADD CONSTRAINT `Food_specialNeedsId_fkey` FOREIGN KEY (`specialNeedsId`) REFERENCES `SpecialNeeds`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Food` ADD CONSTRAINT `Food_madeInId_fkey` FOREIGN KEY (`madeInId`) REFERENCES `MadeIn`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodAge` ADD CONSTRAINT `FoodAge_foodId_fkey` FOREIGN KEY (`foodId`) REFERENCES `Food`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodAge` ADD CONSTRAINT `FoodAge_ageId_fkey` FOREIGN KEY (`ageId`) REFERENCES `Age`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodPackage` ADD CONSTRAINT `FoodPackage_foodId_fkey` FOREIGN KEY (`foodId`) REFERENCES `Food`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodPackage` ADD CONSTRAINT `FoodPackage_packageId_fkey` FOREIGN KEY (`packageId`) REFERENCES `Package`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodTypeTreat` ADD CONSTRAINT `FoodTypeTreat_foodId_fkey` FOREIGN KEY (`foodId`) REFERENCES `Food`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodTypeTreat` ADD CONSTRAINT `FoodTypeTreat_typeTreatId_fkey` FOREIGN KEY (`typeTreatId`) REFERENCES `TypeTreat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodPetSize` ADD CONSTRAINT `FoodPetSize_foodId_fkey` FOREIGN KEY (`foodId`) REFERENCES `Food`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodPetSize` ADD CONSTRAINT `FoodPetSize_petSizeId_fkey` FOREIGN KEY (`petSizeId`) REFERENCES `PetSize`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodFeature` ADD CONSTRAINT `FoodFeature_foodId_fkey` FOREIGN KEY (`foodId`) REFERENCES `Food`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodFeature` ADD CONSTRAINT `FoodFeature_featureId_fkey` FOREIGN KEY (`featureId`) REFERENCES `Feature`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
