import { Constructor } from './common';
import {LitElement} from '@polymer/lit-element';

export interface Emittable {}

export const EmittableMixin = <T extends LitElement>(SuperClass: Constructor<T>) => <Constructor<Emittable & T>>
    class extends (<Constructor<LitElement>>SuperClass) implements Emittable {};