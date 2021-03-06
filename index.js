// import example from './example..wasm'
//
// console.log('example', example, typeof example)
//
// example({
//   'global': {},
//   'env': {
//     'memory': new WebAssembly.Memory({initial: 256, limit: 1000}),
//     'table': new WebAssembly.Table({initial: 0, element: 'anyfunc'})
//   }
// }).then(inst => console.log('inst', inst))


async function fetchWasm() {
  try {
    const wasmFile = 'example..wasm'
    const urlObj = await fetch(wasmFile)
    const arrayBuff = await urlObj.arrayBuffer()
    const compiledWasm = await WebAssembly.compile(arrayBuff)
    console.log('compiledWasm', compiledWasm)
    const wasmModule = WebAssembly.Module.imports(compiledWasm)

    const importObj = await getWastApi(wasmModule)
    // const importObj = await WebAssembly.Module.imports(wasmModule) // wasm api
    // console.log('urlObj', urlObj, typeof urlObj)
    // console.log('arraBuff', arrayBuff)
    // console.log('importObj', importObj)

  } catch (err) {
    console.log('error in fetchWasm', err)
  }
}

async function getWastApi(module) {
  try {
    let importObj = {}
    Object.keys(module)
    .map(imp => {
      if (typeof importObj[module[imp].module] === 'undefined')
        importObj[module[imp].module] = {}
      switch (module[imp].kind) {
        case 'function':
          importObj[module[imp].module][module[imp].name] = () => {}
          break
        case 'table':
          importObj[module[imp].module][module[imp].name] = new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
          break
        case 'memory':
          importObj[module[imp].module][module[imp].name] = new WebAssembly.Memory({ initital: 256 })
          break
        case 'global':
          importObj[module[imp].module][module[imp].name] = 0
          break
        default:
          break
      }
    })
    console.log('importObj', importObj)
  } catch (err) {
    console.log('error retrieving wast api', err)
  }
}

fetchWasm()
