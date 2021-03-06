import { combineReducers } from 'redux';
import { sidebarList } from '../../pages/sidePage/reducers';
import { contentList } from '../../components/list-default/reducers';

const ZHD = combineReducers({
  sidebar: sidebarList,
  content_list: contentList,
});

export default ZHD;
