import { match } from 'react-router';
import * as React from 'react';
import * as H from 'history';
import { PathName } from 'routes/types';
import { GetState, LiteralUnion, LiteralUnionAndObject } from './type';

declare module 'react-router-dom' {
  export interface Location<P extends string> {
    pathname: LiteralUnion<P, PathName>;
    state?: GetState<P>;
    search?: H.Search;
    hash: H.Hash;
    key?: H.LocationKey;
  }

  export interface LocationDescriptorObject<P extends string> {
    pathname: LiteralUnion<P, PathName>;
    state: GetState<P>;
    search?: H.Search;
    hash?: H.Hash;
    key?: H.LocationKey;
  }

  export type LocationDescriptor<P extends string> = LiteralUnionAndObject<P, PathName> | LocationDescriptorObject<P>;

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

  export interface LinkProps<Path extends string> extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    component?: React.ComponentType<any>;
    to: LocationDescriptor<Path> | ((location: Location<Path>) => LocationDescriptorObject<Path>);
    replace?: boolean;
    innerRef?: React.Ref<HTMLAnchorElement>;
  }
  export class Link<P extends string> extends React.Component<LinkProps<P>, any> {}

  export interface NavLinkProps<P extends LiteralUnion<PathName>> extends LinkProps<P> {
    activeClassName?: string;
    activeStyle?: React.CSSProperties;
    exact?: boolean;
    strict?: boolean;
    isActive?<Params extends { [K in keyof Params]?: string }>(match: match<Params>, location: Location<P>): boolean;
    location?: Location<P>;
  }
  export class NavLink<P extends string> extends React.Component<NavLinkProps<P>, any> {}

  export interface RedirectProps<Path extends string> {
    to: LocationDescriptor<Path>;
    push?: boolean;
    from?: string;
    path?: string;
    exact?: boolean;
    strict?: boolean;
  }
  export class Redirect<Path extends string> extends React.Component<RedirectProps<Path>> {}
}
