import { generateId } from "../Utils/generateId.js";

export class Earning {
  /**
   * FIXME Need to to something to connect Id's between models
   * @param {{id: string, earningSrc: string, earningAmt: number, budgetId:string}} data
   */
  constructor(data) {
    this.id = data.id || generateId();
    this.budgetId = data.budgetId;
    this.earningSrc = data.earningSrc;
    this.earningAmt = data.earningAmt;
  }

  get EarningTemplate() {
    return `
    <div class="earning d-flex justify-content-between mb-2">
      <span>${this.earningSrc}</span>
      <div>
        <span class="me-3">$${this.earningAmt}</span>
        <i class="fa-solid fa-trash selectable" onclick="removeEarning('${this.id}')"></i>
      </div>
    </div>
    `;
  }
}
