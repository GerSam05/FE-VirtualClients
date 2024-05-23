export interface ApiResponse {
  statusCode: number;
  isSuccess: boolean;
  messages: string[];
  result: any;
}
