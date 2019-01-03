import { LitElement } from '@polymer/lit-element';
import { Observable } from './lib/observerable';
import { Emittable } from './lib/emittable';
import { Bindable } from './lib/bindable';

export class PolyLitElement extends Bindable(Emittable(Observable(LitElement))) {}