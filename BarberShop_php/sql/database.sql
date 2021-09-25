DROP DATABASE IF EXISTS barbershop;

CREATE DATABASE barbershop;

USE barbershop;


--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
CREATE TABLE IF NOT EXISTS `user_role` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `role_type` varchar(100) NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB;

--
-- insert data into table `user_role`
--

INSERT INTO `user_role` (`role_id`, `role_type`) VALUES
(1, 'ADMIN'),
(2, 'BARBER'),
(3, 'USER');



DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `Contact_Number` varchar(50) NOT NULL,
  `role` int(11) NOT NULL,
  `password` varchar(250) NOT NULL,
  `create_date` date NOT NULL,
  `is_active` tinyint(4) NOT NULL,
  PRIMARY KEY (`user_id`),
  KEY `user_role_fk` (`role`)
) ENGINE=InnoDB;
--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_role_fk` FOREIGN KEY (`role`) REFERENCES `user_role` (`role_id`);


--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
CREATE TABLE IF NOT EXISTS `service` (
  `service_id` int(11) NOT NULL AUTO_INCREMENT,
  `service_label` varchar(50) NOT NULL,
  `service_description` varchar(100) NOT NULL,
  `rate` int(11) NOT NULL,
  PRIMARY KEY (`service_id`)
) ENGINE=InnoDB;

--
-- Table structure for table `shift_details`
--

DROP TABLE IF EXISTS `shift_details`;
CREATE TABLE IF NOT EXISTS `shift_details` (
  `shift_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `start_date_time` datetime NOT NULL,
  `end_date_time` datetime NOT NULL,
  PRIMARY KEY (`shift_id`),
  KEY `shifT_user_id_fk` (`user_id`)
) ENGINE=InnoDB;

--
-- Constraints for table `shift_details`
--
ALTER TABLE `shift_details`
  ADD CONSTRAINT `shifT_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
CREATE TABLE IF NOT EXISTS `booking` (
  `booking_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL,
  `barber_id` int(11) NOT NULL,
  `booking_date_time` datetime NOT NULL,
  `booking_status` varchar(100) NOT NULL,
  `amount` int(11) NOT NULL,
  `comments` varchar(1000) NOT NULL,
  PRIMARY KEY (`booking_id`),
  KEY `booking_customerid_fk` (`customer_id`),
  KEY `booking_barberid_fk` (`barber_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `booking_barberid_fk` FOREIGN KEY (`barber_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `booking_customerid_fk` FOREIGN KEY (`customer_id`) REFERENCES `user` (`user_id`);

--
-- Table structure for table `booking_service`
--

DROP TABLE IF EXISTS `booking_service`;
CREATE TABLE IF NOT EXISTS `booking_service` (
  `booking_service_id` int(11) NOT NULL AUTO_INCREMENT,
  `booking_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  PRIMARY KEY (`booking_service_id`),
  KEY `booking_service_booking_id_fk` (`booking_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Constraints for table `booking_service`
--
ALTER TABLE `booking_service`
  ADD CONSTRAINT `booking_service_booking_id_fk` FOREIGN KEY (`booking_id`) REFERENCES `booking` (`booking_id`),
  ADD CONSTRAINT `booking_service_service_id_fk` FOREIGN KEY (`booking_service_id`) REFERENCES `service` (`service_id`);
