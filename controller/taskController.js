const db = require("../database");

const createTask = async (req, res) => {
    let conn;
    try {
        conn = await db.getConnection();
        const { task_name, is_done } = req.body;
        const query = 'INSERT INTO tasks (task_name, is_done) VALUES (?, ?)';
        const [result] = await conn.execute(query, [task_name, is_done]);
        console.log(result.insertId);
        res.status(201).json({ data: "Task created successfully" });
    } catch (err) {
        console.log("Failed to create task", err);
        res.status(500).json({ error: "Failed to create task" });
    } finally {
        if (conn) {
            conn.release();
        }
    }
};


const fetchAllTasks = async (req, res) => {
    let conn;
    try {
        conn = await db.getConnection();
        const query = 'SELECT * FROM tasks WHERE status = "active"';
        const [rows] = await conn.execute(query);
        res.status(201).json({ data: rows });
    } catch (err) {
        console.log("Failed to get task", err);
        res.status(500).json({ error: "Failed to get task" });
    } finally {
        if (conn) {
            conn.release();
        }
    }
};

const fetchTaskByID = async(req, res) => {
    let conn;
    try {
        const id = parseInt(req.params.id);
        conn = await db.getConnection();
        const query = 'SELECT * FROM tasks WHERE id = ? AND status = "active"';
        const [rows] = await conn.execute(query, [id]);
        res.status(200).json({ data: rows });
    } catch (err) {
        console.log("Failed to get task", err);
        res.status(500).json({ error: "Failed to get task" });
    } finally {
        if (conn) {
            conn.release();
        }
    }

};

const updateTaskById = async(req, res) => {
    let conn;
    try {
        conn = await db.getConnection();
        const id = parseInt(req.params.id);
        const { task_name, is_done } = req.body;
        const query = 'UPDATE tasks SET task_name=?, is_done=?, updated_at=? WHERE id=? AND status=?';
        const [result] = await conn.execute(query, [task_name, is_done, new Date(), id, 'active']);
        console.log('result : ', result);
        res.status(201).json({ data: "Task updated successfully" });
    } catch (err) {
        console.log("Failed to update task", err);
        res.status(500).json({ error: "Failed to update task" });
    } finally {
        if (conn) {
            conn.release();
        }
    }
};

const deleteTaskById = async(req, res) => {
    let conn;
    try {
        const id = parseInt(req.params.id);
        conn = await db.getConnection();
        const query = 'DELETE FROM tasks WHERE id = ? AND status = "active"';
        const [result] = await conn.execute(query, [id]);
        console.log('delete result : ', result);
        res.status(201).json({ data: "Task deleted successfully" });
    } catch (err) {
        console.log("Failed to delete task", err);
        res.status(500).json({ error: "Failed to delete task" });
    } finally {
        if (conn) {
            conn.release();
        }
    }
};

const deleteTask = async(req, res) => {
    let conn;
    try {
        conn = await db.getConnection();
        const id = parseInt(req.params.id);
        const query = 'UPDATE tasks SET status=? WHERE id=?';
        const [result] = await conn.execute(query, ['INACTIVE', id]);
        console.log('result : ', result);
        res.status(200).json({ data: "Task updated successfully" });
    } catch (err) {
        console.log("Failed to update task", err);
        res.status(500).json({ error: "Failed to update task" });
    } finally {
        if (conn) {
            conn.release();
        }
    }

};

module.exports = {
    createTask,
    fetchAllTasks,
    fetchTaskByID,
    updateTaskById,
    deleteTaskById,
    deleteTask
};
