import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProfileEntryResponse, User } from "deso-protocol";
import * as _ from "lodash";
import { Observable, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { BackendApiService } from "../../../app/backend-api.service";
import { GlobalVarsService } from "../../../app/global-vars.service";

class AltumbaseLeaderboardResult {
  public_key: string;
  diamonds_received_24h?: number;
  diamonds_received_value_24h?: number;
}

class AltumbaseLeaderboardResponse {
  data: AltumbaseLeaderboardResult[];
  pagination: {
    current_page: number;
    last_page: number;
  };
}

const DeSoLocked = "deso_locked_24h";
const Diamonds = "diamonds_received_24h";

export enum AltumbaseLeaderboardType {
  DeSoLocked = "deso_locked_24h",
  Diamonds = "diamonds_received_24h",
}

export class AltumbaseResponse {
  Profile: ProfileEntryResponse;
  DeSoLockedGained: number;
  DiamondsReceived: number;
  DiamondsReceivedValue: number;
  User: User;
}

export const LeaderboardToDataAttribute = {
  [AltumbaseLeaderboardType.DeSoLocked]: "deso_locked_24h",
  [AltumbaseLeaderboardType.Diamonds]: "diamonds_received_24h",
};

// DISABLED FOR THE FORK: altumbase.com is an indexer for the OLD DeSo network.
// Its leaderboards do not track the fork chain, so the service is stubbed out
// and returns empty results (no network calls). Consumers render empty/hidden
// leaderboards. Re-enable by restoring the HTTP implementations.
@Injectable({
  providedIn: "root",
})
export class AltumbaseService {
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

  getDeSoLockedLeaderboard(): Observable<any> {
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
