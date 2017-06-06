import * as express from "express";
import * as path from "path";

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
  }

  public routes() 
  {
  }

  public api() 
  {
  }
  


  }