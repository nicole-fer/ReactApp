import PageOne from './PageOne/PageOne';
import PageTwo from './PageTwo/PageTwo';


import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    PageTwo: PageTwo,
    PageOne: PageOne,
  })
);

export default Routes;