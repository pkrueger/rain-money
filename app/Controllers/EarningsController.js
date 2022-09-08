// @ts-nocheck
import { earningsService } from "../Services/EarningsService.js";
import { getFormData } from "../Utils/FormHandler.js";
export class EarningsController {
  constructor() {}

  createEarning(id) {
    window.event.preventDefault();
    let form = window.event.target;
    let formData = getFormData(form);
    formData.budgetId = id;
    earningsService.createEarning(formData);
    form.reset();
  }
}
