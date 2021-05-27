import * as _vscode from "vscode";

declare global {
  const tsvscode:{ postMessage({type: string, value: any});}
  const tsiconvscode:{ postMessage({type: string, value: any,name:string});}
  
}