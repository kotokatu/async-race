import BaseComponent from '../base-component';

export default class Input extends BaseComponent<HTMLInputElement> {
    private defaultValue: string;

    constructor(params: {
        parent: BaseComponent;
        classNames: string[];
        attributes: Record<string, string>;
        defaultValue: string;
        value?: string;
        onInput?: (e?: Event) => void;
        onChange?: (e?: Event) => void;
    }) {
        super('input', params.classNames, params.parent);
        this.defaultValue = params.defaultValue;
        this.setAttributes(params.attributes);

        if (params.value) {
            this.setValue(params.value);
        } else {
            this.setValue(params.defaultValue);
        }

        if (params.onInput) {
            this.addListener('input', params.onInput);
        }

        if (params.onChange) {
            this.addListener('change', params.onChange);
        }
    }

    public getValue(): string {
        return this.node.value;
    }

    public setValue(value: string): void {
        this.node.value = value;
    }

    public clearInput(): void {
        this.node.value = this.defaultValue;
    }
}
