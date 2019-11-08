import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from '~/pages/Login';
import Teste from '~/pages/Teste';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
  }),
);

export default Routes;
