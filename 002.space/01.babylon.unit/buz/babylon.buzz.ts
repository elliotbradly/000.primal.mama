import { Container, AnimatedSprite, Texture, Spritesheet, Assets, Sprite } from 'pixi.js';

import * as BABYLON from 'babylonjs'
import HavokPhysics from "@babylonjs/havok";
//import "babylon-mmd/esm/Loader/pmxLoader";
import * as PIXI from 'pixi.js'



import * as ActMku from "../../10.miku.unit/miku.action"
import * as ActScr from "../../08.screen.unit/screen.action"




declare const BABYLONMMD: any;

import * as ActBby from "../../01.babylon.unit/babylon.action";
//import * as ActFce from "../../02.surface.unit/surface.action";

var bit


export const initBabylon = async (cpy: BabylonModel, bal: BabylonBit, ste: State) => {

    debugger

    bal.slv({ intBit: { idx: "init-babylon" } });

    return cpy;
};

var opened = false
var recorder;

export const openBabylon = async (cpy: BabylonModel, bal: BabylonBit, ste: State) => {

    if (opened == true) {
        return
    }

    opened = true;

    async function getInitializedHavok() {
        return await HavokPhysics();
    }

    let canvas = document.getElementById(bal.src) as any;

    canvas = document.createElement("canvas");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.id = "gameCanvas";
    document.body.appendChild(canvas);


    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);

    cpy.scene = scene;

    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);

    engine.runRenderLoop(function () {
        scene.render();
    });

    cpy.engine = engine

    const camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, -10), scene);

    const v0 = new BABYLON.Vector3(0, 0, 0)

    camera.setTarget(v0);
    camera.attachControl(canvas, true);

    //var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 0, -10), scene);
    // Target the camera to scene origin
    //camera.setTarget(BABYLON.Vector3.Zero());
    // Attach the camera to the canvas
    //camera.attachControl(canvas, false);
    //camera.position.y = 10
    //camera.position.x = 0
    //camera.position.z = -30

    //FOLLOW
    //const camera = new BABYLON.FollowCamera("FollowCam", new BABYLON.Vector3(0, 10, -10), scene);
    //camera.radius = 30;
    //camera.heightOffset = 10;
    //camera.rotationOffset = 0;
    //camera.cameraAcceleration = 0.005;
    //camera.maxCameraSpeed = 10;
    //camera.attachControl(canvas, true);


    recorder = new BABYLON.VideoRecorder(cpy.engine);

    globalThis.HK = await getInitializedHavok()

    //await new Promise((resolve) => {
    //    const babylonMmdScript = document.createElement("script");
    //    babylonMmdScript.src = "./babylon.mmd.min.js";
    //    document.head.appendChild(babylonMmdScript);
    //    babylonMmdScript.onload = resolve;
    //});


    // await new Promise((resolve) => {
    //     const babylonMmdScript = document.createElement("script");
    //     babylonMmdScript.src = "./babylon.glTFFileLoader.js";
    //     document.head.appendChild(babylonMmdScript);
    //     babylonMmdScript.onload = resolve;
    // });


    const havokPlugin = new BABYLON.HavokPlugin();
    scene.enablePhysics(new BABYLON.Vector3(0, -98, 0), havokPlugin);


    //this will become the screen
    bit = await ste.hunt(ActScr.WRITE_SCREEN, { idx: 'src00' })


    
    //removed on 04.21
    //BABYLONMMD.SdefInjector.OverrideEngineCreateEffect(engine);

    //const mmdRuntime = new BABYLONMMD.MmdRuntime(scene, new BABYLONMMD.MmdPhysics(scene));
    //mmdRuntime.register(scene);

    //cpy.mmdRuntime = mmdRuntime

    //const mmdCamera = new BABYLONMMD.MmdCamera("MmdCamera", new BABYLON.Vector3(0, 10, 0), scene);
    //mmdCamera.maxZ = 5000;

    //const vmdLoader = new BABYLONMMD.VmdLoader(scene);
    //const motion = await vmdLoader.loadAsync("motion", "./Motion.vmd")

    //cpy.motion = motion;

    //mmdRuntime.setCamera(mmdCamera);
    //removed on 04.21





    //mmdCamera.addAnimation( motion );
    //mmdCamera.setAnimation("motion");

    //const mmdMesh = await BABYLON.SceneLoader.ImportMeshAsync(undefined, "./greasi/00.pmx", undefined, scene).then((result) => result.meshes[0]);
    //mmdMesh.position = new BABYLON.Vector3( 1, 2, 3);
    //const modelMesh = mmdMesh as BABYLON.Mesh
    //modelMesh.receiveShadows = true;;
    //for(const mesh of modelMesh.metadata.meshes) shadowGenerator.addShadowCaster(mesh);
    //const mmdModel = mmdRuntime.createMmdModel(modelMesh);
    //mmdModel.addAnimation(motion);
    //mmdModel.setAnimation("motion");
    //mmdRuntime.playAnimation();


    // NOTE:: SET CAMERA TARGET AFTER THE TARGET'S CREATION AND NOTE CHANGE FROM BABYLONJS V 2.5
    // targetMesh created here.
    //camera.target = modelMesh; // version 2.4 and earlier
    //camera.lockedTarget = modelMesh; //ver

    //bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku00a', src:'greasi/00.pmx', dat: { position:{z:-7}} })
    //bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku00a', dat: { position:{z:40}} })

    //bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku01b', src:'mickey/00.pmx', dat: { position:{z:-7}} })
    //bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku01b', dat: { position:{x:-10,z:40}} })

    for (var i = 0; i < 100; i++) {

        // bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku' + i, src:'mickey/00.pmx', dat: { position:{z:-7}} })
        //bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku' + i, dat: { position:{x: i * -1  ,z:40}} })


    }



    // bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku01', src:'orbie/00.pmx', dat: { position:{z:-7}} })
    // bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku01', dat: { position:{x:-10, z:100}} })

    //bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku02', src:'orbie/00.pmx', dat: { position:{z:-7}} })
    //bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku02', dat: { position:{x:-20, z:100}} })


    //bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku03', src:'orbie/01.pmx', dat: { position:{z:-7}} })
    //bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku03', dat: { position:{x:-30, z:100}} })
    //setInterval( async ()=>{

    //    value -= 1
    //    bit = await ste.hunt( ActMku.WRITE_MIKU, { idx:'mku00', dat: { position:{z:value}} })


    // }, 111 )

    //const plane = BABYLON.MeshBuilder.CreatePlane("plane", { width: 1080, height: 720 }, scene);

    // Create a material and texture
    //const material = new BABYLON.StandardMaterial("planeMaterial", scene);
    //const texture = new BABYLON.Texture("img/000.png", scene);
    //material.diffuseTexture = texture;

    // Apply the material to the plane
    //plane.material = material;
    //plane.scaling.x = .05;
    //plane.scaling.y = .05;
    //plane.scaling.z = .05;

    //plane.position.y += 10;
    //plane.position.x -= 1;

    ///PIXI
    //PIXI
    //PIXI




    // Render Loop
    //engine.runRenderLoop(function () {

    //  scene.autoClear = false;
    //sphere.rotation.y += 0.01;
    // scene.render();
    //engine.wipeCaches(true);

    //pixiRenderer.reset();
    //pixiRenderer.render(stage1);


    //});


    bal.slv({ intBit: { idx: "open-babylon" } });

    return cpy;
};


export const updateBabylon = (cpy: BabylonModel, bal: BabylonBit, ste: State) => {


    return cpy;
};


export const recordBabylon = (cpy: BabylonModel, bal: BabylonBit, ste: State) => {

    recorder.startRecording("000.webm", 22);


    bal.slv({ bbyBit: { idx: "record-babylon" } });

    return cpy;
};

export const actionBabylon = async (cpy: BabylonModel, bal: BabylonBit, ste: State) => {


    recorder.startRecording("000.webm", 60).then(async (videoBlob) => {

        const formData = new FormData();
        formData.append('video', videoBlob, "000.webm"); // 'video' must match the server-side field name

        try {
            const response = await fetch('/api/upload-video', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Upload successful:', data);
                // Handle success (e.g., display a message)
            } else {
                console.error('Upload failed:', response.status, response.statusText);
                // Handle error (e.g., display an error message)
            }
        } catch (error) {
            console.error('Error during upload:', error);
            // Handle network errors, etc.
        }


        //now send to primal mom

        // Do Something with the videoBlob.
    });



    //var recorder = new BABYLON.VideoRecorder(cpy.engine);
    //recorder.startRecording("000.webm", 22);





    bal.slv({ bbyBit: { idx: "action-babylon" } });
    return cpy;
};


export const cutBabylon = (cpy: BabylonModel, bal: BabylonBit, ste: State) => {


    recorder.stopRecording()



    bal.slv({ bbyBit: { idx: "cut-babylon" } });
    return cpy;
};


export const cameraBabylon = (cpy: BabylonModel, bal: BabylonBit, ste: State) => {

    bal.slv({ bbyBit: { idx: "camera-babylon" } });
    return cpy;
};


import { BabylonModel } from "../babylon.model";
import BabylonBit from "../fce/babylon.bit";
import State from "../../99.core/state";