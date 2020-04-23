import * as myModule from "../index"
import * as env from "../env";

const event = {};
const context = {};

(async() => {
  const result = await (<any>myModule).handler(event, context);
})();

