/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const collection = new Collection({
        "id": "nudxee1s157j5ji",
        "created": "2024-01-17 12:41:53.997Z",
        "updated": "2024-01-17 12:41:53.997Z",
        "name": "relevance",
        "type": "base",
        "system": false,
        "schema": [
            {
                "system": false,
                "id": "wkt9chy7",
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
                "id": "g6wkz3ha",
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
                "id": "vqbq6tip",
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
    const collection = dao.findCollectionByNameOrId("nudxee1s157j5ji");

    return dao.deleteCollection(collection);
})
