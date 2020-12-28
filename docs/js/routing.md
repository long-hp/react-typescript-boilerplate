[8]: ./redux-saga.md
[10]: ./reselect.md

<!--  content -->

# Routing

Để thêm một route mới:

- Trong routes/index.tsx định nghĩa đường dẫn và component

  ```tsx
    import React from 'react';
    import { BrowserRouter, Switch, Route } from 'react-router-dom';
    import { DemoPage } from 'containers/DemoPage';
    import { NotFoundPage } from 'containers/NotFoundPage';
    import { HomePage } from 'containers/HomePage';
    import { Page } from './types';

    export const pages: Page[] = [
      {
        path: '/',
        exact: true,
        component: HomePage,
      },
      {
        path: '/demo',
        exact: true,
        component: DemoPage,
      },
    ];

    const Routes = () => {
      return (
        <BrowserRouter>
          <Switch>
            {pages.map(({ component, path, exact }) => {
              return <Route key={path} component={component} exact={exact} path={path} />;
            })}
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      );
    };

    export default Routes;
  ```

- Trong routes/types.tsx định nghĩa các location state

  ```tsx
      import { ComponentType } from 'react';

      export interface HomePageLocationState {}
      export interface AboutPageLocationState {}
      export interface DemoPageLocationState {}

      export interface LocationStates {
        '/'?: HomePageLocationState;
        '/demo'?: DemoPageLocationState;
        '/about': AboutPageLocationState;
      }

      export type PathName = keyof LocationStates;

      export interface Page {
        path: PathName;
        exact?: boolean;
        component: ComponentType;
      }

      export type Role = 'admin' | 'user';

  ```

<!-- end of content -->

[Prev][8] | [Next][10]
