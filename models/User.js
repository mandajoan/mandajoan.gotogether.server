const
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs'),
  userSchema = new mongoose.Schema({
    name: String,
    title: String,
    email: String,
    // interests: [{type:mongoose.Schema.Types.ObjectId, ref: 'Interest'}],
    interests: [String],
    password: {type: String, select: false}
  })

// encrypt password when user is saved
userSchema.methods.generateHash = function(password) {
return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

// checks password by comparing
userSchema.methods.validPassword = function(password) {
if(!password) return false
return bcrypt.compareSync(password, this.password)
}


// pre-saving user, if a new password is being used, encrypt it before saving
userSchema.pre('save', function(next) {
if(!this.isModified('password')) return next()
this.password = this.generateHash(this.password)
next()
})

module.exports = mongoose.model('User', userSchema)
