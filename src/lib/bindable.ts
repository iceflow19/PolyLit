import { Constructor } from './common';
import {LitElement} from '@polymer/lit-element';

export const Bindable = <T extends Constructor<LitElement>>(base: T) => class extends base {

};