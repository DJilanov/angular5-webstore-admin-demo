import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from '../core/module-import-guard';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
    ]
})
export class ServicesModule {
	constructor( @Optional() @SkipSelf() parentModule: CommonModule) {
		throwIfAlreadyLoaded(parentModule, 'ServiceModule');
	}
}