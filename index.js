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
    console.log('urlObj', urlObj, typeof urlObj)
  } catch (err) {
    console.log('error in fetchWasm', err)
  }
}

fetchWasm()
