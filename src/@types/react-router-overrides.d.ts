import * as H from 'history';
import { PathName } from 'routes/types';
import { LiteralUnion, GetState } from 'type';
declare module 'react-router' {
  export interface LocationDescriptorObject<P extends string> {
    pathname: LiteralUnion<P, PathName>;
    state: GetState<P>;
    search?: H.Search;
    hash?: H.Hash;
    key?: H.LocationKey;
  }
  export interface Location<P extends PathName> {
    readonly ancestorOrigins: DOMStringList;
    hash: string;
    host: string;
    hostname: string;
    href: string;
    toString(): string;
    readonly origin: string;
    pathname: P;
    port: string;
    protocol: string;
    search: string;
    assign<URL extends string>(url: LiteralUnion<URL, PathName>): void;
    reload(): void;
    /** @deprecated */
    reload(forcedReload: boolean): void;
    replace<URL extends string>(url: LiteralUnion<URL, PathName>): void;
  }
  export interface History<P extends PathName> {
    length: number;
    action: H.Action;
    location: Location<P>;
    push<P extends string>(location: LocationDescriptorObject<P>): void;
    push<P extends string>(path: LiteralUnion<P, PathName>, state: GetState<P>): void;
    replace<P extends string>(location: LocationDescriptorObject<P>): void;
    replace<P extends string>(path: LiteralUnion<P, PathName>, state: GetState<P>): void;
    go(n: number): void;
    goBack(): void;
    goForward(): void;
    block(prompt?: boolean | string | H.TransitionPromptHook<H.HistoryLocationState>): H.UnregisterCallback;
    listen(listener: H.LocationListener<H.HistoryLocationState>): H.UnregisterCallback;
    createHref<P extends string>(location: LocationDescriptorObject<P>): H.Href;
  }

  export function useHistory<P extends PathName>(): History<P>;
  export function useLocation<P extends PathName>(): Location<P>;
}
