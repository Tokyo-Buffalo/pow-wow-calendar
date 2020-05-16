import { pool } from "../db/pool";

interface IUser {
  id: string;
  email: string;
  isAdmin: boolean;
  picture: string;
}

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

  async getUser(id: string) {
    const getUserQuery = "SELECT * FROM users WHERE id IN ($1);";

    try {
      const users = await pool.query(getUserQuery, [id]);
      return users.rows[0];
    } catch (error) {
      console.error("Could not retrieve user");
      return new Error(error);
    }
  }

  /**
   *
   * @param id the sub (from google response)
   * @param email
   * @param picture the image src url
   *
   * @returns a query if successful
   */
  async createUser(id: string, email: string, picture: string) {
    const createUserQuery = "INSERT INTO users(id, email, picture) VALUES($1, $2, $3) RETURNING *;";

    try {
      const user = await pool.query(createUserQuery, [id, email, picture]);
      return user.rows[0];
    } catch (error) {
      console.error("Could not create user", error);
      return error;
    }
  }
}
