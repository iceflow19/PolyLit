import { LitElement } from '@polymer/lit-element';
import { ObservableMixin } from './lib/observerable';
import { EmittableMixin } from './lib/emittable';
import { BindableMixin } from './lib/bindable';

export class PolyLitElement extends BindableMixin(EmittableMixin(ObservableMixin(LitElement))) {}