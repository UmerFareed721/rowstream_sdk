import { BaseObject } from "./object-model";

//  TS Interfaces
export interface uploadImage {
  uri?: string;
  name:string;
  type:string
}

export interface ImageUploadInternal extends uploadImage, BaseObject {}
