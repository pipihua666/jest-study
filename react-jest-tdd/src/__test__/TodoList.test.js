import { shallow } from 'enzyme'

import TodoList from '../pages/TodoList/index'

import { findElementByComponentName } from '../utils/testUtils'

it('TodoList初始化为空', () => {
  const wrapper = shallow(<TodoList />)
  expect(wrapper.state('undoList')).toEqual([])
})

it('TodoList 应该给 Header 传递一个增加undoList 内容的方法', () => {
  const wrapper = shallow(<TodoList />)
  const Header = findElementByComponentName(wrapper, 'Header')
  expect(Header.prop('addUndoItem')).toBeTruthy()
})

it('当 Header 回车时, undoList 应该新增内容', () => {
  const wrapper = shallow(<TodoList />)
  const inputValue = '学习jest'
  wrapper.instance().addUndoItem(inputValue)
  expect(wrapper.state('undoList').length).toBe(1)
  expect(wrapper.state('undoList')[0]).toBe(inputValue)
  wrapper.instance().addUndoItem(inputValue)
  expect(wrapper.state('undoList').length).toBe(2)
})
