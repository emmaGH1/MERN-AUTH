import mongoose , { Document } from "mongoose";
import bcrypt from 'bcryptjs'
interface UserProps extends Document {
    name: string,
    email: string,
    password: string 
}

interface UserDoc extends UserProps {
    matchPassword: (enteredPassword: string) => Promise<boolean>
}

const userSchema = new mongoose.Schema<UserDoc>({
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

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.matchPassword = async function (enteredPassword: string): Promise<boolean> {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model<UserDoc>('User', userSchema)

export default User