import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SignUp from '~/pages/SignUp/index';
import Teste from '~/pages/Teste';
import TakePhoto from '~/pages/SignUp/TakePhoto/index';
import PreviewPhoto from '~/pages/SignUp/TakePhoto/previewPhoto';

const Routes = createAppContainer(
  createSwitchNavigator({
    TakePhoto,
    PreviewPhoto,
  }),
);

export default Routes;
