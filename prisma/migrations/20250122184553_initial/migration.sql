-- CreateTable
CREATE TABLE "User" (
    "_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Chat" (
    "_id" TEXT NOT NULL,
    "qusetion" TEXT NOT NULL,
    "anwser" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("_id") ON DELETE SET NULL ON UPDATE CASCADE;
