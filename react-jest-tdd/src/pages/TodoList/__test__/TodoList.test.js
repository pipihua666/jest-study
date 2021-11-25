import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import TodoList from '../index'

Enzyme.configure({ adapter: new Adapter() })

it('TodoList初始化为空', () => {
  const wrapper = shallow(<TodoList />)
  expect(wrapper.state('undoList')).toEqual([])
})

it('TodoList 应该给 Header 传递一个增加undoList 内容的方法', () => {
  const wrapper = shallow(<TodoList />)
  const Header = wrapper.find('Header')
  expect(Header.prop('addUndoItem')).toBe(wrapper.instance().addUndoItem)
})

it('当 Header 回车时, undoList 应该新增内容', () => {
  const wrapper = shallow(<TodoList />)
  const Header = wrapper.find('Header')
  const addFunc = Header.prop('addUndoItem')
  const inputValue = '学习jest'
  addFunc(inputValue)
  expect(wrapper.state('undoList').length).toBe(1)
  expect(wrapper.state('undoList')[0]).toBe(inputValue)
})
