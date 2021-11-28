import { shallow } from 'enzyme'

import Header from '../pages/TodoList/components/Header'

import { findElementByTag } from '../utils/testUtils'

it('快照', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper.html()).toMatchSnapshot()
})

it('Header有一个input框', () => {
  const wrapper = shallow(<Header />)
  const inputEl = findElementByTag(wrapper, 'input')
  expect(inputEl.length).toBe(1)
})

it('input框的初始值为空', () => {
  const wrapper = shallow(<Header />)
  const inputEl = findElementByTag(wrapper, 'input')
  expect(inputEl.prop('value')).toBe('')
})

it('input是一个受控组件', () => {
  const wrapper = shallow(<Header />)
  const inputEl = findElementByTag(wrapper, 'input')
  const inputValue = 'Hello Pipihua!'
  inputEl.simulate('change', {
    target: {
      value: inputValue
    }
  })
  expect(wrapper.state('value')).toBe(inputValue)
  // 为什么要获取input元素呢？
  // 因为在onChange之后旧的input value是没有改变的
  const newInputEl = findElementByTag(wrapper, 'input')
  expect(newInputEl.prop('value')).toBe(inputValue)
})

it('input框输入回车时，如果input无内容，无操作', () => {
  const fn = jest.fn()
  const wrapper = shallow(<Header addUndoItem={fn} />)
  const inputEl = findElementByTag(wrapper, 'input')
  wrapper.setState({ value: '' })
  inputEl.simulate('keyUp', {
    keyCode: 13
  })
  expect(fn).not.toHaveBeenCalled()
})

it('input框输入回车时，如果input有内容，执行函数操作', () => {
  const fn = jest.fn()
  const wrapper = shallow(<Header addUndoItem={fn} />)
  const inputEl = wrapper.find("[data-test='input']")
  const inputValue = '皮皮花学习jest!'
  wrapper.setState({ value: inputValue })
  inputEl.simulate('keyUp', {
    keyCode: 13
  })
  expect(fn).toHaveBeenCalled()
  expect(fn).toHaveBeenCalledWith(inputValue)
})

it('input框输入回车时，如果input有内容，清空输入框的值', () => {
  const fn = jest.fn()
  const wrapper = shallow(<Header addUndoItem={fn} />)
  const inputEl = wrapper.find("[data-test='input']")
  const inputValue = '皮皮花学习jest!'
  wrapper.setState({ value: inputValue })
  inputEl.simulate('keyUp', {
    keyCode: 13
  })
  expect(wrapper.state('value')).toBe('')
})
