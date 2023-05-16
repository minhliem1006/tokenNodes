const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://liem_new_project:liem112233@cluster0.ggfsjxl.mongodb.net', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected!');
  })
  .catch((err) => {
    console.log('Connection failed:', err);
  });

const Schema = mongoose.Schema;
const accountSchema = new Schema({
  username: String,
  password: String,
}, {
  collection: 'user'
});

const accountModel = mongoose.model('account', accountSchema);
module.exports = accountModel;