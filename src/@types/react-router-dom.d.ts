import { match } from 'react-router';
import * as React from 'react';
import * as H from 'history';
import { PathName } from 'routes/types';
import { GetState, LiteralUnion } from './type';

declare module 'react-router-dom' {
  export interface Location<P extends string> {
    pathname: LiteralUnion<P, PathName>;
    search: H.Search;
    state: GetState<P>;
    hash: H.Hash;
    key?: H.LocationKey;
  }
  export interface LocationDescriptorObject<P extends string> {
    pathname?: LiteralUnion<P, PathName>;
    search?: H.Search;
    state?: GetState<P>;
    hash?: H.Hash;
    key?: H.LocationKey;
  }
  export type LocationDescriptor<P extends string> = LiteralUnion<P, PathName> | LocationDescriptorObject<P>;

  export {
    generatePath,
    Prompt,
    MemoryRouter,
    RedirectProps,
    Redirect,
    RouteChildrenProps,
    RouteComponentProps,
    RouteProps,
    Route,
    Router,
    StaticRouter,
    SwitchProps,
    Switch,
    match,
    matchPath,
    withRouter,
    RouterChildContext,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch,
  } from 'react-router';

  export interface BrowserRouterProps {
    basename?: string;
    getUserConfirmation?: (message: string, callback: (ok: boolean) => void) => void;
    forceRefresh?: boolean;
    keyLength?: number;
  }
  export class BrowserRouter extends React.Component<BrowserRouterProps, any> {}

  export interface HashRouterProps {
    basename?: string;
    getUserConfirmation?: (message: string, callback: (ok: boolean) => void) => void;
    hashType?: 'slash' | 'noslash' | 'hashbang';
  }
  export class HashRouter extends React.Component<HashRouterProps, any> {}

  export interface LinkProps<P extends LiteralUnion<PathName>> extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    component?: React.ComponentType<any>;
    to: LocationDescriptor<P> | ((location: Location<P>) => LocationDescriptor<P>);
    replace?: boolean;
    innerRef?: React.Ref<HTMLAnchorElement>;
  }
  export class Link<P extends LiteralUnion<PathName>> extends React.Component<LinkProps<P>, any> {}

  export interface NavLinkProps<P extends LiteralUnion<PathName>> extends LinkProps<P> {
    activeClassName?: string;
    activeStyle?: React.CSSProperties;
    exact?: boolean;
    strict?: boolean;
    isActive?<Params extends { [K in keyof Params]?: string }>(match: match<Params>, location: Location<P>): boolean;
    location?: Location<P>;
  }
  export class NavLink<P extends LiteralUnion<PathName>> extends React.Component<NavLinkProps<P>, any> {}
}
