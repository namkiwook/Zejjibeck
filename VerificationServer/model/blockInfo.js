var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blockInfoSchema = new Schema({
    // collect or refine
    // before name-> current name

    property : String, // collect or refine

    total: Number, // collect -> collect

    isValidate: String, // 0:Not Validate, 1:Validating, 2:Done -> for refine
    AnswerLists: Array,
    users : Array,
    finished: Number,
    running: Number,
    lastAssignTime: Number,
});

module.exports = mongoose.model('blockInfo', blockInfoSchema);

/*
answerLists: 각 인덱스마다 한 사용자가 제공한 정답 리스트들을 가지고 있음

ex)
AnswerLists = {{1,2,3,4,5}, {2,3,1,3,5}, {2,2,3,1,3} .. }
Users = {"cho", "nam", "pyeon" .. },

 */