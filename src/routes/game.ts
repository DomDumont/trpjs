import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./base";


/**
 * / route
 *
 * @class User
 */
export class GameRoute extends BaseRoute {

  /**
   * Create the routes.
   *
   * @class IndexRoute
   * @method create
   * @static
   */
  public static create(router: Router) {
    //log
    console.log("[IndexRoute::create] Creating game route.");

    //add home page route
    router.get("/game", (req: Request, res: Response, next: NextFunction) => {
      new GameRoute().index(req, res, next);
    });
  }

  /**
   * Constructor
   *
   * @class IndexRoute
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * The home page route.
   *
   * @class IndexRoute
   * @method index
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @next {NextFunction} Execute the next method.
   */
  public index(req: Request, res: Response, next: NextFunction) {
    //set custom title
    this.title = "TRPJS | Game";

    //set options
    let options: Object = {
      message : "Welcome to the Game",
      game : "TheGame"
    };

    //render template
    this.render(req, res, "game", options);
  }
}