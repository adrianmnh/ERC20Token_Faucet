"use strict";(self.webpackChunkSmart_Contract_Reader_for_Ethereum=self.webpackChunkSmart_Contract_Reader_for_Ethereum||[]).push([[5281],{5281:function(b,e,a){a.r(e),a.d(e,{TWProxy__factory:function(){return v}});var t=a(15671),c=a(43144),f=a(82963),r=a(11752),n=a(61120),d=a(60136),i=a(29388);function o(b){var e=function(b,e){if("object"!==typeof b||null===b)return b;var a=b[Symbol.toPrimitive];if(void 0!==a){var t=a.call(b,e||"default");if("object"!==typeof t)return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(b)}(b,"string");return"symbol"===typeof e?e:String(e)}function u(b,e,a){return(e=o(e))in b?Object.defineProperty(b,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):b[e]=a,b}var l=a(99456),y=a(39707),p=[{inputs:[{internalType:"address",name:"_logic",type:"address"},{internalType:"bytes",name:"_data",type:"bytes"}],stateMutability:"payable",type:"constructor"},{stateMutability:"payable",type:"fallback"},{stateMutability:"payable",type:"receive"}],s="0x60806040526040516106ab3803806106ab83398101604081905261002291610261565b61004d60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd61032f565b6000805160206106648339815191521461006957610069610354565b8161008e60008051602061066483398151915260001b6100d060201b6100521760201c565b80546001600160a01b0319166001600160a01b03929092169190911790558051156100c9576100c782826100d360201b6100551760201c565b505b50506103b9565b90565b60606100f88383604051806060016040528060278152602001610684602791396100ff565b9392505050565b60606001600160a01b0384163b61016c5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b031685604051610187919061036a565b600060405180830381855af49150503d80600081146101c2576040519150601f19603f3d011682016040523d82523d6000602084013e6101c7565b606091505b5090925090506101d88282866101e2565b9695505050505050565b606083156101f15750816100f8565b8251156102015782518084602001fd5b8160405162461bcd60e51b81526004016101639190610386565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561024c578181015183820152602001610234565b8381111561025b576000848401525b50505050565b6000806040838503121561027457600080fd5b82516001600160a01b038116811461028b57600080fd5b60208401519092506001600160401b03808211156102a857600080fd5b818501915085601f8301126102bc57600080fd5b8151818111156102ce576102ce61021b565b604051601f8201601f19908116603f011681019083821181831017156102f6576102f661021b565b8160405282815288602084870101111561030f57600080fd5b610320836020830160208801610231565b80955050505050509250929050565b60008282101561034f57634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b6000825161037c818460208701610231565b9190910192915050565b60208152600082518060208401526103a5816040850160208701610231565b601f01601f19169190910160400192915050565b61029c806103c86000396000f3fe60806040523661001357610011610017565b005b6100115b61005061004b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b610081565b565b90565b606061007a8383604051806060016040528060278152602001610240602791396100a5565b9392505050565b3660008037600080366000845af43d6000803e8080156100a0573d6000f35b3d6000fd5b60606001600160a01b0384163b6101125760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161012d91906101f0565b600060405180830381855af49150503d8060008114610168576040519150601f19603f3d011682016040523d82523d6000602084013e61016d565b606091505b509150915061017d828286610187565b9695505050505050565b6060831561019657508161007a565b8251156101a65782518084602001fd5b8160405162461bcd60e51b8152600401610109919061020c565b60005b838110156101db5781810151838201526020016101c3565b838111156101ea576000848401525b50505050565b600082516102028184602087016101c0565b9190910192915050565b602081526000825180602084015261022b8160408501602087016101c0565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122006108c1246a0a89b20e860cd835de4e438789f40f69cfafd9cd667687d38322564736f6c634300080c0033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564",v=function(b){(0,d.Z)(a,b);var e=(0,i.Z)(a);function a(){var b;(0,t.Z)(this,a);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return b=r.length>1?e.call.apply(e,[this].concat(r)):e.call(this,p,s,r[0]),(0,f.Z)(b)}return(0,c.Z)(a,[{key:"deploy",value:function(b,e,t){return(0,r.Z)((0,n.Z)(a.prototype),"deploy",this).call(this,b,e,t||{})}},{key:"getDeployTransaction",value:function(b,e,t){return(0,r.Z)((0,n.Z)(a.prototype),"getDeployTransaction",this).call(this,b,e,t||{})}},{key:"attach",value:function(b){return(0,r.Z)((0,n.Z)(a.prototype),"attach",this).call(this,b)}},{key:"connect",value:function(b){return(0,r.Z)((0,n.Z)(a.prototype),"connect",this).call(this,b)}}],[{key:"createInterface",value:function(){return new l.vU(p)}},{key:"connect",value:function(b,e){return new y.CH(b,p,e)}}]),a}(y.lV);u(v,"bytecode",s),u(v,"abi",p)}}]);