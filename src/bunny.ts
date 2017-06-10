import * as PIXI from "pixi.js";

let img_bunny = require("../data/images/bunny.png");
let img_bunny2 = require("../data/images/bunny2.png");

export class Bunny
{
    public texture : PIXI.Texture;
    public sprite : PIXI.Sprite;

constructor() 
 {
     this.texture = PIXI.Texture.fromImage(img_bunny);
     this.sprite = new PIXI.Sprite(this.texture);

    this.sprite.anchor.x = 0.5;
    this.sprite.anchor.y = 0.5;
    this.sprite.position.x = 400;
    this.sprite.position.y = 300;
    this.sprite.scale.x = 3;
    this.sprite.scale.y = 3;

 }
}