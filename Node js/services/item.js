const Items = require("../models/items");

const findById = async (id) => {
        try {
                return {
                        success: true,
                        data: {}
                };
        } catch (err) {
                return {
                        success: false,
                        error: err || 'error'
                }
        }
}

const findAll = async () => {
        return await Items.find().populate('category');
}

const create = async (newItem) => {
        // to do
        const {name, category, desc} = newItem
        try {
                const item = await Items.findOne({ name});
                if (item)
                     throw 'The Iteam is already have~'
                // create new        
                const NewCate = {
                        name,
                        desc,
                        category
                   }
                const createdItem = await Items.create(NewCate);
                return {
                     success: true,
                     msg: "Create successfully",
                     data: createdItem
                }
           }
           catch (err) {
                console.log(err);
                return {
                     success: false,
                     error: JSON.stringify(err) || 'error'
                }
           }
}

const update = async (id,{name, category, desc}) => {
        // to do
        try {
                const update = await Items.findByIdAndUpdate(id, { name,category, desc  })

                return {
                        success: true,
                        data: update,
                        msg: "Update successfully!"
                }
        }
        catch (err) {
                return {
                        success: false,
                        error: err
                }
        }

}

const remove = async (id) => {
        // to do
        try{
                await Items.findByIdAndDelete(id)
                return{
                        success: true,
                        data: "Item delete successfully~"
                }
        }
        catch(err){
                return{
                        success: false,
                        err: err.message 
                }
              
        }
}

module.exports = {
        findById,
        update,
        remove,
        findAll,
        create,
}