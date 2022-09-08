import { Request, Response } from 'express';
import questionService, { CreateQuestionData } from '../services/questionService';
import answerService, { CreateAnswerData } from "../services/answerService";


export async function createQuestion(req: Request, res: Response) {
  const question: CreateQuestionData = req.body;
  await questionService.insert(question)
  return res.sendStatus(200)
}

export async function createAnswer(req: Request, res: Response) {
  const answer: CreateAnswerData = req.body;
  const questionId = parseInt(req.params.id);
  await answerService.insert({ ...answer, questionId });

  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.findAll();

  res.send(questions);
}

export async function getById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const question = await questionService.findById(id);

  res.send(question);
}
