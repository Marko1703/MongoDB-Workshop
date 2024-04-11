import { userSchema } from "../schemas/user.schema.js";
import { UserService } from "../services/user.service.js";

export class UserController {
    //1. Get all users
    static async getAllUsers(req, res) {
      try {
        const users = await UserService.getAllUsers(req.query);
  
        res.json(users);
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error.message });
      }
    }
    //2. Get user by id
    static async getUserById(req, res) {
      try {
        const foundUser = await UserService.getUserById(req.params.id);
  
        res.json(foundUser);
      } catch (error) {
        console.log(error);
        res.status(404).json({ msg: error.message });
      }
    }
    //3. Create user
    static async createUser(req, res) {
      try {
        await userSchema.validateAsync(req.body, {
          abortEarly: false,
        });
  
        const user = await UserService.createUser(req.body);
  
        res.status(201).json(user);
      } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message });
      }
    }
    //4. Update user
    static async updateUser(req, res) {
      try {
        await updateUserSchema.validateAsync(req.body);
  
        const updatedUser = await UserService.updateUser(
          req.params.id,
          req.body
        );
  
        res.json(updatedUser);
      } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message });
      }
    }
    //5. Delete User
    static async deleteUser(req, res) {
      try {
        await UserService.deleteUser(req.params.id);
  
        res.sendStatus(204);
      } catch (error) {
        console.log(error);
        res.status(404).json({ msg: error.message });
      }
    }
  }