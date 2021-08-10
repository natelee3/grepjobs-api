const { use } = require('../routes');
const db = require('./conn');

class JobsModel {
    constructor(id, job_id, user_sub, applied, company_name, role, logo, location, date_posted) {
        this.id = id;
        this.job_id = job_id;
        this.user_sub = user_sub;
        this.applied = applied;
        this.company_name = company_name;
        this.role = role;
        this.logo = logo;
        this.location = location;
        this.date_posted = date_posted;
    };

    static async getAll() {
        try {
            const response = await db.any(`
                SELECT * FROM jobs; `
            )
            return response;
        } catch (error) {
            console.error('ERROR', error)
            return error
        }
    };

    static async getAllUserFavorites(userSub) {
        try {
            const response = await db.any(`
                SELECT * FROM jobs
                WHERE user_sub = '${userSub}'
                ORDER BY id DESC; `
            )
            return response;
        } catch (error) {
            console.error('ERROR', error)
            return error
        }
    };

    static async addFavorite(reqBody) {
        const {id, company_name, role, logo, location, date_posted, user_sub } = reqBody;
        try {
            const response = await db.result(`
                INSERT INTO jobs (job_id, user_sub, company_name, role, logo, location, date_posted)
                VALUES (${id}, '${user_sub}', '${company_name}', '${role}', '${logo}', '${location}', '${date_posted}');`);
                return response;
        } catch (error) {
            console.error('ERROR', error)
            return error
        }
    };

    static async deleteFavorite(reqBody) {
        const { id, user_sub } = reqBody;
        try {
            const response = await db.result(`
                DELETE FROM jobs
                WHERE id = ${id} AND user_sub = '${user_sub}';`);
                return response;
        } catch (error) {
            console.error('ERROR', error)
            return error
        }
    };

    static async updateFavorite(reqBody) {
        const { id, applied, user_sub } = reqBody;

        try {
            const response = await db.result(`
                UPDATE jobs
                SET "applied" = ${!applied}
                WHERE id = ${id} AND user_sub = '${user_sub}';`);
                return response;
        } catch (error) {
            console.error('ERROR', error)
            return error
        }
    };
}

module.exports = JobsModel;