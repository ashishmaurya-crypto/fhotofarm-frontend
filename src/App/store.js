import { legacy_createStore as createStore} from 'redux';
import reducerRoot from '../redux/reducers/index';



const store = createStore(reducerRoot)


export default store;