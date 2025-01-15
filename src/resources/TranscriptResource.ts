import { Resource } from './Resource';

export class TranscriptResource extends Resource {
  constructor(client: any) {
    super(client, ['transcripts']);
  }

  public async getTranscript(callId: number) {
    return super.get([callId]);
  }
}
