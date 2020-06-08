import { Model, Sequelize, DataTypes } from "sequelize";
import Points from "./Points";

export default class Items extends Model {
    static initModel(sequelize:Sequelize){
        this.init({
            title:{
                type:DataTypes.STRING,
                allowNull:false
            },
            image:{
                type:DataTypes.STRING,
                allowNull:false
            }
        },{
            sequelize,
            timestamps:false,
            tableName:'items',
            modelName:'Items'
        })
    }
    static associate(obj){
        this.belongsToMany(obj['Points'],{
            as:'points',
            through:'points_items',
            foreignKey:'item_id',
        })
    }

}