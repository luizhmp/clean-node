import { Router } from "express";
import { makeSignupController } from "../factories/signup/signup-factory";
import { adaptRoute } from "../adapters/express-route-adapter";

export default (router: Router): void => {
  router.post("/signup", adaptRoute(makeSignupController()));
};
