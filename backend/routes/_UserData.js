const { Router } = require('express')


const UserFetcher = require('../models/UserDataFetcher')

const userRoutes = new Router

    // USERS

    // Get all users
    userRoutes.get('/', (req, res) => {
        // UserFetcher.getAllUsers()
       UserFetcher.fetchAllUsers((users) => { res.send(users) })
       
    })

    // Get single user on user Id (with dynamic id)
    userRoutes.get('/:userId', (req, res) => {
        UserFetcher.fetchSingleUser(req.params.userId, (user) => { res.send(user) })
    })

    // ITEMS


    // Get all items on specific user
    userRoutes.get('/:userDocId/items', (req, res) => {
        UserFetcher.fetchAllItems(req.params.userDocId, (items) => { res.send(items) })
        
     })

     // Get single item from specific user 
     userRoutes.get('/:userDocId/items/', (req, res) => {
         UserFetcher.fetchSingleItem(req.params.userDocId, (item) => { res.send(item)})
     })

     // Add new or update item to a specific user
     userRoutes.post('/:userDocId/items/:newItemDocId', (req, res) => {
         UserFetcher.addNewOrUpdateItem(req.params.userDocId, // Which user that adds the new item 
                                req.params.newItemDocId, // The new item document id that the doc will receive
                                req.body.itemId, // the new items specific item id
                                req.body.name, // name of the new item
                                req.body.location, // location of the new item
                                req.body.tracked, // if the new item is set to tracked or not (defualts to false)
                                req.body.desc, // description of the new item
                                (data) => { 
                                    res.send( `added a new item with the properties:  
                                    ${data} 
                                    with the userDocId 
                                    ${req.params.userDocId}
                                     and the new itemDocId
                                    ${req.params.newItemDocId}` ) 
                                }) // callback
     })

     // Delete item from user
     userRoutes.delete('/:userDocId/items/:itemDocId', (req, res) => {
        UserFetcher.deleteItem( req.params.userDocId,
                                req.params.itemDocId, 
                                    (deletedItem) => 
                                        { res.send( `${deletedItem}` )}
                                    )
    })



module.exports = userRoutes