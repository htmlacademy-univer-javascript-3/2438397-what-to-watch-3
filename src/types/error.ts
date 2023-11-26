export type ErrorType = {
  errorType: string;
  message: string;
  details: ErrorDetailsType[];
}

export type ErrorDetailsType = {
  property: string;
  value: string;
  messages: string[];
}
