import * as H from 'history';
import { LocationStates } from 'routes/types';

declare module 'react-router' {
  export interface LocationDescriptorObject<P extends keyof LocationStates> {
    pathname?: P;
    search?: H.Search;
    state?: LocationStates[P];
    hash?: H.Hash;
    key?: H.LocationKey;
  }
  export interface History<HistoryLocationState = H.LocationState> {
    length: number;
    action: H.Action;
    location: Location<HistoryLocationState>;
    push<P extends keyof LocationStates>(path: P, state?: LocationStates[P]): void;
    push(location: LocationDescriptorObject): void;
    replace<P extends keyof LocationStates>(path: P, state?: LocationStates[P]): void;
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
