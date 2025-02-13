import { URLSearchParams } from 'url';
import FormData from '../../form-data/FormData.js';
import Blob from '../../file/Blob.js';
import Stream from 'stream';

type IRequestBody =
	| ArrayBuffer
	| ArrayBufferView
	| Stream.Readable
	| string
	| URLSearchParams
	| Blob
	| FormData
	| null;

export default IRequestBody;
