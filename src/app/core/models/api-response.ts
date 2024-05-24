import { Cliente } from "./cliente";

export interface ApiResponse {
  statusCode: number;
  isSuccess: boolean;
  messages: string[];
  result: Cliente;
}
