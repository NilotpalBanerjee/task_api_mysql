const mysql = require('mysql2/promise');

class Database {
    constructor() {
        if (!Database.instance) {
            this.pool = mysql.createPool({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'task_app'
            });
            Database.instance = this;
        }
        return Database.instance;
    }

    async getConnection() {
        try {
            return await this.pool.getConnection();
        } catch (err) {
            console.error(err);
            throw new Error('Failed to connect to database');
        }
    }
}

module.exports = new Database();
