export interface GeneralPrismaErrorInterface {
  code: string;
  message: string;
}

export class GeneralPrismaError implements GeneralPrismaErrorInterface {
  code: string;

  message: string;

  constructor(code: string, message: string) {
    this.code = code;
    this.message = message.replace(/\r?\n|\r/g, '');
  }
}
