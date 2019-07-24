import { QuizSampleCustomExtension } from "./QuizSampleCustomExtension";

import { DriverExtension, InstructionExtension, ImporterExtension } from '@alexa-games/sfb-f';
import { ExtensionLoaderParameter, AlexaExtension, AlexaAPLExtension, AlexaMonetizationExtension } from '@alexa-games/sfb-skill';

type ExtensionType = DriverExtension|InstructionExtension|ImporterExtension;

export class ExtensionLoader {
    private registeredExtensions: ExtensionType[];

    constructor(param: ExtensionLoaderParameter) {
        this.registeredExtensions = [
            // Alexa SFB extensions
            new AlexaExtension(),
            new AlexaAPLExtension(param.locale, param.configAccessor),
            new AlexaMonetizationExtension(param.locale, param.configAccessor),

            // sample quiz extension
            new QuizSampleCustomExtension(param)
        ];
    }

    public getExtensions(): ExtensionType[] {
        return this.registeredExtensions;
    }
}
