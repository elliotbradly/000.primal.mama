export default {
    async fetch(request, env) {
        return await handleRequest(request, env)
    },
}

async function handleRequest(request, env) {
    let id = env.DAT_COLOR.idFromName('A')
    let obj = env.DAT_COLOR.get(id)
    let resp = await obj.fetch(request)
    let data = await resp.json()
    return new Response(JSON.stringify(data))
}

export class DatColor {
    constructor(state, env) {
        this.state = state
    }

    async fetch(request) {
        require('./004.color.js')

        let url = new URL(request.url)
        var idx = url.searchParams.get('idx')
        var src = url.searchParams.get('src')
        console.log("show me the idx :: " + idx)
        console.log("show me the src :: " + src)

        console.log("show me the src :: " + globalThis)

        console.log( "color " +  globalThis.COLOR)

        //var body = request.body
        //console.log("show me the body :: " + JSON.stringify(body))

        let value = (await this.state.storage.get('value')) || {
            idx: 'dat-color-init-0',
            lst:[]
        }
        var bit

        switch (url.pathname) {
            case '/loadSpectrum':
                bit = await globalThis.COLOR.hunt(globalThis.COLOR.ActSpk.LOAD_SPECTRUM, { idx });
                value.lst = bit.spkBit.lst;
                break
            case '/update':
                value = Number(value) + 1
                break
            case '/reset':
                value = 555
                break
            case '/':
                value = '001.time';
                break
            default:
                return new Response('Not found', { status: 404 })
        }

        value = JSON.stringify(value)

        await this.state.storage.put('value', value)

        return new Response(value)
    }
}
