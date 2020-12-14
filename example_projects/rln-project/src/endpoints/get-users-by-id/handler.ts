import 'module-alias/register';
import { ResponseHandler, StatusCodes } from '@restlessness/core';
import { Request } from './interfaces';

export default async (req: Request) => {
  try {
    const {
      validationResult,
      pathParameters,
    } = req;

    if (!validationResult.isValid) {
      return ResponseHandler.json({ message: validationResult.message }, StatusCodes.BadRequest);
    }
    
    return ResponseHandler.json({});
  } catch (e) {
    console.error(e);
    return ResponseHandler.json({}, StatusCodes.InternalServerError);
  }
};
