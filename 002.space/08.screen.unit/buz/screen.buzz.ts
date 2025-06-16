import { ScreenModel } from "../screen.model";
import ScreenBit from "../fce/screen.bit";
import State from "../../99.core/state";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActScr from "../screen.action";

import SeeBit from "../fce/see.bit";
//import * as ActFce from '../../act/surface.action'

import { BabylonModel } from "../../01.babylon.unit/babylon.model";


var bit

export const initScreen = (cpy: ScreenModel, bal: ScreenBit, ste: State) => {
    debugger
    return cpy;
};

export const updateScreen = (cpy: ScreenModel, bal: ScreenBit, ste: State) => {
    return cpy;
};

export const readScreen = async (cpy: ScreenModel, bal: ScreenBit, ste: State) => {
    if (bal.idx == null) bal.idx = 'can00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActScr.CREATE_SCREEN })
    bal.slv({ scrBit: { idx: "read-screen", dat: bit.clcBit.dat } });
    return cpy;
};

export const writeScreen = async (cpy: ScreenModel, bal: ScreenBit, ste: State) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActScr.CREATE_SCREEN })
    if (bit.clcBit.val != 0) ste.hunt(ActScr.UPDATE_SCREEN, { idx: bal.idx })
    bal.slv({ srcBit: { idx: "write-screen", dat: bit.clcBit.dat } });
    return cpy;
};

export const removeScreen = async (cpy: ScreenModel, bal: ScreenBit, ste: State) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActScr.REMOVE_SCREEN })
    if (bal.slv != null) bal.slv({ vsgBit: { idx: "remove-screen", dat: bit.clcBit } });
    bal.slv({ mkuBit: { idx: "remove-screen" } });
    return cpy;
};

export const deleteScreen = (cpy: ScreenModel, bal: ScreenBit, ste: State) => {
    debugger
    return cpy;
};

export const createScreen = async (cpy: ScreenModel, bal: ScreenBit, ste: State) => {
    
    var dat: SeeBit = {
        idx: bal.idx, src: bal.src,
        bit:null
    }

    for (var key in bal.dat) {
        dat[key] = bal.dat[key]
    }

    //OUT TO SHADE
    //RETURN WITH APPLICATION
    if (ste.value.babylon == null) {
        return alert("babylon error")
    }

    var modBab: BabylonModel = ste.value.babylon

    if (typeof window != "object") return bal.slv({ canBit: { idx: "error-create-container", dat: {} } });

    var scene = modBab.scene;

    if ( scene == null ){

        bal.slv({ scrBit: { idx: "create-screen-err", dat:{bit:null} } });
        return 

    }

    

    bit = await window['SHADE'](ActFce.LIST_SURFACE, {})
    var dex = bit.fceBit.lst.length
    var idx = 'fce' + dex;
    console.log("fce: " + idx)
    bit = await window['SHADE'](ActFce.WRITE_SURFACE, { idx })

    const app = bit.fceBit.dat.bit
    //const app = new PIXI.Application();
    await app.init({ background: '#ff00ff', resizeTo: window });


    const stageSize = new BABYLON.Vector2(1280, 720)
    const out = BABYLON.MeshBuilder.CreateGround('out', { width: 1, height: 1 }, scene)
    const baseOutScale = stageSize.clone().scale(0.05)
    out.scaling.set(baseOutScale.x, 1, baseOutScale.y)
    out.rotation.x = -Math.PI * 0.5
    const outMat = new BABYLON.StandardMaterial('outMat', scene)
    out.material = outMat
    out.isVisible = true
    out.position.z = 130;
    out.position.y = 10;
    out.position.x = -10;
    const pixiDt = new BABYLON.DynamicTexture('pixi-extract', { width: stageSize.x, height: stageSize.y }, scene, false)
    const pCtx = pixiDt.getContext()
    outMat.emissiveTexture = pixiDt
    outMat.diffuseTexture = pixiDt
    outMat.opacityTexture = pixiDt
    pixiDt.hasAlpha = true
    outMat.disableLighting = true
    scene.onBeforeRenderObservable.add(() => {
        pCtx.clearRect(0, 0, app.canvas.width, app.canvas.height)
        pCtx.drawImage(app.canvas, 0, 0)
        pixiDt.update()
    }
    )

    scene.onAfterRenderObservable.add(() => {
        app.renderer.clear()
    }
    )


    dat.bit = out 

    
    bal.slv({ scrBit: { idx: "create-screen", dat } });
    return cpy;
};

