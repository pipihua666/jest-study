import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Header from '../pages/TodoList/components/Header'

Enzyme.configure({ adapter: new Adapter() })
