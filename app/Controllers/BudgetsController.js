// @ts-nocheck
import { appState } from "../AppState.js";
import { budgetsService } from "../Services/BudgetsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { saveState } from "../Utils/Store.js";
import { setHTML } from "../Utils/Writer.js";

function _drawBudgets() {
  let template = "";

  for (let b of appState.budgets) {
    template += b.Template;
  }
  setHTML("budgets", template);
}

export class BudgetsController {
  constructor() {
    appState.on("budgets", _drawBudgets);
    appState.on("earnings", _drawBudgets);
    _drawBudgets();
  }

  createBudget() {
    try {
      debugger;
      window.event.preventDefault();
      let form = window.event.target;
      let formData = getFormData(form);
      budgetsService.createBudget(formData);
      form.reset();
    } catch (error) {
      console.error("createBudget", error);
    }
  }
}
