import { NavigationActions } from 'react-navigation';

class NavigationService {
  setTopLevelNavigator(navigatorRef) {
    this._topLevelNavigator = navigatorRef;
  }

  navigate(routeName, params) {
    this._topLevelNavigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      })
    );
  }

  homeNavigate(routeName, params) {
    this._topLevelNavigator.dispatch(
      NavigationActions.navigate({
        routeName: 'Home',
        params: {},
        action: NavigationActions.navigate({
          routeName,
          params
        })
      })
    );
  }

  homeGoBack() {
    this._topLevelNavigator.dispatch(
      NavigationActions.navigate({
        routeName: 'Home',
        params: {},
        action: NavigationActions.back({
        })
      })
    );
  }
}

export default new NavigationService;
