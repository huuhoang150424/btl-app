const mongoose=require("mongoose")
const {Schema}=mongoose

const transactionsSchema=new Schema(
    {
        transaction_name: { type: String,required: true },
        desc_transaction: { type: String,required: true },
        slug_user: { type: String,required: true },
        is_fixed: { type: Boolean,required: true },
        amount : { type: Number,required: true },
        type : { type: String,required: true },
        transaction_date : { type: Date,required: true },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            required: true
        },
        account: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'accounts',
            required: true
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'categories'
        },
        incomeType: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'incomeTypes'
        },
    },
    {
        timestamps: true
    }
)

module.exports=new mongoose.model('transactions',transactionsSchema)