// Automatically generated with Reach 0.1.8 (9e3e58f4)
/* eslint-disable */
export const _version = '0.1.8';
export const _versionHash = '0.1.8 (9e3e58f4)';
export const _backendVersion = 10;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  
  return {
    infos: {
      },
    views: {
      1: [ctc3],
      2: [ctc4, ctc5, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 8));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 96));
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Token;
  
  
  const v140 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v141 = [v140];
  const v156 = stdlib.protect(ctc0, await interact.setAddress(), {
    at: './index.rsh:40:47:application',
    fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)'],
    msg: 'setAddress',
    who: 'Buyer'
    });
  const v157 = stdlib.protect(ctc0, await interact.setAddress(), {
    at: './index.rsh:41:51:application',
    fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)'],
    msg: 'setAddress',
    who: 'Buyer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v156, v157],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:43:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v159, v160], secs: v162, time: v161, didSend: v39, from: v158 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:43:9:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v159, v160], secs: v162, time: v161, didSend: v39, from: v158 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 5,
    funcNum: 1,
    out_tys: [ctc1, ctc2, ctc3, ctc1, ctc4],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v164, v165, v166, v167, v168], secs: v170, time: v169, didSend: v48, from: v163 } = txn2;
  ;
  const v171 = stdlib.gt(v168, stdlib.checkedBigNumberify('./index.rsh:47:20:decimal', stdlib.UInt_max, 10));
  stdlib.assert(v171, {
    at: './index.rsh:47:10:application',
    fs: [],
    msg: null,
    who: 'Buyer'
    });
  const v172 = undefined;
  const v173 = await txn2.getOutput('internal', 'v172', ctc5, v172);
  const v183 = v141[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0)];
  const v185 = v183[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 1)];
  const v186 = v183[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 2)];
  const v187 = [v168, v185, v186];
  const v188 = stdlib.Array_set(v141, stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0), v187);
  const v190 = v188[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0)];
  const v191 = v190[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0)];
  const v193 = v190[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 2)];
  const v194 = [v191, v168, v193];
  const v195 = stdlib.Array_set(v188, stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0), v194);
  const v196 = v195[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0)];
  const v197 = v196[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0)];
  const v198 = v196[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 1)];
  const v200 = [v197, v198, false];
  const v201 = stdlib.Array_set(v195, stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0), v200);
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v205, time: v204, didSend: v72, from: v203 } = txn3;
  ;
  const v206 = stdlib.addressEq(v163, v203);
  stdlib.assert(v206, {
    at: './index.rsh:58:19:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  const v209 = v201[stdlib.checkedBigNumberify('./index.rsh:62:20:application', stdlib.UInt_max, 0)];
  const v210 = v209[stdlib.checkedBigNumberify('./index.rsh:62:20:application', stdlib.UInt_max, 0)];
  undefined;
  undefined;
  return;
  
  
  
  
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 8));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 96));
  const ctc4 = stdlib.T_Object({
    metadata: ctc0,
    name: ctc0,
    supply: ctc1,
    symbol: ctc2,
    url: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  
  
  const v140 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v141 = [v140];
  const v147 = stdlib.protect(ctc4, await interact.getParams(), {
    at: './index.rsh:34:25:application',
    fs: ['at ./index.rsh:32:23:application call to [unknown function] (defined at: ./index.rsh:32:27:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v148 = v147.name;
  const v149 = v147.symbol;
  const v150 = v147.url;
  const v151 = v147.metadata;
  const v152 = v147.supply;
  const v153 = stdlib.gt(v152, stdlib.checkedBigNumberify('./index.rsh:36:21:decimal', stdlib.UInt_max, 10));
  stdlib.assert(v153, {
    at: './index.rsh:36:11:application',
    fs: ['at ./index.rsh:32:23:application call to [unknown function] (defined at: ./index.rsh:32:27:function exp)'],
    msg: null,
    who: 'Creator'
    });
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc5, ctc5],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v159, v160], secs: v162, time: v161, didSend: v39, from: v158 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v141, v148, v149, v150, v151, v152],
    evt_cnt: 5,
    funcNum: 1,
    lct: v161,
    onlyIf: true,
    out_tys: [ctc0, ctc2, ctc3, ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:46:19:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v164, v165, v166, v167, v168], secs: v170, time: v169, didSend: v48, from: v163 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:46:19:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v171 = stdlib.gt(v168, stdlib.checkedBigNumberify('./index.rsh:47:20:decimal', stdlib.UInt_max, 10));
      stdlib.assert(v171, {
        at: './index.rsh:47:10:application',
        fs: [],
        msg: null,
        who: 'Creator'
        });
      const v172 = stdlib.simTokenNew(sim_r, v164, v165, v166, v167, v168, undefined, getSimTokCtr());
      const v173 = await txn2.getOutput('internal', 'v172', ctc6, v172);
      const v183 = v141[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0)];
      const v185 = v183[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 1)];
      const v186 = v183[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 2)];
      const v187 = [v168, v185, v186];
      const v188 = stdlib.Array_set(v141, stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0), v187);
      const v190 = v188[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0)];
      const v191 = v190[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0)];
      const v193 = v190[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 2)];
      const v194 = [v191, v168, v193];
      const v195 = stdlib.Array_set(v188, stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0), v194);
      const v196 = v195[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0)];
      const v197 = v196[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0)];
      const v198 = v196[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 1)];
      const v200 = [v197, v198, false];
      const v201 = stdlib.Array_set(v195, stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0), v200);
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc10, ctc0, ctc2, ctc3, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v164, v165, v166, v167, v168], secs: v170, time: v169, didSend: v48, from: v163 } = txn2;
  ;
  const v171 = stdlib.gt(v168, stdlib.checkedBigNumberify('./index.rsh:47:20:decimal', stdlib.UInt_max, 10));
  stdlib.assert(v171, {
    at: './index.rsh:47:10:application',
    fs: [],
    msg: null,
    who: 'Creator'
    });
  const v172 = undefined;
  const v173 = await txn2.getOutput('internal', 'v172', ctc6, v172);
  const v183 = v141[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0)];
  const v185 = v183[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 1)];
  const v186 = v183[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 2)];
  const v187 = [v168, v185, v186];
  const v188 = stdlib.Array_set(v141, stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0), v187);
  const v190 = v188[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0)];
  const v191 = v190[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0)];
  const v193 = v190[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 2)];
  const v194 = [v191, v168, v193];
  const v195 = stdlib.Array_set(v188, stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0), v194);
  const v196 = v195[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0)];
  const v197 = v196[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0)];
  const v198 = v196[stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 1)];
  const v200 = [v197, v198, false];
  const v201 = stdlib.Array_set(v195, stdlib.checkedBigNumberify('./index.rsh:50:25:application', stdlib.UInt_max, 0), v200);
  stdlib.protect(ctc7, await interact.showToken(v173), {
    at: './index.rsh:1:39:application',
    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:51:37:application call to "liftedInteract" (defined at: ./index.rsh:51:37:application)'],
    msg: 'showToken',
    who: 'Creator'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v163, v173, v201],
    evt_cnt: 0,
    funcNum: 2,
    lct: v169,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:58:19:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v205, time: v204, didSend: v72, from: v203 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:58:19:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v206 = stdlib.addressEq(v163, v203);
      stdlib.assert(v206, {
        at: './index.rsh:58:19:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Creator'
        });
      const v209 = v201[stdlib.checkedBigNumberify('./index.rsh:62:20:application', stdlib.UInt_max, 0)];
      const v210 = v209[stdlib.checkedBigNumberify('./index.rsh:62:20:application', stdlib.UInt_max, 0)];
      stdlib.simTokenBurn(sim_r, v173, v210);
      stdlib.simTokenDestroy(sim_r, v173);
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc5, ctc6, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v205, time: v204, didSend: v72, from: v203 } = txn3;
  ;
  const v206 = stdlib.addressEq(v163, v203);
  stdlib.assert(v206, {
    at: './index.rsh:58:19:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  const v209 = v201[stdlib.checkedBigNumberify('./index.rsh:62:20:application', stdlib.UInt_max, 0)];
  const v210 = v209[stdlib.checkedBigNumberify('./index.rsh:62:20:application', stdlib.UInt_max, 0)];
  undefined;
  undefined;
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BSAFAAECA6CNBiYCAAEAIjUAMRhBAl0oZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgEXNhoCFzUENhoDNQVJIwxAAYhJJAxAAFEkEkQkNAESRDQESSISTDQCEhFEKWRJNQOBIFs1/4AEQbFATbA0A1cAIDEAEkSxJbIQNP+yIbMisbIII7IQMgmyCTIKsgezIkgxGYEFEkRCAa9IIzQBEkQ0BEkiEkw0AhIRRClkSTUDNf80BVcAIDX+NAVXIAg1/TQFVyhgNfw0BVeIIDX7NAWBqAFbNfqABGJH3980/lA0/VA0/FA0+1A0+hZQsDT6gQoNRCEESUEAHTQASSMINQBMSwE4CBJEI0sBOBASRDIKSwE4BxJESLElshA0+rIigQayIzT9siU0/rImNPyyJzT7sigyCrIps7Q8NfmACAAAAAAAAACsNPkWULA0+TX4NP9XABE19zT/SCg0+hY091cICFA091cQAVBQNP9ISTX2VwARNfU09kgoNPVXAAg0+hZQNPVXEAFQUDT2SEk19FcAETXzNPRIKDTzVwAINPNXCAhQKVBQNPRINfIxADT4FlA08lApSwFXADlnSCQ1ATIGNQIxGSISREIAfkgiNAESRDQESSISTDQCEhFENAVXACA1/zQFVyAgNf6ABOssmWI0/1A0/lCwIQRJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRIgBEAAAAAAAAAAAAAAAAAAAAAADX9NP0pSwFXABFnSCM1ATIGNQIxGSISREIAACg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEIjUBIjUCQv/L`,
  appClear: `BQ==`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 57,
  unsupported: [],
  version: 9,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v159",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v160",
                "type": "address"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v159",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v160",
                "type": "address"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T6",
                "name": "v164",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T7",
                "name": "v165",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T8",
                "name": "v166",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T6",
                "name": "v167",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v168",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v172",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T6",
                "name": "v164",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T7",
                "name": "v165",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T8",
                "name": "v166",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T6",
                "name": "v167",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v168",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002400380380620024008339810160408190526200002691620002d5565b60008055436003556200003862000142565b604080518351815260208085015180516001600160a01b0390811683850152910151168183015290517f4016f23a910c3dc75be8566c3d72036bf3fd9b5ad6a5086ecc12e0d6b9b997999181900360600190a180516000908190528151602090810182905282516040019190915281519082015152620000bb3415600762000118565b620000c562000179565b602080830151825260016000819055439055604051620000e8918391016200034a565b604051602081830303815290604052600290805190602001906200010e9291906200018e565b50505050620003d7565b816200013e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101620001746200021d565b905290565b6040518060200160405280620001746200021d565b8280546200019c906200039a565b90600052602060002090601f016020900481019282620001c057600085556200020b565b82601f10620001db57805160ff19168380011785556200020b565b828001600101855582156200020b579182015b828111156200020b578251825591602001919060010190620001ee565b50620002199291506200026a565b5090565b60405180602001604052806001905b62000253604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200022c5790505090565b5b808211156200021957600081556001016200026b565b604080519081016001600160401b0381118282101715620002b257634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114620002d057600080fd5b919050565b60008183036060811215620002e957600080fd5b620002f362000281565b835181526040601f19830112156200030a57600080fd5b6200031462000281565b91506200032460208501620002b8565b82526200033460408501620002b8565b6020830152816020820152809250505092915050565b81516060828101918360005b6001811015620003905782518051835260208082015181850152604091820151151591840191909152909201919083019060010162000356565b5050505092915050565b600181811c90821680620003af57607f821691505b60208210811415620003d157634e487b7160e01b600052602260045260246000fd5b50919050565b61201980620003e76000396000f3fe608060405260043610620000515760003560e01c80631e93b0f1146200005b5780637eea518c1462000080578063832307571462000097578063a866917a14620000ae578063ab53f2c614620000c557005b366200005957005b005b3480156200006857600080fd5b506003545b6040519081526020015b60405180910390f35b620000596200009136600462000b99565b620000ed565b348015620000a457600080fd5b506001546200006d565b62000059620000bf36600462000bb2565b6200026f565b348015620000d257600080fd5b50620000dd62000621565b6040516200007792919062000c27565b620000ff600260005414600e620006c6565b6200011c813515806200011457506001548235145b600f620006c6565b600080805560028054620001309062000c4a565b80601f01602080910402602001604051908101604052809291908181526020018280546200015e9062000c4a565b8015620001af5780601f106200018357610100808354040283529160200191620001af565b820191906000526020600020905b8154815290600101906020018083116200019157829003601f168201915b5050505050806020019051810190620001c9919062000da9565b90507f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e182604051620001fc919062000e01565b60405180910390a1620002123415600c620006c6565b80516200022c906001600160a01b03163314600d620006c6565b602081015160408201515151620002449190620006ed565b62000253816020015162000703565b600080805560018190556200026b9060029062000973565b5050565b62000281600160005414600a620006c6565b6200029e813515806200029657506001548235145b600b620006c6565b600080805560028054620002b29062000c4a565b80601f0160208091040260200160405190810160405280929190818152602001828054620002e09062000c4a565b8015620003315780601f10620003055761010080835404028352916020019162000331565b820191906000526020600020905b8154815290600101906020018083116200031357829003601f168201915b50505050508060200190518101906200034b919062000e3e565b905062000357620009b2565b7f28c0a890e90181a99e4be2ce688e0992f678958bff1b37cac44f65124737c08e8360405162000388919062000ea8565b60405180910390a16200039e34156008620006c6565b620003b2600a60e0850135116009620006c6565b60408051602085810135908201520160408051601f19818403018152918152620003e3906060860190860162000f10565b6040516001600160c01b0319909116602082015260280160408051808303601f1901815282825260608781013560208501526080808901359385019390935260a088013590840152910160408051808303601f1901815282825260c0880135602084015291016040516020818303038152906040528660200160c001356012604051620004709062000a77565b620004819695949392919062000f2e565b604051809103906000f0801580156200049e573d6000803e3d6000fd5b506001600160a01b031680825260208083018290526040519182527f0b9202ae79098367fd19cfd7e22f60d1cc3e35bccb6b4c453c9027e1354c3790910160405180910390a16040818101805160e086013590528351516020908101518251909101528351518201518151901515920191909152825190516200052591906000906200071b565b6060820181815290515160808301805191909152805160e08601356020909101528151516040908101518251901515910152905190516200056a91906000906200071b565b60a0820181815290515160c0830180519190915281515160209081015182519091015280516000604090910181905291519051620005a992906200071b565b60e0820152620005b862000a85565b3381526020808301516001600160a01b03168183015260e083015160408084019190915260026000554360015551620005f49183910162000f99565b604051602081830303815290604052600290805190602001906200061a92919062000aa6565b5050505050565b600060606000546002808054620006389062000c4a565b80601f0160208091040260200160405190810160405280929190818152602001828054620006669062000c4a565b8015620006b75780601f106200068b57610100808354040283529160200191620006b7565b820191906000526020600020905b8154815290600101906020018083116200069957829003601f168201915b50505050509050915091509091565b816200026b5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b620006f982826200079e565b6200026b57600080fd5b6200070e8162000882565b6200071857600080fd5b50565b6200072562000b35565b60005b60018110156200077b5784816001811062000747576200074762000e28565b602002015182826001811062000761576200076162000e28565b602002015280620007728162001006565b91505062000728565b508181846001811062000792576200079262000e28565b60200201529392505050565b6000806000846001600160a01b031660006342966c6860e01b86604051602401620007cb91815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516200080b919062001030565b60006040518083038185875af1925050503d80600081146200084a576040519150601f19603f3d011682016040523d82523d6000602084013e6200084f565b606091505b509150915062000862828260036200092d565b50808060200190518101906200087991906200104e565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b038616918391620008cb9162001030565b60006040518083038185875af1925050503d80600081146200090a576040519150601f19603f3d011682016040523d82523d6000602084013e6200090f565b606091505b509150915062000922828260046200092d565b506001949350505050565b606083156200093e5750816200096c565b8251156200094f5782518084602001fd5b60405163100960cb60e01b815260048101839052602401620006e4565b9392505050565b508054620009819062000c4a565b6000825580601f1062000992575050565b601f01602090049060005260206000209081019062000718919062000b82565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200162000a05604051806060016040528060008152602001600081526020016000151581525090565b815260200162000a1462000b35565b8152604080516060810182526000808252602082810182905292820152910190815260200162000a4362000b35565b8152604080516060810182526000808252602082810182905292820152910190815260200162000a7262000b35565b905290565b610f75806200106f83390190565b604080516060810182526000808252602082015290810162000a7262000b35565b82805462000ab49062000c4a565b90600052602060002090601f01602090048101928262000ad8576000855562000b23565b82601f1062000af357805160ff191683800117855562000b23565b8280016001018555821562000b23579182015b8281111562000b2357825182559160200191906001019062000b06565b5062000b3192915062000b82565b5090565b60405180602001604052806001905b62000b6b604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908162000b445790505090565b5b8082111562000b31576000815560010162000b83565b60006040828403121562000bac57600080fd5b50919050565b6000610100828403121562000bac57600080fd5b60005b8381101562000be357818101518382015260200162000bc9565b8381111562000bf3576000848401525b50505050565b6000815180845262000c1381602086016020860162000bc6565b601f01601f19169290920160200192915050565b82815260406020820152600062000c42604083018462000bf9565b949350505050565b600181811c9082168062000c5f57607f821691505b6020821081141562000bac57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff8111828210171562000cbd5762000cbd62000c81565b60405290565b6040516060810167ffffffffffffffff8111828210171562000cbd5762000cbd62000c81565b80516001600160a01b038116811462000d0157600080fd5b919050565b80151581146200071857600080fd5b600082601f83011262000d2757600080fd5b62000d3162000c97565b8060608085018681111562000d4557600080fd5b855b8181101562000d9d5782818903121562000d615760008081fd5b62000d6b62000cc3565b815181526020808301518183015260408084015162000d8a8162000d06565b9083015290865290940193820162000d47565b50919695505050505050565b600060a0828403121562000dbc57600080fd5b62000dc662000cc3565b62000dd18362000ce9565b815262000de16020840162000ce9565b602082015262000df5846040850162000d15565b60408201529392505050565b8135815260408101602083013562000e198162000d06565b80151560208401525092915050565b634e487b7160e01b600052603260045260246000fd5b60006060828403121562000e5157600080fd5b6040516020810181811067ffffffffffffffff8211171562000e775762000e7762000c81565b60405262000e86848462000d15565b81529392505050565b80356001600160c01b03198116811462000d0157600080fd5b813581526020808301359082015261010081016001600160c01b031962000ed26040850162000e8f565b166040830152606083013560608301526080830135608083015260a083013560a083015260c083013560c083015260e083013560e083015292915050565b60006020828403121562000f2357600080fd5b6200096c8262000e8f565b60c08152600062000f4360c083018962000bf9565b828103602084015262000f57818962000bf9565b9050828103604084015262000f6d818862000bf9565b9050828103606084015262000f83818762000bf9565b6080840195909552505060a00152949350505050565b81516001600160a01b0390811682526020808401519091168183015260408084015160a08401929082850160005b600181101562000ffb5782518051835284810151858401528501511515858301529183019160609091019060010162000fc7565b505050505092915050565b60006000198214156200102957634e487b7160e01b600052601160045260246000fd5b5060010190565b600082516200104481846020870162000bc6565b9190910192915050565b6000602082840312156200106157600080fd5b81516200096c8162000d0656fe60806040523480156200001157600080fd5b5060405162000f7538038062000f75833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610af580620004806000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c57806383197ef01161006657806383197ef01461019b57806395d89b41146101a5578063a9059cbb146101ad578063dd62ed3e146101c057600080fd5b806342966c68146101575780635600f04f1461016a57806370a082311461017257600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a578063392f37e91461014f575b600080fd5b6100dc6101f9565b6040516100e991906108fa565b60405180910390f35b61010561010036600461096b565b61028b565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b610105610135366004610995565b6102a1565b60085460405160ff90911681526020016100e9565b6100dc610357565b6101056101653660046109d1565b610366565b6100dc6103dc565b6101196101803660046109ea565b6001600160a01b031660009081526020819052604090205490565b6101a36103eb565b005b6100dc610492565b6101056101bb36600461096b565b6104a1565b6101196101ce366004610a0c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461020890610a3f565b80601f016020809104026020016040519081016040528092919081815260200182805461023490610a3f565b80156102815780601f1061025657610100808354040283529160200191610281565b820191906000526020600020905b81548152906001019060200180831161026457829003601f168201915b5050505050905090565b60006102983384846104ae565b50600192915050565b60006102ae8484846105d3565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103385760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61034c85336103478685610a90565b6104ae565b506001949350505050565b60606007805461020890610a3f565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b6005546103d4906001600160a01b0316836107ab565b506001919050565b60606006805461020890610a3f565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b604482015260640161032f565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b604482015260640161032f565b6005546001600160a01b0316ff5b60606004805461020890610a3f565b60006102983384846105d3565b6001600160a01b0383166105105760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161032f565b6001600160a01b0382166105715760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161032f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166106375760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161032f565b6001600160a01b0382166106995760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161032f565b6001600160a01b038316600090815260208190526040902054818110156107115760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161032f565b61071b8282610a90565b6001600160a01b038086166000908152602081905260408082209390935590851681529081208054849290610751908490610aa7565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161079d91815260200190565b60405180910390a350505050565b6001600160a01b03821661080b5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161032f565b6001600160a01b0382166000908152602081905260409020548181101561087f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161032f565b6108898282610a90565b6001600160a01b038416600090815260208190526040812091909155600280548492906108b7908490610a90565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016105c6565b600060208083528351808285015260005b818110156109275785810183015185820160400152820161090b565b81811115610939576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461096657600080fd5b919050565b6000806040838503121561097e57600080fd5b6109878361094f565b946020939093013593505050565b6000806000606084860312156109aa57600080fd5b6109b38461094f565b92506109c16020850161094f565b9150604084013590509250925092565b6000602082840312156109e357600080fd5b5035919050565b6000602082840312156109fc57600080fd5b610a058261094f565b9392505050565b60008060408385031215610a1f57600080fd5b610a288361094f565b9150610a366020840161094f565b90509250929050565b600181811c90821680610a5357607f821691505b60208210811415610a7457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610aa257610aa2610a7a565b500390565b60008219821115610aba57610aba610a7a565b50019056fea2646970667358221220c13726854bcba8e2edaa27f82b3e4b818ddc81c313d6df96b6163adc6660ea1f64736f6c63430008090033a2646970667358221220baa7c29a8093235b37b2a1f8848e37e7f112ef88abd216d665d1665d4764930864736f6c63430008090033`,
  BytecodeLen: 9216,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:44:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:52:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:64:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Buyer": Buyer,
  "Creator": Creator
  };
export const _APIs = {
  };
