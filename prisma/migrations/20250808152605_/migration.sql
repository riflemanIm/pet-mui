-- CreateTable
CREATE TABLE `SpecialNeeds` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SpecialNeeds_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FoodSpecialNeeds` (
    `foodId` INTEGER NOT NULL,
    `specialNeedsId` INTEGER NOT NULL,

    PRIMARY KEY (`foodId`, `specialNeedsId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `food_imgs_add` (
    `food_id` INTEGER NOT NULL,
    `img` VARCHAR(256) NOT NULL,

    PRIMARY KEY (`food_id`, `img`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FoodSpecialNeeds` ADD CONSTRAINT `FoodSpecialNeeds_foodId_fkey` FOREIGN KEY (`foodId`) REFERENCES `foods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodSpecialNeeds` ADD CONSTRAINT `FoodSpecialNeeds_specialNeedsId_fkey` FOREIGN KEY (`specialNeedsId`) REFERENCES `SpecialNeeds`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `food_imgs_add` ADD CONSTRAINT `food_imgs_add_food_id_fkey` FOREIGN KEY (`food_id`) REFERENCES `foods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
