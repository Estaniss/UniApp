import { createRef } from 'react';
import {
  CommonActions,
  DrawerActions,
  NavigationAction,
  NavigationContainerRef,
} from '@react-navigation/native';
import Storage from 'scr/services/storage';
import { Stacks } from './routes';

export const navigationRef = createRef<NavigationContainerRef>();

export function dispatch(fn: NavigationAction): void {
  navigationRef.current?.dispatch(fn);
}

export function resetRouteToTop(routeName: string, params?: object): void {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: routeName,
          params,
        },
      ],
    }),
  );
}

export function navigate(routeName: string, params?: object): void {
  navigationRef.current?.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
}

export function toggleDrawer(): void {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
}

export function goBack(): void {
  navigationRef.current?.dispatch(CommonActions.goBack());
}

export function logout(): void {
  Storage.clearUserStorage();
  resetRouteToTop(Stacks.PUBLIC);
}
