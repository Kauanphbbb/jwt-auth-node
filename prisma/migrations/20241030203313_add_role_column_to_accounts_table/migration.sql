-- CreateEnum
CREATE TYPE "roles" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "role" "roles" NOT NULL DEFAULT 'USER';
