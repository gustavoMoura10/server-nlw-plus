import { Model, Sequelize, DataTypes } from "sequelize";

export default class Points extends Model {
 
    static initModel(sequelize:Sequelize){
        this.init({
            image:{
                type:DataTypes.STRING,
                allowNull:false
            },
            name:{
                type:DataTypes.STRING,
                allowNull:false
            },
            email:{
                type:DataTypes.STRING,
                allowNull:false
            },
            whatsapp:{
                type:DataTypes.STRING,
                allowNull:false
            },
            latitude:{
                type:DataTypes.DECIMAL,
                allowNull:false
            },
            longitude:{
                type:DataTypes.DECIMAL,
                allowNull:false
            },
            city:{
                type:DataTypes.STRING,
                allowNull:false
            },
            uf:{
                type:DataTypes.STRING(2),
                allowNull:false
            }
        },{
            sequelize,
            timestamps:false,
            tableName:'points',
            modelName:'Points'
        })
        
    }
    static associate(obj){
        this.belongsToMany(obj['Items'],{
            as:'items',
            through:'points_items',
            foreignKey:'point_id',
            timestamps:false
        })
    }
}