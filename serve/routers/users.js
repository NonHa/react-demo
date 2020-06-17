const express = require('express')
const isEmpty = require('lodash/isEmpty')
const validator = require('validator')
const router = express.Router()

const validatorInput = (data) => {
    let errors = {};
    if (validator.isEmpty(data.username)) {
        errors.username = "请输入用户名！"
    }
    if (!validator.isEmail(data.email)) {
        errors.email = "请输入邮箱！"
    }
    if (validator.isEmpty(data.password)) {
        errors.password = "请输入密码！"
    }
    if (validator.isEmpty(data.passwordConfirmation)) {
        errors.passwordConfirmation = "请确认密码！"
    }
    if (!validator.equals(data.passwordConfirmation, data.password)) {
        errors.passwordConfirmation = "两次密码不一致！"
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}
router.post('/',(req, res) => {
    // console.log(req.body);
    
    const { errors, isValid} = validatorInput(req.body)
    if (isValid) {
        res.send({ success: true })
    } else {
        res.status(400).json(errors)
    }
    
})

module.exports = router