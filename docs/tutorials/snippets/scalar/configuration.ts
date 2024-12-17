import "@tsed/platform-express";
import "@tsed/scalar"; // import swagger Ts.ED module

import {Configuration} from "@tsed/di";

@Configuration({
  scalar: [
    {
      path: "/doc",
      specVersion: "3.0.1"
    }
  ]
})
export class Server {}
