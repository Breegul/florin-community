const db = require("../database/connect");

class Thread {
    constructor({thread_id, user_id, title, thread_date}) {
        this.id = thread_id;
        this.user_id = user_id;
        this.title = title;
        this.date = thread_date;
    }

    static async getAll() {
        let response = await db.query("SELECT * FROM thread");
        return response.rows.map(t => new Thread(t))
    }
    static async create(data) {
        let q = {
            text: "INSERT INTO thread (user_id, title, thread_date) VALUES ($1, $2, $3) RETURNING *;",
            values: [data.user_id, data.title, data.thread_date]
        }
        let response = await db.query(q);
        return response.rows[0];
    }
}
