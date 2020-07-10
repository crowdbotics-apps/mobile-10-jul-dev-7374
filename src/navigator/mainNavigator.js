import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen48718Navigator from '../features/BlankScreen48718/navigator';
import BlankScreen28717Navigator from '../features/BlankScreen28717/navigator';
import BlankScreen48716Navigator from '../features/BlankScreen48716/navigator';
import BlankScreen28715Navigator from '../features/BlankScreen28715/navigator';
import BlankScreen48714Navigator from '../features/BlankScreen48714/navigator';
import BlankScreen28713Navigator from '../features/BlankScreen28713/navigator';
import BlankScreen48712Navigator from '../features/BlankScreen48712/navigator';
import BlankScreen28711Navigator from '../features/BlankScreen28711/navigator';
import BlankScreen48710Navigator from '../features/BlankScreen48710/navigator';
import BlankScreen28709Navigator from '../features/BlankScreen28709/navigator';
import BlankScreen48708Navigator from '../features/BlankScreen48708/navigator';
import BlankScreen28707Navigator from '../features/BlankScreen28707/navigator';
import BlankScreen48706Navigator from '../features/BlankScreen48706/navigator';
import BlankScreen28701Navigator from '../features/BlankScreen28701/navigator';
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
BlankScreen48718: { screen: BlankScreen48718Navigator },
BlankScreen28717: { screen: BlankScreen28717Navigator },
BlankScreen48716: { screen: BlankScreen48716Navigator },
BlankScreen28715: { screen: BlankScreen28715Navigator },
BlankScreen48714: { screen: BlankScreen48714Navigator },
BlankScreen28713: { screen: BlankScreen28713Navigator },
BlankScreen48712: { screen: BlankScreen48712Navigator },
BlankScreen28711: { screen: BlankScreen28711Navigator },
BlankScreen48710: { screen: BlankScreen48710Navigator },
BlankScreen28709: { screen: BlankScreen28709Navigator },
BlankScreen48708: { screen: BlankScreen48708Navigator },
BlankScreen28707: { screen: BlankScreen28707Navigator },
BlankScreen48706: { screen: BlankScreen48706Navigator },
BlankScreen28701: { screen: BlankScreen28701Navigator },
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
