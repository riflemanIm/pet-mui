/*
  Warnings:

  - A unique constraint covering the columns `[artikul]` on the table `foods` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `foods` MODIFY `artikul` VARCHAR(100) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `foods_artikul_key` ON `foods`(`artikul`);

-- AddForeignKey
ALTER TABLE `foods` ADD CONSTRAINT `foods_brand_id_fkey` FOREIGN KEY (`brand_id`) REFERENCES `brands`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `foods` ADD CONSTRAINT `foods_taste_id_fkey` FOREIGN KEY (`taste_id`) REFERENCES `tastes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `foods` ADD CONSTRAINT `foods_designed_for_id_fkey` FOREIGN KEY (`designed_for_id`) REFERENCES `designed_for`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `foods` ADD CONSTRAINT `foods_ingridient_id_fkey` FOREIGN KEY (`ingridient_id`) REFERENCES `ingridients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `foods` ADD CONSTRAINT `foods_hardness_id_fkey` FOREIGN KEY (`hardness_id`) REFERENCES `hardness`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `foods` ADD CONSTRAINT `foods_special_needs_id_fkey` FOREIGN KEY (`special_needs_id`) REFERENCES `special_needs`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `foods` ADD CONSTRAINT `foods_made_in_id_fkey` FOREIGN KEY (`made_in_id`) REFERENCES `country_made_in`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `food_feature` ADD CONSTRAINT `food_feature_food_id_fkey` FOREIGN KEY (`food_id`) REFERENCES `foods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `food_feature` ADD CONSTRAINT `food_feature_feature_id_fkey` FOREIGN KEY (`feature_id`) REFERENCES `features`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `food_pet_size` ADD CONSTRAINT `food_pet_size_food_id_fkey` FOREIGN KEY (`food_id`) REFERENCES `foods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `food_pet_size` ADD CONSTRAINT `food_pet_size_pet_size_id_fkey` FOREIGN KEY (`pet_size_id`) REFERENCES `pet_sizes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `food_type_treat` ADD CONSTRAINT `food_type_treat_food_id_fkey` FOREIGN KEY (`food_id`) REFERENCES `foods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `food_type_treat` ADD CONSTRAINT `food_type_treat_type_treat_id_fkey` FOREIGN KEY (`type_treat_id`) REFERENCES `type_treats`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `food_package` ADD CONSTRAINT `food_package_food_id_fkey` FOREIGN KEY (`food_id`) REFERENCES `foods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `food_package` ADD CONSTRAINT `food_package_package_id_fkey` FOREIGN KEY (`package_id`) REFERENCES `packages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `food_age` ADD CONSTRAINT `food_age_food_id_fkey` FOREIGN KEY (`food_id`) REFERENCES `foods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `food_age` ADD CONSTRAINT `food_age_age_id_fkey` FOREIGN KEY (`age_id`) REFERENCES `ages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_food_id_fkey` FOREIGN KEY (`food_id`) REFERENCES `foods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ratings` ADD CONSTRAINT `ratings_food_id_fkey` FOREIGN KEY (`food_id`) REFERENCES `foods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ratings` ADD CONSTRAINT `ratings_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
