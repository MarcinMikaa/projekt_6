const mongoose = require('mongoose');

const url = 'mongodb+srv://praktyki:praktyki2021@development.wtktz.mongodb.net/marcin-to-do';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});