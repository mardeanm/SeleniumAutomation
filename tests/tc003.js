const assert= require("assert")
const {describe} = require("mocha")

describe ('TestSuite', function(){
    it('Testcase1', function(){
        assert.equal("1", "1", "one is equal to one")
    })
})