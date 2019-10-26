import { pool } from "../db/pool";

interface IUser {
  id: string;
  email: string;
  isAdmin: boolean;
  picture: string;
};

export class User {

  private static instance: User;

  private user: IUser | null = null;  

  static getInstance() {
    if (!User.instance) {
      User.instance = new User();
    }

    return User.instance;
  }


  /**
   * 
   * @param userId the user's id
   * 
   * @returns boolean
   */
  async findUser(userId: string): Promise<boolean> {
    const userExistsQuery = `SELECT id FROM users WHERE id IN ($1);`;

    try {
      const userExists = await pool.query(userExistsQuery, [userId]);

      return userExists.rowCount > 0;
    } catch (error) {
      console.error("Could not check if user exists", error);
    }
  }
}