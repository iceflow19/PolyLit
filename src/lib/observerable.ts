import { Constructor } from './common';
import {LitElement} from '@polymer/lit-element';

export interface Observable {}

export const ObservableMixin = <T extends LitElement>(SuperClass: Constructor<T>) => <Constructor<Observable & T>>
    class extends (<Constructor<LitElement>>SuperClass) implements Observable {};