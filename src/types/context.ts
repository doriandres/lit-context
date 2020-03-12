/**
 * Copyright (c) 2020 Dorian Cortes, Gary Valverde
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

interface IContext {
    getValue(): Object
    setValue(newValue: Object): void
}

export class Context implements IContext {
    value: Object;
    subscriptions: Set<Function>;

    constructor(initialValue: Object) {
        this.value = initialValue;
        this.subscriptions = new Set<Function>()
    }

    getValue() {
        return this.value;
    }

    setValue(newValue: Object) {
        const oldValue = this.value;
        this.value = newValue;
        this.subscriptions?.forEach(subscription => subscription(newValue, oldValue));
    }
}