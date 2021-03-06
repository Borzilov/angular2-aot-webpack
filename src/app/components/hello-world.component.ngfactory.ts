/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './hello-world.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/element';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from './hello-world.style.css.shim';
export class Wrapper_HelloWorldComponent {
  context:import0.HelloWorldComponent;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.HelloWorldComponent();
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
const nodeDebugInfos_HelloWorldComponent_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.HelloWorldComponent],import0.HelloWorldComponent,{})];
var renderType_HelloWorldComponent_Host:import3.RenderComponentType = (null as any);
class _View_HelloWorldComponent_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _HelloWorldComponent_0_4:Wrapper_HelloWorldComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_HelloWorldComponent_Host0,renderType_HelloWorldComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HelloWorldComponent_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = import5.selectOrCreateRenderHostElement(this.renderer,'hello-world-app',import5.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_HelloWorldComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HelloWorldComponent_0_4 = new Wrapper_HelloWorldComponent();
    this._appEl_0.initComponent(this._HelloWorldComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._HelloWorldComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.HelloWorldComponent) && (0 === requestNodeIndex))) { return this._HelloWorldComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._HelloWorldComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._HelloWorldComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_HelloWorldComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import1.AppView<any> {
  if ((renderType_HelloWorldComponent_Host === (null as any))) { (renderType_HelloWorldComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_HelloWorldComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const HelloWorldComponentNgFactory:import10.ComponentFactory<import0.HelloWorldComponent> = new import10.ComponentFactory<import0.HelloWorldComponent>('hello-world-app',viewFactory_HelloWorldComponent_Host0,import0.HelloWorldComponent);
const styles_HelloWorldComponent:any[] = [import11.styles];
const nodeDebugInfos_HelloWorldComponent0:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_HelloWorldComponent:import3.RenderComponentType = (null as any);
class _View_HelloWorldComponent0 extends import1.DebugAppView<import0.HelloWorldComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_HelloWorldComponent0,renderType_HelloWorldComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HelloWorldComponent0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import5.createRenderElement(this.renderer,parentRenderNode,'h1',import5.EMPTY_INLINE_ARRAY,this.debug(0,0,0));
    this._text_1 = this.renderer.createText(this._el_0,'Hello World!',this.debug(1,0,4));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',this.debug(2,0,21));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._text_2
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
}
export function viewFactory_HelloWorldComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import1.AppView<import0.HelloWorldComponent> {
  if ((renderType_HelloWorldComponent === (null as any))) { (renderType_HelloWorldComponent = viewUtils.createRenderComponentType('/home/blacksonic/workspace/ng2-aot/src/app/components/hello-world.template.html',0,import9.ViewEncapsulation.Emulated,styles_HelloWorldComponent,{})); }
  return new _View_HelloWorldComponent0(viewUtils,parentInjector,declarationEl);
}