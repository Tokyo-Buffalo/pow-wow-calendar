import { pool } from "db/pool";
import { v4 as uuidv4 } from "uuid";

interface CreateEventArgs {
  name: string;
  description: string;
  location: string;
  start_date: string;
  end_date: string;
  attendees: Array<string>;
  organizers: Array<string>;
}

interface PWCEvent extends CreateEventArgs {
  id: string;
  created_date: string;
  modified_date: string;
  created_by: string;
}

type EventsType = Array<PWCEvent>;

export class PWCEvents {
  private static instance: PWCEvents;

  private events: EventsType | null = null;

  async getAllEvents(): Promise<EventsType | Error> {
    const query = "SELECT * FROM events;";

    try {
      const events = await pool.query(query);

      return events.rows;
    } catch {
      return new Error("Could not retrieve events");
    }
  }

  async createEvent(params: CreateEventArgs, created_by: string) {
    const id = uuidv4();
    const paramsArray = Object.values(params);
    const query =
      "INSERT INTO events(id, name, description, location, start_date, end_date, created_by, attendees, organizers) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;";

    try {
      return await pool.query(query, [id, ...paramsArray, created_by]);
    } catch {
      return new Error("Could not save event");
    }
  }
}
