import { Constructor } from './common';
import {LitElement, PropertyDeclaration, notEqual} from '@polymer/lit-element';


LitElement.createProperty = () => {};
export interface Observable {}

const defaultPropertyDeclaration: PropertyDeclaration = {
    attribute : true,
    type : String,
    reflect : false,
    hasChanged : notEqual
  };

export const ObservableMixin = <T extends Constructor<LitElement>>(base: T) => <Observable & T>(class Foo extends base {
  static createProperty(name: PropertyKey, options: PropertyDeclaration = defaultPropertyDeclaration) {}
});