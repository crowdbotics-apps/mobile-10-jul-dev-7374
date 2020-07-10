import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen28700Navigator from '../features/BlankScreen28700/navigator';
import BlankScreen38698Navigator from '../features/BlankScreen38698/navigator';
import BlankScreen28697Navigator from '../features/BlankScreen28697/navigator';
import BlankScreen18696Navigator from '../features/BlankScreen18696/navigator';
import BlankScreen48694Navigator from '../features/BlankScreen48694/navigator';
import BlankScreen38693Navigator from '../features/BlankScreen38693/navigator';
import BlankScreen28692Navigator from '../features/BlankScreen28692/navigator';
import BlankScreen18690Navigator from '../features/BlankScreen18690/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen28700: { screen: BlankScreen28700Navigator },
BlankScreen38698: { screen: BlankScreen38698Navigator },
BlankScreen28697: { screen: BlankScreen28697Navigator },
BlankScreen18696: { screen: BlankScreen18696Navigator },
BlankScreen48694: { screen: BlankScreen48694Navigator },
BlankScreen38693: { screen: BlankScreen38693Navigator },
BlankScreen28692: { screen: BlankScreen28692Navigator },
BlankScreen18690: { screen: BlankScreen18690Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
