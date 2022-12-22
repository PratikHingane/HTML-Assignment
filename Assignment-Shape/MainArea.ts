import { Rectangle } from "./rectangle.js";
import { Shape } from "./shape.js";
import { Square } from "./square.js";

export class Main{

   calculateArea(shape:Shape):any{
        return shape.area();
    }
}


