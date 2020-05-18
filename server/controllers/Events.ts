import { pool } from "db/pool";

interface PWCEvent {
  name: string;
  description: string;
  location: string;
  start_date: string;
  end_date: string;
  created_date: string;
  modified_date: string;
  created_by: string;
  attendees: Array<string>;
  organizers: Array<string>;
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
}
