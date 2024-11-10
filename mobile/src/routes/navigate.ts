import { createRef } from 'react';
import { RoutesEnum } from './types';
import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createRef<NavigationContainerRef<any>>();

export interface NavigateProps<ParamsType = unknown> {
  routeName: RoutesEnum;
  params?: ParamsType | { screen: RoutesEnum; params?: ParamsType };
}

export const navigate = <ParamsType>({
  routeName,
  params,
}: NavigateProps<ParamsType>) => {
  if (navigationRef.current?.isReady()) {
    navigationRef.current.navigate(routeName, params ? params : {});
  }
};

export const resetNavigation = <ParamsType>({
  routeName,
  params,
}: NavigateProps<ParamsType>) => {
  if (navigationRef.current?.isReady()) {
    navigationRef.current.reset({
      index: 0,
      routes: [
        {
          name: routeName,
          params: params || {},
        },
      ],
    });
  }
};
