-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema booklist
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema booklist
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `booklist` DEFAULT CHARACTER SET utf8 ;
USE `booklist` ;

-- -----------------------------------------------------
-- Table `booklist`.`books`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `booklist`.`books` (
  `idbooks` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `author` VARCHAR(45) NOT NULL,
  `description` TINYTEXT NOT NULL,
  `task` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`idbooks`),
  UNIQUE INDEX `idbooks_UNIQUE` (`idbooks` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
