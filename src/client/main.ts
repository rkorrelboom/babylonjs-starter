import {Engine, FreeCamera, Mesh, Scene, Vector3} from "babylonjs";
import * as io from "socket.io-client";
import * as debug from "debug";
import "../config/environment";
import './style.css';

window.addEventListener('DOMContentLoaded', () => {

    const log = debug('app:main');
    const socket = io(`:3000`);
    const canvas = <HTMLCanvasElement>document.getElementById('game-canvas');
    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);

    new FreeCamera('player-camera', new Vector3(0, 4.02, 0), this.scene);
    Mesh.CreateGround('ground1', 500, 500, 2, scene);
    engine.runRenderLoop(() => scene.render());

    socket.on('connect', (data) => {
      log(`Socket connection succesful. Socket ID: ${socket.id}`);
    });

  }
);