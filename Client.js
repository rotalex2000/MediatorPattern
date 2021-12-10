import { Airplane } from "./Airplane";
import { ControlTower } from "./ControlTower";

var a1 = new Airplane("A1");
var a2 = new Airplane("A2");
var a3 = new Airplane("A3");
var a4 = new Airplane("A4");

var controlTower = new ControlTower();
controlTower.registerAirplane(a1);
controlTower.registerAirplane(a2);
controlTower.registerAirplane(a3);
controlTower.registerAirplane(a4);
