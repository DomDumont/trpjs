import * as express from "express";
import * as path from "path";
import errorHandler = require("errorhandler");
import * as bodyParser from "body-parser";

import { IndexRoute } from "./routes/index";
import { GameRoute } from "./routes/game";


export class Server 
{
  public app: express.Application;


 constructor() 
 {



    this.app = express();


    this.config();


    this.routes();


    this.api();


  }

  public config() 
  {
    this.app.use(express.static(path.join(__dirname, "public")));

    //configure pug
    this.app.set("views", path.join(__dirname, "views"));
    this.app.set("view engine", "pug");

    //use json form parser middlware
    this.app.use(bodyParser.json());

    //use query string parser middlware
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));
    
    
   //catch 404 and forward to error handler
    this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        err.status = 404;
        next(err);
    });

    //error handling
    this.app.use(errorHandler());
    
  }

  public routes() 
  {
     //empty for now
    let router: express.Router;
    router = express.Router();

    //Add routes
    IndexRoute.create(router);   
    GameRoute.create(router);   

    //use router middleware
    this.app.use(router);
  }

  public api() 
  {
  }
  


  }