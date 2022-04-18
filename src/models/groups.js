const { DataTypes } = require('sequelize')
const db = require('../db/db')


const Groups = db.define('groups',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        rank: {
            type: DataTypes.INTEGER,
        },
        category: {
            type: DataTypes.STRING
        },
        plataform: {
            type: DataTypes.STRING
        },
        namePlataform:{
            type:DataTypes.STRING
        },
        ahorro: {
            type: DataTypes.INTEGER
        },
        verification: {
            type: DataTypes.BOOLEAN
        },
        avalible: {
            type: DataTypes.INTEGER
        },
        anual: {
            type: DataTypes.INTEGER,
        },
        mensual: {
            type: DataTypes.INTEGER,
        },
        tag: {
            type: DataTypes.STRING
        },

    },
    {
        tableName: 'groups',
    }
)

module.exports = Groups
