export interface CustomError extends Error {
  details?: any
  cause?: any
  message?: any
  name?: any
  stack?: any
}
