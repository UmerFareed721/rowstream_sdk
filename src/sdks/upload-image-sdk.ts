/**
 * Copyright (C) William R. Sullivan.
 * This source is licensed under the MIT license.
 */

 import { HTTPSDK } from "../abstract-sdks";
 import { uploadImage, ImageUploadInternal } from "../models";
 
 export class ImageSDK extends HTTPSDK<uploadImage, uploadImage, ImageUploadInternal> {
   protected endpoint = 'upload';
 }