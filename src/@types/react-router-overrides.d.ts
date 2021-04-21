import * as H from 'history';
import { PathName } from 'routes/types';
import { LiteralUnion, GetState } from 'type';
declare module 'react-router' {
  export interface LocationDescriptorObject<P extends string> {
    pathname?: LiteralUnion<P, PathName>;
    search?: H.Search;
    state?: GetState<P>;
    hash?: H.Hash;
    key?: H.LocationKey;
  }
  export interface History<HistoryLocationState = H.LocationState> {
    length: number;
    action: H.Action;
    location: Location<HistoryLocationState>;
    push<P extends string>(path: LiteralUnion<P, PathName>, state: GetState<P>): void;
    push(location: LocationDescriptorObject): void;
    replace<P extends string>(path: LiteralUnion<P, PathName>, state?: GetState<P>): void;
    replace(location: LocationDescriptorObject): void;
    go(n: number): void;
    goBack(): void;
    goForward(): void;
    block(prompt?: boolean | string | H.TransitionPromptHook<H.HistoryLocationState>): H.UnregisterCallback;
    listen(listener: H.LocationListener<H.HistoryLocationState>): H.UnregisterCallback;
    createHref(location: LocationDescriptorObject): H.Href;
  }
  export function useHistory<HistoryLocationState = LocationState>(): History<HistoryLocationState>;
}
