import {confirmed, email, integer, length, max, min, min_value, numeric, required, regex, double} from 'vee-validate/dist/rules'
import {extend, localize} from 'vee-validate'
import ko from 'vee-validate/dist/locale/ko.json'

localize('ko', ko)

extend('required', {
  ...required,
  // message: 'This field is required1'
})

extend('email', {
  ...email,
  message: '등록되지 않은 이메일이거나 이메일을 잘못 입력하였습니다'
})

extend('confirmed', {
  ...confirmed,
  // message: 'This field confirmation does not match'
})

extend('length', {
  ...length,
})

extend('numeric', {
  ...numeric,
})

extend('integer', {
  ...integer,
})

extend('min', {
  ...min,
})

extend('min_value', {
  ...min_value,
})

extend('max', {
  ...max,
})

extend('regex', {
  ...regex,
})

extend('double', {
  ...double,
  message: '유효한 실수를 입력해주세요.'
})

extend('password', (value) => {
  if (!/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/.test(value)) {
    return "비밀번호를 올바르게 입력해주세요."
  }
  return true;
})