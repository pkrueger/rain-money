import { appState } from "../AppState.js";
import { Budget } from "../Models/Budget.js";
import { saveState } from "../Utils/Store.js";

class BudgetsService {
  createBudget(formData) {
    appState.budgets = [...appState.budgets, new Budget(formData)];
    saveState("budgets", appState.budgets);
  }
}

export const budgetsService = new BudgetsService();
