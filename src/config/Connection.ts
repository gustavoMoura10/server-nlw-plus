import { Sequelize } from 'sequelize';
import Points from '../models/Points';
import Items from '../models/Items';
export default class Connection {
    private tables = {
        Points,
        Items
    }
    private connection:Sequelize;
    constructor() {
        this.connection = new Sequelize({
            dialect:'mysql',
            host:process.env.DB_HOST,
            username:process.env.DB_USER,
            password:process.env.DB_PASSWORD,
            database:process.env.DB_NAME
        });
        for(let tab of Object.values(this.tables)){
            tab.initModel(this.connection);
        }
        for(let tab of Object.values(this.tables)){
            tab.associate(this.tables);
        }
        this.connection.sync();
    }

}