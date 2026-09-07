import { GraphQLError } from "graphql/error";

class AppError extends GraphQLError {
  constructor(
    public code: string,
    public description?: string
  ) {
    super(code);
  }
}

class NotFoundError extends AppError {
  constructor(entity: string) {
    super(`${entity}_NOT_FOUND`, `${entity} not found`);
  }
}

export {
    NotFoundError
}