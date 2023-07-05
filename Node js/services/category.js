
const Categories = require("../models/categories")

const findById = async (id) => {
        return await Categories.findById(id);
}

const findAll = async () => {
        return await Categories.find();
}

const findCategorizedItems = async () => {
        return await Categories.aggregate([
                {
                        $lookup: {
                                from: "items",
                                localField: "_id",
                                foreignField: "category",
                                as: "items"
                        }
                },
                {
                        $project: {
                                _id: 1,
                                name: 1,
                                desc: 1,
                                imageUrl: 1,
                                items: {
                                        _id: 1,
                                        name: 1,
                                        category: 1,
                                        desc: 1,
                                }
                        }
                }
        ])
}

const create = async ({ name, desc, imageUrl }) => {
        // to do
        try {
                const cate = await Categories.findOne({ name });
                if (cate)
                     throw 'The categroy is already have~'
                // create new 
                const NewCate = {
                     name,
                     desc,
                     imageUrl
                }          
                const createCate = await Categories.create(NewCate);
                return {
                     success: true, 
                     msg: "Create successfully",
                     data: createCate
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

const update = async (id, { name, desc, imageUrl }) => {
        // to do
        try {
                const update = await Categories.findByIdAndUpdate(id, { name, desc, imageUrl })

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
        try {
                await Categories.findByIdAndDelete(id)
                return {
                        success: true,
                        data: "Category delete successfully~"
                }
        }
        catch (err) {
                return {
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
        findCategorizedItems
}