import mongoose from 'mongoose';
import { Password } from '../services/password';

// An interface that describe the properties
//that are required to create a new USer
interface IUser {
  email: string;
  password: string;
}

//An interface that describes the properties
//that a User Model has
interface UserModel extends mongoose.Model<UserDocument> {
  build(attrs: IUser): UserDocument;
}

//An interface that describes the properties
//that a User document has
interface UserDocument extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
      },
      versionKey: false,
    },
  }
);

userSchema.statics.build = (attrs: IUser) => {
  return new User(attrs);
};

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

const User = mongoose.model<UserDocument, UserModel>('User', userSchema);

const buildUser = (attrs: IUser) => {
  return new User(attrs);
};

export { User, buildUser };
