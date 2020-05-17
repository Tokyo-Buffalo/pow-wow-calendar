import { pool } from "db/pool";

interface PWCEvent {
  name: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  attendees: Array<{}>;
}

type EventsType = Array<PWCEvent>;

export class PWCEvents {
  private static instance: PWCEvents;

  private events: EventsType | null = null;

  async getAllEvents(): Promise<EventsType | Error> {
    const query = "SELECT * FROM events;";

    try {
      const events = await pool.query(query);
      return events.rows[0];
    } catch {
      return new Error("Could not retrieve events");
    }
  }
}
