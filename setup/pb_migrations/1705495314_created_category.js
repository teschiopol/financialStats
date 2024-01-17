/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const collection = new Collection({
        "id": "ee22rr5cg8fph47",
        "created": "2024-01-17 12:41:53.997Z",
        "updated": "2024-01-17 12:41:53.997Z",
        "name": "category",
        "type": "base",
        "system": false,
        "schema": [
            {
                "system": false,
                "id": "gaodrskf",
                "name": "relevance",
                "type": "relation",
                "required": true,
                "presentable": false,
                "unique": false,
                "options": {
                    "collectionId": "nudxee1s157j5ji",
                    "cascadeDelete": false,
                    "minSelect": null,
                    "maxSelect": 1,
                    "displayFields": []
                }
            },
            {
                "system": false,
                "id": "lvhngowv",
                "name": "name",
                "type": "text",
                "required": true,
                "presentable": false,
                "unique": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            },
            {
                "system": false,
                "id": "4ibh75cw",
                "name": "total",
                "type": "number",
                "required": false,
                "presentable": false,
                "unique": false,
                "options": {
                    "min": null,
                    "max": null,
                    "noDecimal": false
                }
            },
            {
                "system": false,
                "id": "kzua8dzm",
                "name": "description",
                "type": "text",
                "required": false,
                "presentable": false,
                "unique": false,
                "options": {
                    "min": null,
                    "max": null,
                    "pattern": ""
                }
            }
        ],
        "indexes": [],
        "listRule": null,
        "viewRule": null,
        "createRule": null,
        "updateRule": null,
        "deleteRule": null,
        "options": {}
    });

    return Dao(db).saveCollection(collection);
}, (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("ee22rr5cg8fph47");

    return dao.deleteCollection(collection);
})
