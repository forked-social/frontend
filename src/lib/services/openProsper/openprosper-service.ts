//@ts-strict
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

export interface OpenProsperAPIResult<T> {
  ok: boolean;
  value: T;
}

interface OpenProsperHashtags {
  Hashtag: string;
  Count: number;
  AccountCount: number;
}

interface OpenProsperTopHashtags {
  Hours24: {
    FromTstampSecs: number;
    ToTstampSecs: number;
    Top10Hashtags: OpenProsperHashtags[];
  };
}

export interface OpenProsperAggregateEarnings {
  last24h: number;
  last7d: number;
  last30d: number;
  allTime: number;
}

export interface OpenProsperEarningsDetail {
  DiamondsReceivedNanos: number;
  FREarnedNanos: number;
  NFTEarnings: number;
  NFTEarningsBreakdown: {
    NFTPrimarySaleNanos: number;
    NFTOwnSecondarySaleNanos: number;
    NFTOtherSecondarySaleNanos: number;
    NFTRoyaltySplitSaleNanos: number;
    NFTBuyNowNanos: number;
  };
}

export enum OpenProsperLeaderboardType {
  Hashtags = "trending-hashtags-x8k6jw1",
}

// DISABLED FOR THE FORK: openprosperapi.xyz is an indexer for the OLD DeSo
// network. It does not track the fork chain, so the service is stubbed out and
// returns empty results (no network calls). Consumers render empty/hidden UI.
// Re-enable by restoring the HTTP implementations.
@Injectable({
  providedIn: "root",
})
export class OpenProsperService {
  constructor(private httpClient: HttpClient) {}

  getTrendingHashtagsPage(): Observable<OpenProsperHashtags[]> {
    return of([]);
  }

  getAggregateEarnings(): Observable<OpenProsperAggregateEarnings> {
    return of({ last24h: 0, last7d: 0, last30d: 0, allTime: 0 });
  }
}
