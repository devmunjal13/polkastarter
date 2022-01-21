-- CreateTable
CREATE TABLE "ido" (
    "_id" UUID NOT NULL,
    "productLogo" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "socialMedia" TEXT NOT NULL,
    "description" TEXT,
    "websiteLink" TEXT NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,
    "price" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "tokenAddress" TEXT NOT NULL,
    "buyingToken" TEXT NOT NULL,
    "created_at" DATE NOT NULL,
    "updated_at" DATE NOT NULL,
    "guid" UUID NOT NULL,
    "status" TEXT NOT NULL,
    "listed" BOOLEAN NOT NULL,

    CONSTRAINT "ido_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "user" (
    "_id" UUID NOT NULL,
    "guid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATE NOT NULL,
    "updated_at" DATE NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("_id")
);
