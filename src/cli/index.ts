import * as myModule from "../index";
import * as env from "../env";

const event = {};
const context = {
  awslogs: {
    data: process.argv[2],
  },
};

(async () => {
  const result = await (<any>myModule).handler(event, context);
})();
