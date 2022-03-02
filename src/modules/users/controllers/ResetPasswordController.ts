import { Request, Response } from 'express';
import ResetPasswordService from '../services/ResetPasswordService';

export default class ResetPasswordController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { password, token } = req.body;

    const resetPasswword = new ResetPasswordService();

    await resetPasswword.execute({
      token,
      password,
    });
    return res.status(204).json();
  }
}
