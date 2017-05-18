import {Engine, FreeCamera, Mesh, Scene, Vector3} from "babylonjs";
import "../config/environment";
import './style.css';

window.addEventListener('DOMContentLoaded', () => {

    const canvas = <HTMLCanvasElement>document.getElementById('game-canvas');
    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);

    new FreeCamera('player-camera', new Vector3(0, 4.02, 0), this.scene);
    Mesh.CreateGround('ground1', 500, 500, 2, scene);
    engine.runRenderLoop(() => scene.render());
  }

);
