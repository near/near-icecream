export class Corgi {
  owner: string;
  sender:string;
  message:string;
  dna: string;
  name: string;
  color:string;
  backgroundColor: string;
  rate: string;
  sausage : string;
  quote: string;
  level: i32;
  metadata: CorgiMetaData;
}
// ADDING THE TOKEN METADATA TO THE INDIVIDUAL CORGI ALLOWS INTEROP WITH OTHERS
export class CorgiMetaData {
  dna: Array<string>;
}

export class CorgiArray {
  corgis: Array<Corgi>;
  len: i32;
}