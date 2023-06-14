import mongoose , { Document } from "mongoose";

interface UserProps extends Document {
    name: string,
    email: string,
    password: string
}

const userSchema = new mongoose.Schema<UserProps>({
    name: {
        type: String,
        required: true
    },
    email: {
       type: String,
       required: true,
       unique: true
    },
    password: {
       type: String,
       required: true
    },
}, {
   timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User