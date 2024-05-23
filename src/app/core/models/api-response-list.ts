import { Cliente } from "./cliente";

export interface ApiResponseList {
  statusCode: number;
  isSuccess: boolean;
  messages: string[];
  result: Cliente[];
}