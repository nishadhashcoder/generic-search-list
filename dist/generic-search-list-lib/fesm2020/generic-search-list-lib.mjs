import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class GenericSearchListLibService {
    constructor() { }
}
GenericSearchListLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.6", ngImport: i0, type: GenericSearchListLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
GenericSearchListLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.6", ngImport: i0, type: GenericSearchListLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.6", ngImport: i0, type: GenericSearchListLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class GenericSearchListLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
GenericSearchListLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.6", ngImport: i0, type: GenericSearchListLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
GenericSearchListLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.6", type: GenericSearchListLibComponent, selector: "cmpts-generic-search-list-lib", ngImport: i0, template: `
    <p>
      generic-search-list-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.6", ngImport: i0, type: GenericSearchListLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'cmpts-generic-search-list-lib',
                    template: `
    <p>
      generic-search-list-lib works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class GenericSearchListLibModule {
}
GenericSearchListLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.6", ngImport: i0, type: GenericSearchListLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GenericSearchListLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.6", ngImport: i0, type: GenericSearchListLibModule, declarations: [GenericSearchListLibComponent], exports: [GenericSearchListLibComponent] });
GenericSearchListLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.6", ngImport: i0, type: GenericSearchListLibModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.6", ngImport: i0, type: GenericSearchListLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        GenericSearchListLibComponent
                    ],
                    imports: [],
                    exports: [
                        GenericSearchListLibComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of generic-search-list-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GenericSearchListLibComponent, GenericSearchListLibModule, GenericSearchListLibService };
//# sourceMappingURL=generic-search-list-lib.mjs.map
