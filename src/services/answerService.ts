import { Answer } from "@prisma/client";
import answerRepository from "./../repositories/answerRepository";

export type CreateAnswerData = Answer;

async function insert(createAnswerData: CreateAnswerData) {
    await answerRepository.insert(createAnswerData);
}

export default {
    insert
};