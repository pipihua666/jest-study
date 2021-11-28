import { shallow } from 'enzyme'

import UndoList from '../pages/TodoList/components/UndoList'

import { findElementByTag } from '../utils/testUtils'

it('初始化组件没有值', () => {
  const wrapper = shallow(<UndoList list={[]} />)
  const listNumber = findElementByTag(wrapper, 'number')
  expect(listNumber.text()).toBe('0')
})

it('删除UndoList项，项目要减少', () => {
  const arr = ['你', '我', '他']
  const fn = jest.fn()
  const wrapper = shallow(<UndoList list={arr} onDeleteItem={fn} />)
  const deleteItems = findElementByTag(wrapper, 'delete')
  deleteItems.at(1).invoke('onClick')
  expect(fn).toBeCalledWith(2)
})
