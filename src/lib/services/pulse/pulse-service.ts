import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProfileEntryResponse, User } from "deso-protocol";
import * as _ from "lodash";
import { Observable, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { BackendApiService } from "../../../app/backend-api.service";
import { GlobalVarsService } from "../../../app/global-vars.service";

class PulseLeaderboardResult {
  public_key: string;
  diamonds?: number;
  net_change_24h_bitclout_nanos?: number;
}

class PulseLeaderboardResponse {
  results: PulseLeaderboardResult[];
  pagination: {
    current_page: number;
    total_pages: number;
  };
}

const DeSoLocked = "bitclout_locked_24h";
const Diamonds = "diamonds_received_24h";

export enum PulseLeaderboardType {
  DeSoLocked = "bitclout_locked_24h",
  Diamonds = "diamonds_received_24h",
}

export class LeaderboardResponse {
  Profile: ProfileEntryResponse;
  DeSoLockedGained: number;
  DiamondsReceived: number;
  User: User;
}

export class HashtagResponse {
  Hashtag: string;
  Count: number;
  AccountCount: number;
}

export const LeaderboardToDataAttribute = {
  [PulseLeaderboardType.DeSoLocked]: "net_change_24h_bitclout_nanos",
  [PulseLeaderboardType.Diamonds]: "diamonds",
};

// DISABLED FOR THE FORK: pulse.bitclout.com is an indexer for the OLD DeSo
// network. It does not track the fork chain, so the service is stubbed out and
// returns empty results (no network calls). Consumers render empty/hidden
// leaderboards. Re-enable by restoring the HTTP implementations.
@Injectable({
  providedIn: "root",
})
export class PulseService {
  constructor(
    private httpClient: HttpClient,
    private backendApi: BackendApiService,
    private globalVars: GlobalVarsService
  ) {}

  getDiamondsReceivedLeaderboard(): Observable<any> {
    return of([]);
  }

  getDiamondsReceivedPage(
    pageNumber: number,
    pageSize: number = 20,
    skipFilters = false
  ): Observable<any> {
    return of([]);
  }

  getDeSoLockedLeaderboard(): Observable<LeaderboardResponse[]> {
    return of([]);
  }

  getDeSoLockedPage(
    pageNumber: number,
    pageSize: number = 20,
    skipFilters = false
  ): Observable<any> {
    return of([]);
  }
}
