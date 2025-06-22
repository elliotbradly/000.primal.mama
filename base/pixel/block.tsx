import React from 'react'

import State from "../../400.pixel/99.core/state";
import * as Import from "../../400.pixel/BEE";

var once = false

export default function PixelBlock() {


    let sim = {
        hunt: (a, b) => { },
        state: null
    };

    //setBus(sim)

    sim.hunt = (typ, obj) => { return host(obj, typ) }

    var host = (obj, typ) => {

        init();

        var slv;
        const promo = new Promise((rslv, rjct) => (slv = rslv));

        if (obj == null) obj = {};
        if (obj.slv == null) obj.slv = (val0) => slv(val0);

        sim.state.dispatch({ type: typ, bale: obj });
        return promo;
    };

    var init = () => {
        if (sim.state != null) return;
        sim.state = new State();
        sim.state.pivot = sim;
        sim.state.hunt = sim.hunt
        for (var k in Import.list) new Import.list[k](sim.state);
    };

    var bit;

    window

    if ( window['PIXEL'] == null ) window['PIXEL'] = sim.hunt

    //setTimeout(async () => {
    //    if (typeof window === 'undefined') {
    //        return
    //    }

    //    if (once == false) {
    //        once = true
    //        bit = await sim.hunt( ActFce.CREATE_SURFACE , { src:"surface00" })

    //        return
    //    }

    //}, 333 )


    return (
        <>

        </>
    )


}

