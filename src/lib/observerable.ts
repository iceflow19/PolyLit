import { Constructor } from './common';
import {LitElement} from '@polymer/lit-element';

export const Observable = <T extends Constructor<LitElement>>(base: T) => class extends base {

};