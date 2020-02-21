import { Formatter } from '../Interfaces';
import { SpeechOptions } from '../SpeechOptions';
import { TextFormatter } from "./TextFormatter";
import { AmazonAlexaSsmlFormatter } from "./AmazonAlexaSsmlFormatter";
import { GoogleAssistantSsmlFormatter } from "./GoogleAssistantSsmlFormatter";
import { SamsungBixbySsmlFormatter } from './SamsungBixbySsmlFormatter';

export function createFormatter(options: SpeechOptions): Formatter {
  switch(options.platform) {
      case 'amazon-alexa':
        return new AmazonAlexaSsmlFormatter(options);
      case 'google-assistant':
        return new GoogleAssistantSsmlFormatter(options);
      case 'samsung-bixby':
        return new SamsungBixbySsmlFormatter(options);
      default:
        return new TextFormatter(options);
  }
}

export function createTextFormatter(options: SpeechOptions): Formatter {
  return new TextFormatter(options);
}
