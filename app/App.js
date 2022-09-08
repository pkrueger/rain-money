import { BudgetsController } from "./Controllers/BudgetsController.js";
import { EarningsController } from "./Controllers/EarningsController.js";

class App {
  budgetsController = new BudgetsController();
  earningsController = new EarningsController();
}

window["app"] = new App();
