import { appState } from "../AppState.js";
import { Earning } from "../Models/Earning.js";
import { saveState } from "../Utils/Store.js";

class EarningsService {
  createEarning(formData) {
    appState.earnings = [...appState.earnings, new Earning(formData)];
    saveState("earnings", appState.earnings);
  }
}

export const earningsService = new EarningsService();
