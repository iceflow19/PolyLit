import { Constructor } from './common';
import {LitElement} from '@polymer/lit-element';

export interface Bindable {}

export const BindableMixin = <T extends LitElement>(SuperClass: Constructor<T>) => <Constructor<Bindable & T>>
    class extends (<Constructor<LitElement>>SuperClass) implements Bindable {};