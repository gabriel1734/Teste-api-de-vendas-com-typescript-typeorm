import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ShowProfileService from '../services/ShowProfileService';
import UpdateProfileService from '../services/UpdateProfileService';

export default class ProilleController {
  public async show(req: Request, res: Response): Promise<Response> {
    const ShowProfile = new ShowProfileService();
    const user_id = req.user.id;

    const user = await ShowProfile.execute({ user_id });

    return res.status(200).json(user);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const user_id = req.user.id;
    const { name, email, password, old_password } = req.body;

    const updateProfile = new UpdateProfileService();

    const user = await updateProfile.execute({
      user_id,
      name,
      email,
      password,
      old_password,
    });

    return res.status(200).json(user);
  }
}
