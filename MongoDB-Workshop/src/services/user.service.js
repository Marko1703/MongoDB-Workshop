import { User } from "../models/user.model.js";

export class UserService {
  //1. Get all users
  static async getAllUsers() {
    const users = await User.find({});

    return users;
  }
  //2. Get user by id
  static async getUserById(userId) {
    const foundUser = await User.findById(userId);

    if (!foundUser) throw new Error("User Not Found");

    return foundUser;
  }
  //3. Create user
  static async createUser(userData) {
    // New student here is not a plain object but it is a mongoose document which contains a lot more methods and information
    // const newStudent = new Student(studentData);
    // save valdiates and then if everything is okay writes the new document in the database
    // const createdStudent = await newStudent.save();

    //Shortened way of doing the above
    const createdUser = User.create(userData);

    return createdUser;
  }
  //4. Update user
  static async updateUser(userId, updateData) {
    const foundUser = await this.getUserById(userId);

    // Object assign takes the target object and addes the properties of the second object to it
    Object.assign(foundUser, updateData);

    //Saving after updates validates the data before writing it to the database
    const updatedUser = await foundUser.save();

    return updatedUser;
  }

  //5. Delete user
  static async deleteUser(userId) {
    const response = await User.findByIdAndDelete(userId);

    if (!response) throw new Error("User not found");

    console.log(response);
  }
}