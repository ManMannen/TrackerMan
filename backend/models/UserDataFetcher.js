require('dotenv').config()
let Firestore = require('@google-cloud/firestore');

class UserFetcher {
    constructor() {
        this.db = new Firestore({
            projectId: `${process.env.PROJECT_ID}`,
            keyFilename: `${process.env.GOOGLE_APPLICATION_CREDENTIALS}`,
        });
    }

    tap(params) {
        console.log(params)
    }

    // USER FIRESTORE REQUEST

    // Get all the users in the database

    async fetchAllUsers(callback) {
        try {
            let [userPromises, docs] = [[], await this.db.collection('users')
                .get()]

            docs.forEach(user => {
                userPromises.push(new Promise((resolve, reject) => {
                    try {
                        let object = { docId: user.id, ...user.data() }
                        resolve(object)
                    } catch {
                        reject("This promise was not fullfilled")
                    }
                }))
            })
            let users = await Promise.all(userPromises);
            callback(users)
        } catch (e) {
            console.error(e)
        }
    }

    // Get all users on its user id

    async fetchSingleUser(userId, callback) {
        try {
            let userPromises = []
            let docs = await this.db.collection("users")
                .where("userId", "==", Number(userId))
                .get()

            docs.forEach(user => {
                userPromises.push(new Promise((resolve, reject) => {
                    try {
                        let object = { docId: user.id, ...user.data() }
                        resolve(object)
                    } catch {
                        reject("This promise was not fullfilled")
                    }
                }
                ))
            })
            let selectedUser = await Promise.all(userPromises)
            callback(selectedUser)
        } catch (e) {
            console.error(e)
        } 
    }

    // ITEM FIRESTORE REQUEST

    // Get all items from a user    

    async fetchAllItems(userDocId, callback) {
        try {
            let [itemPromises, docs] = [[], await this.db.collection('users')
                .doc(`${userDocId}`)
                .collection('items')
                .get()]

            docs.forEach(item => {
                itemPromises.push(new Promise((resolve, reject) => {
                    try {
                        let object = { docId: item.id, ...item.data() }
                        resolve(object)
                    } catch {
                        reject("This promise was not fullfilled")
                    }
                }))
            })
            let items = await Promise.all(itemPromises);
            this.tap(items)
            callback(items)
        } catch (e) {
            console.error(e)
        }
    }

    // Get a single item from a user

    async fetchSingleItem(userDocId, itemId, callback) {
        try {
            let docs = await this.db.collection("users")
                .doc(`${userDocId}`)
                .collection("items")
                .where("itemId", "==", Number(itemId))
                .get()

            docs.forEach(item => {
                itemPromises.push(new Promise((resolve, reject) => {
                    try {
                        let object = { docId: item.id, ...item.data() }
                        resolve(object)
                    } catch {
                        reject("This promise was not fullfilled")
                    }
                }
                ))
            })
            let selectedItem = await Promise.all(itemPromises)
            callback(selectedItem)
        } catch (e) {
            console.error(e)
        } 
    }

    // Add a new item to a user

    async addNewOrUpdateItem(userDocId, newItemDocID, itemId, name, location, tracked = false, desc, callback) {
        try {

            let checkItem = this.db.collection('users')
            .doc(`${userDocId}`)
            .collection("items")
            .doc(`${newItemDocID}`)
            
            let data = {
                itemId: itemId,
                name: name,
                location: location,
                tracked: tracked,
                desc: desc
            }

            checkItem.get()
            .then((item) => {
                if (item.exists) {
                    // let object = { itemDocId: item.id, ...data} IF I WANT THE ID AS A FIELD
                    checkItem.update( data )
                    console.log("The item was updated")
                } else {
                    
                    checkItem.set(data)
                    console.log(`A new item was created with the id ${newItemDocID}` )
                }
            })

            callback(JSON.stringify(data))
        } catch (e) {
            console.error(e)
        }
    }

    async deleteItem(userDocId, itemDocId, callback) {
        try {
            let deleteDoc = this.db.collection('users')
                .doc(`${userDocId}`)
                .collection("items")
                .doc(`${itemDocId}`).delete()

            let data = `you sucessfully deleted the item ${itemDocId}`
            callback(JSON.stringify(data))
        } catch (e) {
            console.error(e)
        }
    }
}

module.exports = new UserFetcher




