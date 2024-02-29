-- CreateTable
CREATE TABLE `food_imgsadd` (
    `food_id` BIGINT NOT NULL,
    `img` VARCHAR(256) NOT NULL,

    PRIMARY KEY (`food_id`, `img`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `food_imgsadd` ADD CONSTRAINT `food_imgsadd_food_id_fkey` FOREIGN KEY (`food_id`) REFERENCES `foods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
