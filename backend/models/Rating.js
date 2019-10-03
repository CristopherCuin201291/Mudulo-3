const { model, Schema } = require('mongoose')

const ratingSchema = new Schema(
  {
    fixer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    content: String,
    calification: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4, 5]
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Raiting', ratingSchema)
