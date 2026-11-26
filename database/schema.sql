-- Stratascend Analytics — MySQL 8 schema
-- Import via phpMyAdmin (or `mysql < schema.sql`), then run seed.sql.

CREATE DATABASE IF NOT EXISTS stratascend
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE stratascend;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS audit_logs;
DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS trainings;
DROP TABLE IF EXISTS resources;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS pages;
DROP TABLE IF EXISTS media;
DROP TABLE IF EXISTS settings;
DROP TABLE IF EXISTS users;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE users (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name          VARCHAR(120) NOT NULL,
  email         VARCHAR(190) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role          ENUM('admin','editor','viewer') NOT NULL DEFAULT 'viewer',
  created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE pages (
  id              INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title           VARCHAR(200) NOT NULL,
  slug            VARCHAR(200) NOT NULL UNIQUE,
  type            ENUM('page','post') NOT NULL DEFAULT 'page',
  content_html    LONGTEXT NULL,
  excerpt         VARCHAR(500) NULL,
  meta_title      VARCHAR(200) NULL,
  meta_desc       VARCHAR(500) NULL,
  featured_image  VARCHAR(500) NULL,
  published       TINYINT(1) NOT NULL DEFAULT 0,
  created_by      INT UNSIGNED NULL,
  created_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_pages_user FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE products (
  id              INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title           VARCHAR(200) NOT NULL,
  slug            VARCHAR(200) NOT NULL UNIQUE,
  description_html LONGTEXT NULL,
  price_cents     INT UNSIGNED NOT NULL DEFAULT 0,
  currency        VARCHAR(3) NOT NULL DEFAULT 'NGN',
  type            ENUM('ebook','template','solution') NOT NULL DEFAULT 'template',
  category        VARCHAR(100) NULL,
  tags            JSON NULL,
  images          JSON NULL,
  files           JSON NULL,
  stock           INT NULL,
  published       TINYINT(1) NOT NULL DEFAULT 0,
  created_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE resources (
  id              INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title           VARCHAR(200) NOT NULL,
  slug            VARCHAR(200) NOT NULL UNIQUE,
  description_html LONGTEXT NULL,
  price_cents     INT UNSIGNED NOT NULL DEFAULT 0,
  currency        VARCHAR(3) NOT NULL DEFAULT 'NGN',
  kind            ENUM('powerbi','excel','ebook') NOT NULL DEFAULT 'ebook',
  tags            JSON NULL,
  images          JSON NULL,
  files           JSON NULL,
  preview_url     VARCHAR(500) NULL,
  published       TINYINT(1) NOT NULL DEFAULT 0,
  created_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE trainings (
  id              INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title           VARCHAR(200) NOT NULL,
  slug            VARCHAR(200) NOT NULL UNIQUE,
  description_html LONGTEXT NULL,
  syllabus_html   LONGTEXT NULL,
  price_cents     INT UNSIGNED NOT NULL DEFAULT 0,
  currency        VARCHAR(3) NOT NULL DEFAULT 'NGN',
  schedules       JSON NULL,
  capacity        INT UNSIGNED NULL,
  enrolled_count  INT UNSIGNED NOT NULL DEFAULT 0,
  trainers        JSON NULL,
  attachments     JSON NULL,
  published       TINYINT(1) NOT NULL DEFAULT 0,
  created_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE orders (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  ref           VARCHAR(64) NOT NULL UNIQUE,
  user_email    VARCHAR(190) NOT NULL,
  user_name     VARCHAR(200) NULL,
  items         JSON NOT NULL,
  amount_cents  INT UNSIGNED NOT NULL,
  currency      VARCHAR(3) NOT NULL DEFAULT 'NGN',
  status        ENUM('pending','paid','failed','refunded') NOT NULL DEFAULT 'pending',
  paystack_ref  VARCHAR(128) NULL,
  metadata      JSON NULL,
  created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_orders_status (status),
  INDEX idx_orders_email (user_email)
) ENGINE=InnoDB;

CREATE TABLE transactions (
  id               INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  order_id         INT UNSIGNED NULL,
  paystack_ref     VARCHAR(128) NULL,
  reference        VARCHAR(128) NOT NULL UNIQUE,
  amount_cents     INT UNSIGNED NOT NULL,
  currency         VARCHAR(3) NOT NULL DEFAULT 'NGN',
  status           VARCHAR(32) NOT NULL,
  gateway_response JSON NULL,
  paid_at          TIMESTAMP NULL,
  created_at       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_tx_order FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE media (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  filename    VARCHAR(255) NOT NULL,
  path        VARCHAR(500) NOT NULL,
  mime        VARCHAR(120) NOT NULL,
  size        BIGINT UNSIGNED NOT NULL DEFAULT 0,
  uploaded_by INT UNSIGNED NULL,
  created_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_media_user FOREIGN KEY (uploaded_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE settings (
  `key`       VARCHAR(100) PRIMARY KEY,
  value       JSON NOT NULL,
  updated_by  INT UNSIGNED NULL,
  updated_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_settings_user FOREIGN KEY (updated_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE audit_logs (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id       INT UNSIGNED NULL,
  action        VARCHAR(64) NOT NULL,
  resource_type VARCHAR(64) NULL,
  resource_id   INT UNSIGNED NULL,
  meta          JSON NULL,
  created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_audit_resource (resource_type, resource_id),
  CONSTRAINT fk_audit_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;
