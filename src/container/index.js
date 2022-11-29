import CountUI from "../pages/Count";
import{connect} from 'react-redux'
//返回容器组件
const CountContainer=connect()(CountUI)
export default CountContainer