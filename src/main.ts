import * as PIXI from "pixi.js";
import { Bunny } from "./bunny";



let renderer = PIXI.autoDetectRenderer(800, 600, {backgroundColor: 0x1099bb});
document.body.appendChild(renderer.view);

let stage = new PIXI.Container();
let bunnyInstance = new Bunny();

stage.addChild(bunnyInstance.sprite);


var circle = new PIXI.Graphics();
circle.beginFill(0xFF00AA);
circle.drawCircle(0, 0, 32);
circle.endFill();
circle.x = 120;
circle.y = 120;
stage.addChild(circle);



animate();

function animate() {
    requestAnimationFrame(animate);
    let tempBunny = stage.getChildAt(0);
    tempBunny.rotation += 0.05;
    renderer.render(stage);
}
