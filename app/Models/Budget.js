import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class Budget {
  /**
   *
   * @param {{budgetName: string, budgetGoal: number, budgetType: string, id:string}} data
   */
  constructor(data) {
    this.budgetName = data.budgetName;
    this.budgetGoal = data.budgetGoal;
    this.budgetType = data.budgetType;
    this.id = data.id || generateId();
  }

  get Template() {
    return /*html*/ `
    <div class="col-12 mb-3">
      <div class="card p-4">
        <div class="top-and-middle-card">
          <div
            class="top-of-card d-flex justify-content-between border-bottom border-3 fs-3 mb-3"
          >
            <div class="card-top-left d-flex gap-2">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                aria-label="Checkbox for purchased"
              />
              <span>${this.budgetName}</span>
            </div>
            <div class="card-top-right">
              $<span>0</span> of $<span>${this.budgetGoal}</span>
            </div>
          </div>

          <div class="earnings-area">
          <!-- NOTE EARNINGS GO HERE -->
            ${this.EarningTemplates}
          </div>
        </div>

        <form onsubmit="app.earningsController.createEarning('${this.id}')">
          <div class="d-flex align-items-center">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control bg-secondary"
                name="earningSrc"
                placeholder="What is your earning source?"
                required
              />
              <label for="earningSrc"
                >What is your earning source?</label
              >
            </div>

            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control bg-secondary"
                name="earningAmt"
                placeholder="How much did you earn?"
                required
              />
              <label for="earningAmt">How much did you earn?</label>
            </div>
            <button class="btn btn-primary" type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
    `;
  }

  get EarningTemplates() {
    let template = "";
    let filteredEarnings = appState.earnings.filter(
      (e) => e.budgetId == this.id
    );
    for (let e of filteredEarnings) {
      template += e.EarningTemplate;
    }

    return template;
  }
}
