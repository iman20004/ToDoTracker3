const { gql } = require('apollo-server');


const typeDefs = gql `
	type Todolist {
		_id: String!
		id: Int!
		name: String!
		owner: String!
		top: Boolean!
		items: [Item]
	}
	type Item {
		_id: String!
		id: Int!
		description: String!
		due_date: String!
		assigned_to: String!
		completed:  Boolean!
	}
	extend type Query {
		getAllTodos: [Todolist]
		getTodoById(_id: String!): Todolist 
	}
	extend type Mutation {
		addItem(item: ItemInput!, _id: String!, index: Int!): String
		addTodolist(todolist: TodoInput!): String
		deleteItem(itemId: String!, _id: String!): [Item]		
		deleteTodolist(_id: String!): Boolean
		updateTodolistField(_id: String!, field: String!, value: String!): String
		updateItemField(itemId: String!, _id: String!, field: String!, value: String!, flag: Int!): [Item]
		reorderItems(itemId: String!, _id: String!, direction: Int!): [Item]
		sortItems(_id: String!, field: String!): [Item]
		unsortItems(_id: String!, item: [ItemInput!]): [Item]
		topList(_id: String!) : String
	}
	input FieldInput {
		_id: String
		field: String
		value: String
	}
	input TodoInput {
		_id: String
		id: Int
		name: String
		owner: String
		top: Boolean
		items: [ItemInput]
	}
	input ItemInput {
		_id: String
		id: Int
		description: String
		due_date: String
		assigned_to: String
		completed:  Boolean
	}
`;

module.exports = { typeDefs: typeDefs }


/*
const typeDefs = gql `
	type Map {
		_id: String!
		id: Int!
		name: String!
		owner: String!
		regions: [Region]
	}
	type Region {
		_id: String!
		id: Int!
		name: String!
		capital: String!
		leader: String!
		flag:  Boolean!
		landmarks: [String]!
		root: Boolean!
		parentRegion: Region
		subregions: [Region]
	}
	extend type Query {
		getAllMaps: [Map]
		getMapById(_id: String!): Map 
	}
	extend type Mutation {
		addRegion(mapId: String!, regionId: String!, region: RegionInput!): String
		addMap(map: MapInput!): String
		deleteRegion(mapId: String!, regionId: String!, subregionId: String!): [Region]		
		deleteMap(mapId: String!): Boolean
		updateMapField(mapId: String!, field: String!, value: String!): Boolean
		updateRegionField(mapId: String!, regionId: String!, field: String!, value: String!): [Region]
		sortRegions(mapId: String!, regionId: String!, field: String!): [Region]
		unsortRegions(mapId: String!, regionId: String!, subregion: [RegionInput!]): [Region]
		addLandmark(mapId: String!, regionId: String!, landmark: String!): [String]
		deleteLandmark(mapId: String!, regionId: String!, landmark: String!): [String]
		editLandmark(mapId: String!, regionId: String!, old: String!, new: String!): String
		changeParent(mapId: String!, regionId: String!, parentId: String!) : String
	}
	input FieldInput {
		_id: String
		field: String
		value: String
	}
	input MapInput {
		_id: String
		id: Int
		name: String
		owner: String
		regions: [RegionInput]
	}
	input RegionInput {
		_id: String
		id: Int
		name: String
		capital: String
		leader: String
		flag:  Boolean
		landmarks: [String]
		root: Boolean
		parentRegion: RegionInput
		subregions: [RegionInput]
	}*/