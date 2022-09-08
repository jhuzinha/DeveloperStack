-- CreateTable
CREATE TABLE "questions" (
    "id" SERIAL NOT NULL,
    "askedBy" TEXT NOT NULL,
    "question" TEXT NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" SERIAL NOT NULL,
    "answerdBy" TEXT NOT NULL,
    "questionsId" INTEGER NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_questionsId_fkey" FOREIGN KEY ("questionsId") REFERENCES "questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
