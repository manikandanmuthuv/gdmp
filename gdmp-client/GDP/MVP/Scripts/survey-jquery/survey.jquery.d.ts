/*Type definitions for Survey JavaScript library v0.12.15
Project: http://surveyjs.org/
Definitions by: Devsoft Baltic OÜ <https://github.com/surveyjs/>
*/
// Dependencies for this module:
//   ../../../../react

import * as React from 'react';

import './chunks/localization';

import "../../main.scss";
export let Version: string;

export var __assign: any;
export function __extends(thisClass: any, baseClass: any): void;
export var __decorate: (decorators: any, target: any, key: any, desc: any) => any;

export declare var surveyCss: {
    currentType: string;
    getCss: () => any;
};
export declare var defaultStandardCss: {
    root: string;
    header: string;
    body: string;
    footer: string;
    navigationButton: string;
    navigation: {
        complete: string;
        prev: string;
        next: string;
    };
    progress: string;
    progressBar: string;
    pageTitle: string;
    row: string;
    question: {
        root: string;
        title: string;
        comment: string;
        indent: number;
    };
    error: {
        root: string;
        icon: string;
        item: string;
    };
    checkbox: {
        root: string;
        item: string;
        other: string;
    };
    comment: string;
    dropdown: {
        root: string;
        control: string;
    };
    matrix: {
        root: string;
    };
    matrixdropdown: {
        root: string;
    };
    matrixdynamic: {
        root: string;
        button: string;
    };
    multipletext: {
        root: string;
        itemTitle: string;
        itemValue: string;
    };
    radiogroup: {
        root: string;
        item: string;
        label: string;
        other: string;
    };
    rating: {
        root: string;
        item: string;
    };
    text: string;
    window: {
        root: string;
        body: string;
        header: {
            root: string;
            title: string;
            button: string;
            buttonExpanded: string;
            buttonCollapsed: string;
        };
    };
};

export declare var defaultBootstrapCss: {
    root: string;
    header: string;
    body: string;
    footer: string;
    navigationButton: string;
    navigation: {
        complete: string;
        prev: string;
        next: string;
    };
    progress: string;
    progressBar: string;
    pageTitle: string;
    row: string;
    question: {
        root: string;
        title: string;
        comment: string;
        indent: number;
    };
    error: {
        root: string;
        icon: string;
        item: string;
    };
    checkbox: {
        root: string;
        item: string;
        other: string;
    };
    comment: string;
    dropdown: {
        root: string;
        control: string;
    };
    matrix: {
        root: string;
    };
    matrixdropdown: {
        root: string;
    };
    matrixdynamic: {
        root: string;
        button: string;
    };
    multipletext: {
        root: string;
        itemTitle: string;
        itemValue: string;
    };
    radiogroup: {
        root: string;
        item: string;
        label: string;
        other: string;
    };
    rating: {
        root: string;
        item: string;
    };
    text: string;
    window: {
        root: string;
        body: string;
        header: {
            root: string;
            title: string;
            button: string;
            buttonExpanded: string;
            buttonCollapsed: string;
        };
    };
};

export declare var defaultBootstrapMaterialCss: {
    root: string;
    header: string;
    body: string;
    footer: string;
    navigationButton: string;
    navigation: {
        complete: string;
        prev: string;
        next: string;
    };
    progress: string;
    progressBar: string;
    pageTitle: string;
    row: string;
    question: {
        root: string;
        title: string;
        comment: string;
        indent: number;
    };
    error: {
        root: string;
        icon: string;
        item: string;
    };
    checkbox: {
        root: string;
        item: string;
        other: string;
    };
    comment: string;
    dropdown: {
        root: string;
        control: string;
    };
    matrix: {
        root: string;
        row: string;
        label: string;
        itemValue: string;
    };
    matrixdropdown: {
        root: string;
        itemValue: string;
    };
    matrixdynamic: {
        root: string;
        button: string;
    };
    multipletext: {
        root: string;
        itemTitle: string;
        row: string;
        itemValue: string;
    };
    radiogroup: {
        root: string;
        item: string;
        label: string;
        other: string;
    };
    rating: {
        root: string;
        item: string;
    };
    text: string;
    window: {
        root: string;
        body: string;
        header: {
            root: string;
            title: string;
            button: string;
            buttonExpanded: string;
            buttonCollapsed: string;
        };
    };
};

export declare class Survey extends React.Component<any, any> implements ISurveyCreator {
    static cssType: string;
    protected survey: ReactSurveyModel;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): JSX.Element;
    css: any;
    protected renderCompleted(): JSX.Element;
    protected renderLoading(): JSX.Element;
    protected renderSurvey(): JSX.Element;
    protected renderTitle(): JSX.Element;
    protected renderPage(): JSX.Element;
    protected renderProgress(isTop: boolean): JSX.Element;
    protected renderNavigation(): JSX.Element;
    protected renderEmptySurvey(): JSX.Element;
    protected updateSurvey(newProps: any): void;
    protected setSurveyEvents(newProps: any): void;
    createQuestionElement(question: QuestionBase): JSX.Element;
    renderError(key: string, errorText: string): JSX.Element;
    questionTitleLocation(): string;
}

export declare class ReactSurveyModel extends SurveyModel {
    renderCallback: () => void;
    constructor(jsonObj?: any);
    render(): void;
    mergeCss(src: any, dest: any): void;
    doAfterRenderSurvey(el: any): void;
    protected onLoadSurveyFromService(): void;
    protected onLoadingSurveyFromService(): void;
}

export declare class SurveyNavigationBase extends React.Component<any, any> {
    protected survey: SurveyModel;
    protected css: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
}

export declare class SurveyNavigation extends SurveyNavigationBase {
    constructor(props: any);
    handlePrevClick(event: any): void;
    handleNextClick(event: any): void;
    handleCompleteClick(event: any): void;
    render(): JSX.Element;
    protected renderButton(click: any, text: string, btnClassName: string): JSX.Element;
}

export declare class SurveyPage extends React.Component<any, any> {
    protected css: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    componentDidMount(): void;
    render(): JSX.Element;
    protected createRow(row: QuestionRowModel, index: number): JSX.Element;
    protected renderTitle(): JSX.Element;
}
export declare class SurveyPanel extends React.Component<any, any> {
    protected css: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    componentDidMount(): void;
    render(): JSX.Element;
    protected createRow(row: QuestionRowModel, index: number): JSX.Element;
    protected renderTitle(): JSX.Element;
}
export declare class SurveyRow extends React.Component<any, any> {
    protected css: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
    protected createQuestion(question: QuestionBase): JSX.Element;
}

export interface ISurveyCreator {
    createQuestionElement(question: QuestionBase): JSX.Element;
    renderError(key: string, errorText: string): JSX.Element;
    questionTitleLocation(): string;
}
export declare class SurveyQuestion extends React.Component<any, any> {
    protected question: Question;
    protected css: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    protected renderQuestion(): JSX.Element;
    protected renderTitle(): JSX.Element;
    protected renderComment(): JSX.Element;
    protected renderErrors(): JSX.Element;
}
export declare class SurveyQuestionErrors extends React.Component<any, any> {
    protected question: Question;
    protected css: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
}

export declare class SurveyElementBase extends React.Component<any, any> {
    static renderLocString(locStr: LocalizableString, style?: any): JSX.Element;
    protected css: any;
    protected rootCss: any;
    protected isDisplayMode: boolean;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    protected renderLocString(locStr: LocalizableString, style?: any): JSX.Element;
}
export declare class SurveyQuestionElementBase extends SurveyElementBase {
    protected questionBase: QuestionBase;
    protected creator: ISurveyCreator;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    protected shouldComponentUpdate(): boolean;
}

export declare class SurveyQuestionComment extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionCommentModel;
    componentWillReceiveProps(nextProps: any): void;
    handleOnChange(event: any): void;
    handleOnBlur(event: any): void;
    render(): JSX.Element;
}
export declare class SurveyQuestionCommentItem extends SurveyElementBase {
    constructor(props: any);
    handleOnChange(event: any): void;
    handleOnBlur(event: any): void;
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
}

export declare class SurveyQuestionCheckbox extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionCheckboxModel;
    render(): JSX.Element;
    protected getItems(): Array<any>;
    protected readonly textStyle: any;
    protected renderItem(key: string, item: any, isFirst: boolean): JSX.Element;
}
export declare class SurveyQuestionCheckboxItem extends SurveyElementBase {
    protected question: QuestionCheckboxModel;
    protected item: ItemValue;
    protected textStyle: any;
    protected isFirst: any;
    constructor(props: any);
    protected shouldComponentUpdate(): boolean;
    componentWillReceiveProps(nextProps: any): void;
    handleOnChange(event: any): void;
    render(): JSX.Element;
    protected readonly inputStyle: any;
    protected renderCheckbox(isChecked: boolean, divStyle: any, otherItem: JSX.Element): JSX.Element;
    protected renderOther(): JSX.Element;
}

export declare class SurveyQuestionDropdown extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionDropdownModel;
    componentWillReceiveProps(nextProps: any): void;
    handleOnChange(event: any): void;
    render(): JSX.Element;
    protected renderSelect(): JSX.Element;
    protected renderOther(): JSX.Element;
}

export declare class SurveyQuestionMatrixDropdown extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionMatrixDropdownModel;
    render(): JSX.Element;
}
export declare class SurveyQuestionMatrixDropdownRow extends SurveyElementBase {
    protected creator: ISurveyCreator;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
    protected renderSelect(cell: MatrixDropdownCell): JSX.Element;
}

export declare class SurveyQuestionMatrix extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionMatrixModel;
    render(): JSX.Element;
}
export declare class SurveyQuestionMatrixRow extends SurveyElementBase {
    constructor(props: any);
    handleOnChange(event: any): void;
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
}

export declare class SurveyQuestionHtml extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionHtmlModel;
    render(): JSX.Element;
}

export declare class SurveyQuestionFile extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionFileModel;
    handleOnChange(event: any): void;
    render(): JSX.Element;
    protected renderImage(): JSX.Element;
}

export declare class SurveyQuestionMultipleText extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionMultipleTextModel;
    render(): JSX.Element;
    protected renderRow(key: string, items: Array<MultipleTextItemModel>): JSX.Element;
    protected renderItem(item: MultipleTextItemModel, isFirst: boolean): JSX.Element;
}
export declare class SurveyQuestionMultipleTextItem extends SurveyElementBase {
    constructor(props: any);
    handleOnChange(event: any): void;
    handleOnBlur(event: any): void;
    componentWillReceiveProps(nextProps: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    protected readonly mainClassName: string;
}

export declare class SurveyQuestionRadiogroup extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionRadiogroupModel;
    componentWillReceiveProps(nextProps: any): void;
    handleOnChange(event: any): void;
    render(): JSX.Element;
    protected getItems(): Array<any>;
    protected readonly textStyle: any;
    protected renderRadio(key: string, item: ItemValue, isChecked: boolean, divStyle: any, otherItem: JSX.Element, isFirst: boolean): JSX.Element;
    protected renderOther(): JSX.Element;
}

export declare class SurveyQuestionText extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionTextModel;
    componentWillReceiveProps(nextProps: any): void;
    handleOnChange(event: any): void;
    handleOnBlur(event: any): void;
    render(): JSX.Element;
}

export declare class SurveyQuestionMatrixDynamic extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionMatrixDynamicModel;
    componentWillReceiveProps(nextProps: any): void;
    handleOnRowAddClick(event: any): void;
    render(): JSX.Element;
    protected renderAddRowButton(): JSX.Element;
}
export declare class SurveyQuestionMatrixDynamicRow extends SurveyElementBase {
    protected creator: ISurveyCreator;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    handleOnRowRemoveClick(event: any): void;
    render(): JSX.Element;
    protected renderQuestion(cell: MatrixDropdownCell): JSX.Element;
    protected renderButton(): JSX.Element;
}

export declare class SurveyProgress extends SurveyNavigationBase {
    protected isTop: boolean;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    protected readonly progress: number;
    protected readonly progressText: string;
    render(): JSX.Element;
}

export declare class SurveyQuestionRating extends SurveyQuestionElementBase {
    constructor(props: any);
    protected readonly question: QuestionRatingModel;
    handleOnChange(event: any): void;
    render(): JSX.Element;
    protected renderItem(key: string, item: ItemValue, minText: JSX.Element, maxText: JSX.Element): JSX.Element;
    protected renderOther(): JSX.Element;
}

export declare class SurveyWindow extends Survey {
    constructor(props: any);
    handleOnExpanded(event: any): void;
    render(): JSX.Element;
    protected renderHeader(): JSX.Element;
    protected renderBody(): JSX.Element;
    protected updateSurvey(newProps: any): void;
}

export declare class ReactQuestionFactory {
    static Instance: ReactQuestionFactory;
    registerQuestion(questionType: string, questionCreator: (name: string) => JSX.Element): void;
    getAllTypes(): Array<string>;
    createQuestion(questionType: string, params: any): JSX.Element;
}

export declare class ValidatorResult {
        value: any;
        error: SurveyError;
        constructor(value: any, error?: SurveyError);
}
/**
    * Base SurveyJS validator class.
    */
export declare class SurveyValidator extends Base {
        text: string;
        constructor();
        protected getErrorText(name: string): string;
        protected getDefaultErrorText(name: string): string;
        validate(value: any, name?: string): ValidatorResult;
}
export interface IValidatorOwner {
        validators: Array<SurveyValidator>;
        value: any;
        getValidatorTitle(): string;
}
export declare class ValidatorRunner {
        run(owner: IValidatorOwner): SurveyError;
}
/**
    * Validate numeric values.
    */
export declare class NumericValidator extends SurveyValidator {
        minValue: number;
        maxValue: number;
        constructor(minValue?: number, maxValue?: number);
        getType(): string;
        validate(value: any, name?: string): ValidatorResult;
        protected getDefaultErrorText(name: string): any;
}
/**
    * Validate text values
    */
export declare class TextValidator extends SurveyValidator {
        minLength: number;
        maxLength: number;
        constructor(minLength?: number, maxLength?: number);
        getType(): string;
        validate(value: any, name?: string): ValidatorResult;
        protected getDefaultErrorText(name: string): any;
}
export declare class AnswerCountValidator extends SurveyValidator {
        minCount: number;
        maxCount: number;
        constructor(minCount?: number, maxCount?: number);
        getType(): string;
        validate(value: any, name?: string): ValidatorResult;
        protected getDefaultErrorText(name: string): string;
}
/**
    * Use it to validate the text by regular expressions.
    */
export declare class RegexValidator extends SurveyValidator {
        regex: string;
        constructor(regex?: string);
        getType(): string;
        validate(value: any, name?: string): ValidatorResult;
}
/**
    * Validate e-mail address in the text input
    */
export declare class EmailValidator extends SurveyValidator {
        constructor();
        getType(): string;
        validate(value: any, name?: string): ValidatorResult;
        protected getDefaultErrorText(name: string): any;
}

export interface HashTable<T> {
        [key: string]: T;
}
export interface ISurveyData {
        getValue(name: string): any;
        setValue(name: string, newValue: any): any;
        getComment(name: string): string;
        setComment(name: string, newValue: string): any;
}
export interface ISurvey extends ISurveyData {
        currentPage: IPage;
        pageVisibilityChanged(page: IPage, newValue: boolean): any;
        questionVisibilityChanged(question: IQuestion, newValue: boolean): any;
        questionAdded(question: IQuestion, index: number, parentPanel: any, rootPanel: any): any;
        panelAdded(panel: IElement, index: number, parentPanel: any, rootPanel: any): any;
        questionRemoved(question: IQuestion): any;
        panelRemoved(panel: IElement): any;
        validateQuestion(name: string): SurveyError;
        processHtml(html: string): string;
        processText(text: string): string;
        isDisplayMode: boolean;
        isDesignMode: boolean;
        isLoadingFromJson: boolean;
        requiredText: string;
        questionStartIndex: string;
        getQuestionTitleTemplate(): string;
        storeOthersAsComment: boolean;
        uploadFile(name: string, file: File, storeDataAsText: boolean, uploadingCallback: (status: string) => any): boolean;
        afterRenderQuestion(question: IQuestion, htmlElement: any): any;
        afterRenderPanel(panel: IElement, htmlElement: any): any;
        matrixRowAdded(question: IQuestion): any;
}
export interface IConditionRunner {
        runCondition(values: HashTable<any>): any;
}
export interface IElement extends IConditionRunner {
        name: string;
        visible: boolean;
        isVisible: boolean;
        setData(newValue: ISurveyData): any;
        rowVisibilityChangedCallback: () => void;
        startWithNewLineChangedCallback: () => void;
        renderWidth: string;
        width: string;
        rightIndent: number;
        startWithNewLine: boolean;
        isPanel: boolean;
        onSurveyLoad(): any;
        onLocaleChanged(): any;
}
export interface IQuestion extends IElement {
        hasTitle: boolean;
        setVisibleIndex(value: number): any;
        onSurveyValueChanged(newValue: any): any;
        onReadOnlyChanged(): any;
        supportGoNextPageAutomatic(): boolean;
        clearUnusedValues(): any;
}
export interface IPanel extends IElement {
}
export interface IPage extends IConditionRunner {
        visible: boolean;
        onSurveyLoad(): any;
}
/**
    * The base class for SurveyJS objects.
    */
export declare class Base {
        /**
            * A static methods that returns true if a value underfined, null, empty string or empty array.
            * @param value
            */
        static isValueEmpty(value: any): boolean;
        /**
            * Returns the type of the object as a string as it represents in the json.
            */
        getType(): string;
        protected isTwoValueEquals(x: any, y: any): boolean;
}
export declare class SurveyError {
        getText(): string;
}
export declare var SurveyPageId: string;
export declare class SurveyElement {
        static ScrollElementToTop(elementId: string): boolean;
        static GetFirstNonTextElement(elements: any): any;
        static FocusElement(elementId: string): boolean;
}
export declare class Event<T extends Function, Options> {
        readonly isEmpty: boolean;
        fire(sender: any, options: Options): void;
        add(func: T): void;
        remove(func: T): void;
}

/**
  * Array of ItemValue is used in checkox, dropdown and radiogroup choices, matrix columns and rows.
  * It has two main properties: value and text. If text is empty, value is used for displaying.
  * The text property is localizable and support markdown.
  */
export declare class ItemValue {
    static Separator: string;
    static createArray(locOwner: ILocalizableOwner): Array<ItemValue>;
    static setupArray(items: Array<ItemValue>, locOwner: ILocalizableOwner): void;
    static setData(items: Array<ItemValue>, values: Array<any>): void;
    static getData(items: Array<ItemValue>): any;
    static getItemByValue(items: Array<ItemValue>, val: any): ItemValue;
    static NotifyArrayOnLocaleChanged(items: Array<ItemValue>): void;
    constructor(value: any, text?: string);
    getType(): string;
    readonly locText: LocalizableString;
    locOwner: ILocalizableOwner;
    value: any;
    readonly hasText: boolean;
    text: string;
    setData(value: any): void;
}

export interface ILocalizableOwner {
    getLocale(): string;
    getMarkdownHtml(text: string): string;
}
/**
  * The class represents the string that supports multi-languages and markdown.
  * It uses in all objects where support for multi-languages and markdown is required.
  */
export declare class LocalizableString {
    owner: ILocalizableOwner;
    useMarkdown: boolean;
    static defaultLocale: string;
    onRenderedHtmlCallback: (html: string) => string;
    onGetTextCallback: (str: string) => string;
    constructor(owner: ILocalizableOwner, useMarkdown?: boolean);
    readonly locale: string;
    text: string;
    readonly pureText: any;
    readonly hasHtml: boolean;
    readonly html: string;
    readonly textOrHtml: string;
    readonly renderedHtml: string;
    getLocaleText(loc: string): string;
    setLocaleText(loc: string, value: string): void;
    getJson(): any;
    setJson(value: any): void;
    onChanged(): void;
    protected onCreating(): void;
}

/**
  * A definition for filling choices for checkbox, dropdown and radiogroup questions from resfull services.
  * The run method call a restfull service and results can be get on getREsultCallback.
  */
export declare class ChoicesRestfull extends Base {
    url: string;
    path: string;
    valueName: string;
    titleName: string;
    getResultCallback: (items: Array<ItemValue>) => void;
    error: SurveyError;
    constructor();
    run(): void;
    getType(): string;
    readonly isEmpty: boolean;
    setData(json: any): void;
    clear(): void;
    protected onLoad(result: any): void;
}

export declare class Condition {
    static operatorsValue: HashTable<Function>;
    static readonly operators: HashTable<Function>;
    left: any;
    right: any;
    operator: string;
    perform(left?: any, right?: any): boolean;
    performExplicit(left: any, right: any): boolean;
}
export declare class ConditionNode {
    children: Array<any>;
    constructor();
    connective: string;
    readonly isEmpty: boolean;
    clear(): void;
}
export declare class ConditionRunner {
    constructor(expression: string);
    expression: string;
    run(values: HashTable<any>): boolean;
}

export declare class ConditionsParser {
    parse(text: string, root: ConditionNode): boolean;
    toString(root: ConditionNode): string;
}

export declare class ProcessValue {
    constructor();
    getFirstName(text: string): string;
    hasValue(text: string, values: HashTable<any>): boolean;
    getValue(text: string, values: HashTable<any>): any;
}

export declare class AnswerRequiredError extends SurveyError {
    constructor();
    getText(): string;
}
export declare class RequreNumericError extends SurveyError {
    constructor();
    getText(): string;
}
export declare class ExceedSizeError extends SurveyError {
    constructor(maxSize: number);
    getText(): string;
}
export declare class CustomError extends SurveyError {
    constructor(text: string);
    getText(): string;
}

export declare class JsonObjectProperty {
    name: string;
    className: string;
    alternativeName: string;
    classNamePart: string;
    baseClassName: string;
    defaultValue: any;
    readOnly: boolean;
    visible: boolean;
    isLocalizable: boolean;
    serializationProperty: string;
    onGetValue: (obj: any) => any;
    onSetValue: (obj: any, value: any, jsonConv: JsonObject) => any;
    constructor(name: string);
    type: string;
    readonly hasToUseGetValue: string | ((obj: any) => any);
    isDefaultValue(value: any): boolean;
    getValue(obj: any): any;
    getPropertyValue(obj: any): any;
    readonly hasToUseSetValue: string | ((obj: any, value: any, jsonConv: JsonObject) => any);
    setValue(obj: any, value: any, jsonConv: JsonObject): void;
    getObjType(objType: string): string;
    getClassName(className: string): string;
    readonly choices: Array<any>;
    setChoices(value: Array<any>, valueFunc: () => Array<any>): void;
}
export declare class JsonMetadataClass {
    name: string;
    creator: () => any;
    parentName: string;
    static requiredSymbol: string;
    static typeSymbol: string;
    properties: Array<JsonObjectProperty>;
    requiredProperties: Array<string>;
    constructor(name: string, properties: Array<any>, creator?: () => any, parentName?: string);
    find(name: string): JsonObjectProperty;
    createProperty(propInfo: any): JsonObjectProperty;
}
export declare class JsonMetadata {
    addClass(name: string, properties: Array<any>, creator?: () => any, parentName?: string): JsonMetadataClass;
    overrideClassCreatore(name: string, creator: () => any): void;
    getProperties(className: string): Array<JsonObjectProperty>;
    findProperty(className: string, propertyName: string): JsonObjectProperty;
    createClass(name: string): any;
    getChildrenClasses(name: string, canBeCreated?: boolean): Array<JsonMetadataClass>;
    getRequiredProperties(name: string): Array<string>;
    addProperty(className: string, propertyInfo: any): void;
    removeProperty(className: string, propertyName: string): boolean;
    findClass(name: string): JsonMetadataClass;
}
export declare class JsonError {
    type: string;
    message: string;
    description: string;
    at: Number;
    constructor(type: string, message: string);
    getFullDescription(): string;
}
export declare class JsonUnknownPropertyError extends JsonError {
    propertyName: string;
    className: string;
    constructor(propertyName: string, className: string);
}
export declare class JsonMissingTypeErrorBase extends JsonError {
    baseClassName: string;
    type: string;
    message: string;
    constructor(baseClassName: string, type: string, message: string);
}
export declare class JsonMissingTypeError extends JsonMissingTypeErrorBase {
    propertyName: string;
    baseClassName: string;
    constructor(propertyName: string, baseClassName: string);
}
export declare class JsonIncorrectTypeError extends JsonMissingTypeErrorBase {
    propertyName: string;
    baseClassName: string;
    constructor(propertyName: string, baseClassName: string);
}
export declare class JsonRequiredPropertyError extends JsonError {
    propertyName: string;
    className: string;
    constructor(propertyName: string, className: string);
}
export declare class JsonObject {
    static readonly metaData: JsonMetadata;
    errors: JsonError[];
    toJsonObject(obj: any): any;
    toObject(jsonObj: any, obj: any): void;
    protected toJsonObjectCore(obj: any, property: JsonObjectProperty): any;
    protected valueToJson(obj: any, result: any, property: JsonObjectProperty): void;
    protected valueToObj(value: any, obj: any, key: any, property: JsonObjectProperty): void;
}

export interface IMatrixDropdownData {
        onRowChanged(cell: MatrixDropdownRowModelBase, newRowValue: any): any;
        columns: Array<MatrixDropdownColumn>;
        createQuestion(row: MatrixDropdownRowModelBase, column: MatrixDropdownColumn): Question;
        getLocale(): string;
        getMarkdownHtml(text: string): string;
}
export interface IMatrixColumnOwner extends ILocalizableOwner {
        getRequiredText(): string;
        onColumnPropertiesChanged(column: MatrixDropdownColumn): any;
}
export declare class MatrixDropdownColumn extends Base implements ILocalizableOwner {
        minWidth: string;
        choicesByUrl: ChoicesRestfull;
        colOwner: IMatrixColumnOwner;
        validators: Array<SurveyValidator>;
        constructor(name: string, title?: string);
        getType(): string;
        name: string;
        choicesOrder: string;
        inputType: string;
        cellType: string;
        title: string;
        readonly fullTitle: string;
        getFullTitle(str: string): string;
        readonly locTitle: LocalizableString;
        optionsCaption: string;
        readonly locOptionsCaption: LocalizableString;
        placeHolder: string;
        readonly locPlaceHolder: LocalizableString;
        choices: Array<any>;
        colCount: number;
        isRequired: boolean;
        hasOther: boolean;
        getLocale(): string;
        getMarkdownHtml(text: string): string;
        onLocaleChanged(): void;
        protected onPropertiesChanged(): void;
}
export declare class MatrixDropdownCell {
        column: MatrixDropdownColumn;
        row: MatrixDropdownRowModelBase;
        constructor(column: MatrixDropdownColumn, row: MatrixDropdownRowModelBase, data: IMatrixDropdownData);
        readonly question: Question;
        value: any;
}
export declare class MatrixDropdownRowModelBase implements ISurveyData, ILocalizableOwner {
        protected data: IMatrixDropdownData;
        cells: Array<MatrixDropdownCell>;
        constructor(data: IMatrixDropdownData, value: any);
        readonly id: string;
        readonly rowName: any;
        value: any;
        getValue(name: string): any;
        setValue(name: string, newValue: any): void;
        getComment(name: string): string;
        setComment(name: string, newValue: string): void;
        readonly isEmpty: boolean;
        getLocale(): string;
        getMarkdownHtml(text: string): string;
        onLocaleChanged(): void;
        protected createCell(column: MatrixDropdownColumn): MatrixDropdownCell;
}
/**
    * A base class for matrix dropdown and matrix dynamic questions.
    */
export declare class QuestionMatrixDropdownModelBase extends Question implements IMatrixDropdownData {
        name: string;
        static addDefaultColumns(matrix: QuestionMatrixDropdownModelBase): void;
        protected generatedVisibleRows: Array<MatrixDropdownRowModelBase>;
        /**
            * Use this property to set the mimimum column width.
            */
        columnMinWidth: string;
        /**
            * Set this property to true to show the horizontal scroll.
            */
        horizontalScroll: boolean;
        columnsChangedCallback: () => void;
        updateCellsCallback: () => void;
        constructor(name: string);
        getType(): string;
        /**
            * The list of matrix columns.
            */
        columns: Array<MatrixDropdownColumn>;
        /**
            * Use this property to change the default cell type.
            */
        cellType: string;
        /**
            * The default column count for radiogroup and checkbox  cell types.
            */
        columnColCount: number;
        getRequiredText(): string;
        onColumnPropertiesChanged(column: MatrixDropdownColumn): void;
        onLocaleChanged(): void;
        /**
            * Returns the column width.
            * @param column
            */
        getColumnWidth(column: MatrixDropdownColumn): string;
        /**
            * The default choices for dropdown, checkbox and radiogroup cell types.
            */
        choices: Array<any>;
        /**
            * The default options caption for dropdown cell type.
            */
        optionsCaption: string;
        readonly locOptionsCaption: LocalizableString;
        addColumn(name: string, title?: string): MatrixDropdownColumn;
        /**
            * Returns the rows model objects that used during rendering.
            */
        readonly visibleRows: Array<MatrixDropdownRowModelBase>;
        onSurveyLoad(): void;
        /**
            * Returns the row value. If the row value is empty, the object is empty: {}.
            * @param rowIndex row index from 0 to visible row count - 1.
            */
        getRowValue(rowIndex: number): any;
        /**
            * Set the row value.
            * @param rowIndex row index from 0 to visible row count - 1.
            * @param rowValue an object {"column name": columnValue,... }
            */
        setRowValue(rowIndex: number, rowValue: any): any;
        protected generateRows(): Array<MatrixDropdownRowModelBase>;
        protected createNewValue(curValue: any): any;
        protected getRowValueCore(row: MatrixDropdownRowModelBase, questionValue: any, create?: boolean): any;
        protected onBeforeValueChanged(val: any): void;
        protected onValueChanged(): void;
        supportGoNextPageAutomatic(): boolean;
        hasErrors(fireCallback?: boolean): boolean;
        protected getFirstInputElementId(): string;
        protected getFirstErrorInputElementId(): string;
        protected getFirstCellQuestion(onError: boolean): Question;
        createQuestion(row: MatrixDropdownRowModelBase, column: MatrixDropdownColumn): Question;
        protected createQuestionCore(row: MatrixDropdownRowModelBase, column: MatrixDropdownColumn): Question;
        protected getColumnChoices(column: MatrixDropdownColumn): Array<any>;
        protected getColumnOptionsCaption(column: MatrixDropdownColumn): string;
        protected setQuestionProperties(question: Question, column: MatrixDropdownColumn): void;
        protected setSelectBaseProperties(question: QuestionSelectBase, column: MatrixDropdownColumn): void;
        protected createCellQuestion(questionType: string, name: string): Question;
        protected deleteRowValue(newValue: any, row: MatrixDropdownRowModelBase): any;
        onRowChanged(row: MatrixDropdownRowModelBase, newRowValue: any): void;
}

export declare class MatrixDropdownRowModel extends MatrixDropdownRowModelBase {
        name: string;
        constructor(name: string, item: ItemValue, data: IMatrixDropdownData, value: any);
        readonly rowName: string;
        readonly text: string;
        readonly locText: LocalizableString;
}
/**
    * A Model for a matrix dropdown question. You may use a dropdown, checkbox, radiogroup, text and comment questions as a cell editors.
    */
export declare class QuestionMatrixDropdownModel extends QuestionMatrixDropdownModelBase implements IMatrixDropdownData {
        name: string;
        constructor(name: string);
        getType(): string;
        /**
            * The list of rows. A row has a value and an optional text
            */
        rows: Array<any>;
        onLocaleChanged(): void;
        protected generateRows(): Array<MatrixDropdownRowModel>;
        protected createMatrixRow(item: ItemValue, value: any): MatrixDropdownRowModel;
}

export declare class MatrixDynamicRowModel extends MatrixDropdownRowModelBase {
        index: number;
        constructor(index: number, data: IMatrixDropdownData, value: any);
        readonly rowName: string;
}
/**
    * A Model for a matrix dymanic question. You may use a dropdown, checkbox, radiogroup, text and comment questions as a cell editors.
    * An end-user may dynamically add/remove rows, unlike in matrix dropdown question.
    */
export declare class QuestionMatrixDynamicModel extends QuestionMatrixDropdownModelBase implements IMatrixDropdownData {
        name: string;
        static MaxRowCount: number;
        rowCountChangedCallback: () => void;
        constructor(name: string);
        getType(): string;
        /**
            * The number of rows in the matrix.
            * @see minRowCount
            * @see maxRowCount
            */
        rowCount: number;
        /**
            * The minimum row count. A user could not delete a row if the rowCount equals to minRowCount
            * @see rowCount
            * @see maxRowCount
            */
        minRowCount: number;
        /**
            * The minimum row count. A user could not add a row if the rowCount equals to maxRowCount
            * @see rowCount
            * @see minRowCount
            */
        maxRowCount: number;
        /**
            * Returns true, if a new row can be added.
            * @see maxRowCount
            * @see canRemoveRow
            * @see rowCount
            */
        readonly canAddRow: boolean;
        /**
            * Returns true, if a row can be removed.
            * @see minRowCount
            * @see canAddRow
            * @see rowCount
            */
        readonly canRemoveRow: boolean;
        /**
            * Creates and add a new row.
            */
        addRow(): void;
        /**
            * Removes a row by it's index.
            * @param index a row index, from 0 to rowCount - 1
            */
        removeRow(index: number): void;
        /**
            * Use this property to change the default value of add row button text.
            */
        addRowText: string;
        readonly locAddRowText: LocalizableString;
        /**
            * Use this property to change the default value of remove row button text.
            */
        removeRowText: string;
        readonly locRemoveRowText: LocalizableString;
        supportGoNextPageAutomatic(): boolean;
        protected onCheckForErrors(errors: Array<SurveyError>): void;
        protected generateRows(): Array<MatrixDynamicRowModel>;
        protected createMatrixRow(value: any): MatrixDynamicRowModel;
        protected onBeforeValueChanged(val: any): void;
        protected createNewValue(curValue: any): any;
        protected deleteRowValue(newValue: any, row: MatrixDropdownRowModelBase): any;
        protected getRowValueCore(row: MatrixDropdownRowModelBase, questionValue: any, create?: boolean): any;
}

export interface IMatrixData {
        onMatrixRowChanged(row: MatrixRowModel): any;
}
export declare class MatrixRowModel extends Base {
        fullName: string;
        protected rowValue: any;
        constructor(item: ItemValue, fullName: string, data: IMatrixData, value: any);
        readonly name: string;
        readonly text: string;
        readonly locText: LocalizableString;
        value: any;
        protected onValueChanged(): void;
}
/**
    * A Model for a simple matrix question.
    */
export declare class QuestionMatrixModel extends Question implements IMatrixData {
        name: string;
        /**
            * Set this property to true, if you want a user to answer all rows.
            */
        isAllRowRequired: boolean;
        constructor(name: string);
        getType(): string;
        /**
            * Returns true, if there is at least one row.
            */
        readonly hasRows: boolean;
        /**
            * The list of columns. A column has a value and an optional text
            */
        columns: Array<any>;
        /**
            * The list of rows. A row has a value and an optional text
            */
        rows: Array<any>;
        /**
            * Returns the list of rows as model objects.
            */
        readonly visibleRows: Array<MatrixRowModel>;
        onLocaleChanged(): void;
        supportGoNextPageAutomatic(): boolean;
        protected onCheckForErrors(errors: Array<SurveyError>): void;
        protected createMatrixRow(item: ItemValue, fullName: string, value: any): MatrixRowModel;
        protected onValueChanged(): void;
        onMatrixRowChanged(row: MatrixRowModel): void;
}

export interface IMultipleTextData {
        getMultipleTextValue(name: string): any;
        setMultipleTextValue(name: string, value: any): any;
        getIsRequiredText(): string;
        getLocale(): string;
        getMarkdownHtml(text: string): string;
}
export declare class MultipleTextItemModel extends Base implements IValidatorOwner, ILocalizableOwner {
        /**
            * Set this property to true, to make the item a required. If a user doesn't fill the item then a validation error will be generated.
            */
        isRequired: boolean;
        onValueChangedCallback: (newValue: any) => void;
        validators: Array<SurveyValidator>;
        constructor(name?: any, title?: string);
        getType(): string;
        /**
            * The item name.
            */
        name: string;
        setData(data: IMultipleTextData): void;
        /**
            * Use this property to change the default input type.
            */
        inputType: string;
        /**
            * Item title. If it is empty, the item name is rendered as title. This property supports markdown.
            * @see name
            */
        title: string;
        readonly locTitle: LocalizableString;
        /**
            * Returns the text or html for rendering the title.
            */
        readonly fullTitle: string;
        protected getFullTitle(str: string): string;
        /**
            * The input place holder.
            */
        placeHolder: string;
        readonly locPlaceHolder: LocalizableString;
        onLocaleChanged(): void;
        /**
            * The item value.
            */
        value: any;
        onValueChanged(newValue: any): void;
        getValidatorTitle(): string;
        getLocale(): string;
        getMarkdownHtml(text: string): string;
}
/**
    * A Model for a multiple text question.
    */
export declare class QuestionMultipleTextModel extends Question implements IMultipleTextData {
        name: string;
        colCountChangedCallback: () => void;
        /**
            * The default text input size.
            */
        itemSize: number;
        constructor(name: string);
        getType(): string;
        /**
            * The list of input items.
            */
        items: Array<MultipleTextItemModel>;
        /**
            * Add a new text item.
            * @param name a item name
            * @param title a item title (optional)
            */
        addItem(name: string, title?: string): MultipleTextItemModel;
        onLocaleChanged(): void;
        supportGoNextPageAutomatic(): boolean;
        /**
            * The number of columns. Items are rendred in one line if the value is 0.
            */
        colCount: number;
        /**
            * Returns the list of rendered rows.
            */
        getRows(): Array<any>;
        protected onValueChanged(): void;
        protected createTextItem(name: string, title: string): MultipleTextItemModel;
        protected onItemValueChanged(): void;
        protected runValidators(): SurveyError;
        hasErrors(fireCallback?: boolean): boolean;
        protected hasErrorInItems(fireCallback: boolean): boolean;
        getMultipleTextValue(name: string): any;
        setMultipleTextValue(name: string, value: any): void;
        getIsRequiredText(): string;
}

export declare class QuestionRowModel {
        panel: PanelModelBase;
        visibilityChangedCallback: () => void;
        constructor(panel: PanelModelBase);
        elements: Array<IElement>;
        readonly questions: Array<IElement>;
        visible: boolean;
        updateVisible(): void;
        addElement(q: IElement): void;
        protected onVisibleChanged(): void;
}
/**
    * A base class for a Panel and Page objects.
    */
export declare class PanelModelBase extends Base implements IConditionRunner, ILocalizableOwner {
        name: string;
        /**
            * A parent element. It is always null for the Page object and always not null for the Panel object. Panel object may contain Questions and other Panels.
            */
        parent: PanelModelBase;
        /**
            * An expression that returns true or false. If it returns a true the Panel becomes visible and if it returns false the Panel becomes invisible. The library perform the expression on survey start and on changing a question value. If the property is empty then visible property is used.
            * @see visible
            */
        visibleIf: string;
        rowsChangedCallback: () => void;
        constructor(name?: string);
        data: ISurvey;
        /**
            * PanelModel or PageModel title property.
            */
        title: string;
        readonly locTitle: LocalizableString;
        getLocale(): string;
        getMarkdownHtml(text: string): string;
        /**
            * A unique element identificator. It is generated automatically.
            */
        readonly id: string;
        /**
            * Returns true if the current object is Panel. Returns false if the current object is Page (a root Panel).
            */
        readonly isPanel: boolean;
        /**
            * Returns the list of all questions located in the Panel/Page, including in the nested Panels.
            * @see QuestionBase
            * @see elements
            */
        readonly questions: Array<QuestionBase>;
        /**
            * Returns the list of the elements in the object, Panel/Page. Elements can be questions or panels. The function doesn't return elements in the nested Panels.
            */
        readonly elements: Array<IElement>;
        /**
            * Returns true if the current element belongs to the Panel/Page. It looks in nestede Panels as well.
            * @param element
            * @see PanelModel
            */
        containsElement(element: IElement): boolean;
        /**
            * Returns true, if there is an error on this Page or inside the current Panel
            * @param fireCallback set it to true, to show errors in UI
            * @param focuseOnFirstError set it to true to focuse on the first question that doesn't pass the validation
            */
        hasErrors(fireCallback?: boolean, focuseOnFirstError?: boolean): boolean;
        /**
            * Fill list array with the questions.
            * @param list
            * @param visibleOnly set it to true to get visible questions only
            */
        addQuestionsToList(list: Array<IQuestion>, visibleOnly?: boolean): void;
        readonly rows: Array<QuestionRowModel>;
        /**
            * Returns true if the current object is Page and it is the current page.
            */
        readonly isActive: boolean;
        protected readonly root: PanelModelBase;
        protected createRow(): QuestionRowModel;
        onSurveyLoad(): void;
        protected readonly isLoadingFromJson: boolean;
        protected onRowsChanged(): void;
        /**
            * Returns rendered title text or html.
            */
        readonly processedTitle: string;
        protected getRendredTitle(str: string): string;
        /**
            * Use it to get/set the object visibility.
            * @see visibleIf
            */
        visible: boolean;
        protected onVisibleChanged(): void;
        /**
            * Returns true if object is visible or survey is in design mode right now.
            */
        readonly isVisible: boolean;
        getIsPageVisible(exceptionQuestion: IQuestion): boolean;
        /**
            * Add an elememnt into Panel or Page.
            * @param element
            * @param index element index in the elements array
            */
        addElement(element: IElement, index?: number): void;
        /**
            * Add a question into Panel or Page.
            * @param question
            * @param index element index in the elements array
            */
        addQuestion(question: QuestionBase, index?: number): void;
        /**
            * Add a panel into Panel or Page.
            * @param panel
            * @param index element index in the elements array
            */
        addPanel(panel: PanelModel, index?: number): void;
        /**
            * Creates a new question and adds it into the end of the elements list.
            * @param questionType the possible values are: "text", "checkbox", "dropdown", "matrix", "html", "matrixdynamic", "matrixdropdown" and so on.
            * @param name a question name
            */
        addNewQuestion(questionType: string, name: string): QuestionBase;
        /**
            * Creates a new panel and adds it inot the end of the elements list.
            * @param name a panel name
            */
        addNewPanel(name: string): PanelModel;
        protected createNewPanel(name: string): PanelModel;
        /**
            * Remove an element (Panel or Question) from the elements list.
            * @param element
            * @see elements
            */
        removeElement(element: IElement): boolean;
        /**
            * Remove question  from the elements list.
            * @param question
            * @see elements
            * @see removeElement
            */
        removeQuestion(question: QuestionBase): void;
        runCondition(values: HashTable<any>): void;
        onLocaleChanged(): void;
}
/**
    * A container element, similar to the Page objects. However, unlike the Page, Panel can't be a root.
    * It may contain questions and other panels.
    */
export declare class PanelModel extends PanelModelBase implements IElement {
        name: string;
        /**
            * The Panel width.
            */
        width: string;
        renderWidthChangedCallback: () => void;
        rowVisibilityChangedCallback: () => void;
        startWithNewLineChangedCallback: () => void;
        constructor(name?: string);
        getType(): string;
        setData(newValue: ISurveyData): void;
        readonly isPanel: boolean;
        /**
            * The inner indent. Set this property to increase the panel content margin.
            */
        innerIndent: number;
        renderWidth: string;
        /**
            * The Panel renders on the new line if the property is true. If the property is false, the panel tries to render on the same line/row with a previous question/panel.
            */
        startWithNewLine: boolean;
        /**
            * The right indent of the Panel.
            */
        rightIndent: number;
        protected onVisibleChanged(): void;
}

/**
    * The page object. It has elements collection, that contains questions and panels.
    */
export declare class PageModel extends PanelModelBase implements IPage {
        name: string;
        /**
            * The visible index of the page. It has values from 0 to visible page count - 1.
            * @see SurveyModel.visiblePages
            * @see SurveyModel.pages
            */
        visibleIndex: number;
        constructor(name?: string);
        getType(): string;
        num: number;
        /**
            * Set this property to "hide" to make "Prev", "Next" and "Complete" buttons are invisible for this page. Set this property to "show" to make these buttons visible, even if survey showNavigationButtons property is false.
            * @see SurveyMode.showNavigationButtons
            */
        navigationButtonsVisibility: string;
        protected getRendredTitle(str: string): string;
        /**
            * Call it to focus the input on the first question
            */
        focusFirstQuestion(): void;
        /**
            * Call it to focus the input of the first question that has an error.
            */
        focusFirstErrorQuestion(): void;
        /**
            * Call it to scroll to the page top.
            */
        scrollToTop(): void;
        protected onNumChanged(value: number): void;
        protected onVisibleChanged(): void;
}

/**
    * Extends question base class with title, value, errors and other functionality
    */
export declare class Question extends QuestionBase implements IValidatorOwner {
        name: string;
        errors: Array<SurveyError>;
        validators: Array<SurveyValidator>;
        valueChangedCallback: () => void;
        commentChangedCallback: () => void;
        errorsChangedCallback: () => void;
        titleChangedCallback: () => void;
        constructor(name: string);
        readonly hasTitle: boolean;
        readonly hasInput: boolean;
        readonly inputId: string;
        /**
            * Question title. Use survey questionTitleTemplate property to change the title question is rendered. If it is empty, then question name property is used.
            * @see SurveyModel.questionTitleTemplate
         */
        title: string;
        readonly locTitle: LocalizableString;
        readonly locCommentText: LocalizableString;
        onLocaleChanged(): void;
        /**
            * Returns the rendred question title.
            */
        readonly processedTitle: string;
        /**
            * Returns the title after processing the question template.
            * @see SurveyModel.questionTitleTemplate
            */
        readonly fullTitle: string;
        focus(onError?: boolean): void;
        protected getFirstInputElementId(): string;
        protected getFirstErrorInputElementId(): string;
        protected canProcessedTextValues(name: string): boolean;
        protected getProcessedTextValue(name: string): any;
        supportComment(): boolean;
        supportOther(): boolean;
        /**
            * Set this property to true, to make the question a required. If a user doesn't answer the question then a validation error will be generated.
            */
        isRequired: boolean;
        hasComment: boolean;
        /**
            * Use it to get or set the comment value.
            */
        commentText: string;
        hasOther: boolean;
        protected hasOtherChanged(): void;
        /**
            * Retuns true if readOnly property is true or survey is in display mode.
            * @see SurveyModel.model
            * @see readOnly
            */
        readonly isReadOnly: boolean;
        /**
            * Set it to true to make the question readonly.
            */
        readOnly: boolean;
        onReadOnlyChanged(): void;
        protected readonly no: string;
        protected onSetData(): void;
        /**
            * Get/Set the question value.
            * @see SurveyMode.setValue
            * @see SurveyMode.getValue
            */
        value: any;
        /**
            * The question comment value.
            */
        comment: string;
        protected getComment(): string;
        protected setComment(newValue: string): void;
        /**
            * Returns true if the question value is empty
            */
        isEmpty(): boolean;
        /**
            * Returns true if threre is a validation error(s) in the question.
            * @param fireCallback set it to true to show an error in UI.
            */
        hasErrors(fireCallback?: boolean): boolean;
        /**
            * Returns the validation errors count.
            */
        readonly currentErrorCount: number;
        /**
            * Returns the char/string for a required question.
            * @see SurveyModel.requiredText
            */
        readonly requiredText: string;
        /**
            * Add error into the question error list.
            * @param error
            */
        addError(error: SurveyError): void;
        protected onCheckForErrors(errors: Array<SurveyError>): void;
        protected hasRequiredError(): boolean;
        protected runValidators(): SurveyError;
        protected setNewValue(newValue: any): void;
        protected setNewValueInData(newValue: any): void;
        protected valueFromData(val: any): any;
        protected valueToData(val: any): any;
        protected onValueChanged(): void;
        protected setNewComment(newValue: string): void;
        onSurveyValueChanged(newValue: any): void;
        getValidatorTitle(): string;
}

/**
    * A base class for all questions. QuestionBase doesn't have information about title, values, errors and so on.
    * Those properties are defined in the Question class.
    */
export declare class QuestionBase extends Base implements IQuestion, IConditionRunner, ILocalizableOwner {
        name: string;
        protected data: ISurveyData;
        /**
            * The link to the custom widget.
            */
        customWidget: QuestionCustomWidget;
        customWidgetData: {
                isNeedRender: boolean;
        };
        /**
            * An expression that returns true or false. If it returns a true the Question becomes visible and if it returns false the Panel becomes invisible. The library perform the expression on survey start and on changing a question value. If the property is empty then visible property is used.
            * @see visible
            */
        visibleIf: string;
        /**
            * Use it to set the specific width to the question.
            */
        width: string;
        /**
            * The event is fired when the survey change it's locale
            * @see SurveyModel.locale
            */
        localeChanged: Event<(sender: QuestionBase) => any, any>;
        focusCallback: () => void;
        renderWidthChangedCallback: () => void;
        rowVisibilityChangedCallback: () => void;
        startWithNewLineChangedCallback: () => void;
        visibilityChangedCallback: () => void;
        visibleIndexChangedCallback: () => void;
        readOnlyChangedCallback: () => void;
        constructor(name: string);
        /**
            * Always returns false.
            */
        readonly isPanel: boolean;
        /**
            * Use it to get/set the question visibility.
            * @see visibleIf
            */
        visible: boolean;
        /**
            * Returns true if the question is visible or survey is in design mode right now.
            */
        readonly isVisible: boolean;
        /**
            * Returns true if there is no input in the question. It always returns true for html question or survey is in 'display' mode.
            * @see QuestionHtmlModel
            * @see SurveyModel.mode
            * @see Question.readOnly
            */
        readonly isReadOnly: boolean;
        /**
            * Returns the visible index of the question in the survey. It can be from 0 to all visible questions count - 1
            */
        readonly visibleIndex: number;
        /**
            * Returns true if there is at least one error on question validation.
            * @param fireCallback set it to true to show error in UI
            */
        hasErrors(fireCallback?: boolean): boolean;
        /**
            * Returns the number of erros on validation.
            */
        readonly currentErrorCount: number;
        /**
            * Returns false if the question doesn't have a title property, for example: QuestionHtmlModel
            */
        readonly hasTitle: boolean;
        /**
            * Returns false if the question doesn't have an input element, for example: QuestionHtmlModel
            */
        readonly hasInput: boolean;
        /**
            * Returns true, if you can have a comment for the question.
            */
        readonly hasComment: boolean;
        /**
            * Returns the unique identificator. It is generated automatically.
            */
        readonly id: string;
        /**
            * The Question renders on the new line if the property is true. If the property is false, the question tries to render on the same line/row with a previous question/panel.
            */
        startWithNewLine: boolean;
        /**
            * The rendered width of the question.
            */
        renderWidth: string;
        /**
            * Set it different from 0 to increase the left padding.
            */
        indent: number;
        /**
            * Set it different from 0 to increase the right padding.
            */
        rightIndent: number;
        /**
            * Focus the question input.
            * @param onError Focus if there is an error.
            */
        focus(onError?: boolean): void;
        setData(newValue: ISurveyData): void;
        /**
            * Returns the survey object.
            */
        readonly survey: ISurvey;
        protected fireCallback(callback: () => void): void;
        protected onSetData(): void;
        protected onCreating(): void;
        /**
            * Run visibleIf expression. If visibleIf is not empty, then the results of performing the expression (true or false) set to the visible property.
            * @param values Typically survey results
            * @see visible
            * @see visibleIf
            */
        runCondition(values: HashTable<any>): void;
        onSurveyValueChanged(newValue: any): void;
        onSurveyLoad(): void;
        protected readonly isLoadingFromJson: boolean;
        setVisibleIndex(value: number): void;
        supportGoNextPageAutomatic(): boolean;
        clearUnusedValues(): void;
        onLocaleChanged(): void;
        onReadOnlyChanged(): void;
        /**
            * Returns the current survey locale
            * @see SurveyModel.locale
            */
        getLocale(): string;
        getMarkdownHtml(text: string): string;
}

/**
    * It is a base class for checkbox, dropdown and radiogroup questions.
    */
export declare class QuestionSelectBase extends Question {
        protected cachedValue: any;
        /**
            * Use this property to fill the choices from a restful service.
            * @see choices
            */
        choicesByUrl: ChoicesRestfull;
        /**
            * By default the entered text in the others input in the checkbox/radiogroup/dropdown are stored as "question name " + "-Comment". The value itself is "question name": "others". Set this property to false, to store the entered text directly in the "question name" key.
            * @see SurveyModel.storeOthersAsComment
            */
        storeOthersAsComment: boolean;
        choicesChangedCallback: () => void;
        constructor(name: string);
        /**
            * Returns the other item. By using this property, you may change programmatically it's value and text.
            */
        readonly otherItem: ItemValue;
        /**
            * Returns true if a user select the 'other' item.
            */
        readonly isOtherSelected: boolean;
        protected getHasOther(val: any): boolean;
        protected createRestfull(): ChoicesRestfull;
        protected getComment(): string;
        protected setComment(newValue: string): void;
        protected setNewValue(newValue: any): void;
        protected valueFromData(val: any): any;
        protected valueToData(val: any): any;
        protected valueFromDataCore(val: any): any;
        protected valueToDataCore(val: any): any;
        protected hasUnknownValue(val: any): boolean;
        /**
            * The list of items. Every item has value and text. If text is empty, the value is rendered. The item text supports markdown.
            * @see choicesByUrl
            */
        choices: Array<any>;
        protected hasOtherChanged(): void;
        /**
            * Use this property to render items in a specific order.
            */
        choicesOrder: string;
        /**
            * Use this property to set the different text for other item.
            */
        otherText: string;
        /**
            * The text that shows when the other item is choosed by the other input is empty.
            */
        otherErrorText: string;
        readonly locOtherText: LocalizableString;
        readonly locOtherErrorText: LocalizableString;
        /**
            * The list of items as they will be rendered. If needed items are sorted and the other item is added.
            * @see hasOther
            * @see choicesOrder
            */
        readonly visibleChoices: Array<ItemValue>;
        supportComment(): boolean;
        supportOther(): boolean;
        protected onCheckForErrors(errors: Array<SurveyError>): void;
        onLocaleChanged(): void;
        protected getStoreOthersAsComment(): boolean;
        onSurveyLoad(): void;
        clearUnusedValues(): void;
}
/**
    * A base class for checkbox and radiogroup questions. It introduced a colCount property.
    */
export declare class QuestionCheckboxBase extends QuestionSelectBase {
        name: string;
        colCountChangedCallback: () => void;
        constructor(name: string);
        /**
            * The number of columns for radiogroup and checkbox questions. Items are rendred in one line if the value is 0.
            */
        colCount: number;
}

/**
  * A Model for a checkbox question
  */
export declare class QuestionCheckboxModel extends QuestionCheckboxBase {
    name: string;
    constructor(name: string);
    protected getHasOther(val: any): boolean;
    protected valueFromData(val: any): any;
    protected valueFromDataCore(val: any): any;
    protected valueToDataCore(val: any): any;
    getType(): string;
}

/**
    * A Model for a comment question
    */
export declare class QuestionCommentModel extends Question {
        name: string;
        /**
            * The html rows attribute.
            */
        rows: number;
        /**
            * The html cols attribute.
            */
        cols: number;
        constructor(name: string);
        /**
            * Use this property to set the input place holder.
            */
        placeHolder: string;
        readonly locPlaceHolder: LocalizableString;
        getType(): string;
        isEmpty(): boolean;
}

/**
    * A Model for a dropdown question
    */
export declare class QuestionDropdownModel extends QuestionSelectBase {
        name: string;
        constructor(name: string);
        /**
            * Use this property to set the options caption different from the default value. The default value is taken from localization strings.
            */
        optionsCaption: string;
        readonly locOptionsCaption: LocalizableString;
        getType(): string;
        onLocaleChanged(): void;
        supportGoNextPageAutomatic(): boolean;
}

export declare class QuestionFactory {
    static Instance: QuestionFactory;
    static readonly DefaultChoices: string[];
    static readonly DefaultColums: string[];
    static readonly DefaultRows: string[];
    registerQuestion(questionType: string, questionCreator: (name: string) => QuestionBase): void;
    clear(): void;
    getAllTypes(): Array<string>;
    createQuestion(questionType: string, name: string): QuestionBase;
}
export declare class ElementFactory {
    static Instance: ElementFactory;
    registerElement(elementType: string, elementCreator: (name: string) => IElement): void;
    clear(): void;
    getAllTypes(): Array<string>;
    createElement(elementType: string, name: string): IElement;
}

/**
    * A Model for a file question
    */
export declare class QuestionFileModel extends Question {
        name: string;
        previewValueLoadedCallback: () => void;
        /**
            * The image height.
            */
        imageHeight: string;
        /**
            * The image width.
            */
        imageWidth: string;
        /**
            * Set it to true to serialize file content as text.
            */
        storeDataAsText: boolean;
        /**
            * Use this property to setup the maximum allowed file size.
            */
        maxSize: number;
        constructor(name: string);
        getType(): string;
        /**
            * Set it to true, to show the preview for the image files.
            */
        showPreview: boolean;
        /**
            * Load file programmatically.
            * @param file
            */
        loadFile(file: File): void;
        previewValue: any;
        protected setFileValue(file: File): void;
        protected onCheckForErrors(errors: Array<SurveyError>): void;
}

/**
  * A Model for html question. Unlike other questions it doesn't have value and title.
  */
export declare class QuestionHtmlModel extends QuestionBase {
    name: string;
    constructor(name: string);
    getType(): string;
    html: string;
    readonly locHtml: LocalizableString;
    readonly processedHtml: string;
}

/**
  * A Model for a radiogroup question.
  */
export declare class QuestionRadiogroupModel extends QuestionCheckboxBase {
    name: string;
    constructor(name: string);
    getType(): string;
    supportGoNextPageAutomatic(): boolean;
}

/**
    * A Model for a rating question.
    */
export declare class QuestionRatingModel extends Question {
        name: string;
        static defaultRateValues: ItemValue[];
        rateValuesChangedCallback: () => void;
        constructor(name: string);
        /**
            * The list of rate items. Every item has value and text. If text is empty, the value is rendered. The item text supports markdown. If it is empty the default array [1, 2, 3, 4, 5] is used.
            */
        rateValues: Array<any>;
        readonly visibleRateValues: ItemValue[];
        getType(): string;
        supportGoNextPageAutomatic(): boolean;
        supportComment(): boolean;
        supportOther(): boolean;
        /**
            * The description of minimum (first) item.
            */
        minRateDescription: string;
        readonly locMinRateDescription: LocalizableString;
        /**
            * The description of maximum (last) item.
            */
        maxRateDescription: string;
        readonly locMaxRateDescription: LocalizableString;
}

/**
    * A Model for an input text question.
    */
export declare class QuestionTextModel extends Question {
        name: string;
        /**
            * The text input size
            */
        size: number;
        constructor(name: string);
        getType(): string;
        /**
            * Use this property to change the default input type.
            */
        inputType: string;
        isEmpty(): boolean;
        supportGoNextPageAutomatic(): boolean;
        /**
            * The input place holder.
            */
        placeHolder: string;
        readonly locPlaceHolder: LocalizableString;
        protected setNewValue(newValue: any): void;
        protected correctValueType(newValue: any): any;
}

/**
    * Survey object contains information about the survey. Pages, Questions, flow logic and etc.
    */
export declare class SurveyModel extends Base implements ISurvey, ISurveyTriggerOwner, ILocalizableOwner {
        /**
            * Set this property to automatically load survey Json from [dxsurvey.com](http://www.dxsurvey.com) service.
            * @see loadSurveyFromService
            */
        surveyId: string;
        /**
            * Set this property to automatically save the data into the [dxsurvey.com](http://www.dxsurvey.com) service.
            * @see onComplete
            */
        surveyPostId: string;
        /**
            * Use this property as indentificator for a user, for example e-mail or unique customer id in your web application. If you are loading survey or posting survey results  from/to [dxsurvey.com](http://www.dxsurvey.com) service, then the library do not allow to run the same survey the second time. On the second run, the user will see the 'Thank you' page.
            */
        clientId: string;
        /**
            * If the property is not empty, before starting to run the survey, the library checkes if the cookie with this name exists. If it is true, the survey goes to complete mode and an user sees the 'Thank you' page. On completing the survey the cookie with this name is created.
            */
        cookieName: string;
        /**
            * Set it to true, to save results on completing every page. onPartialSend event is fired.
            * @see onPartialSend
            * @see clientId
            */
        sendResultOnPageNext: boolean;
        /**
            * You may show comments input for the most of questions. The entered text in the comment input will be saved as 'question name' + 'commentPrefix'.
            * @see data
            */
        commentPrefix: string;
        /**
            * On showing the next or previous page, a first input is focused, if the property set to true.
            */
        focusFirstQuestionAutomatic: boolean;
        /**
            * Set it to false to hide 'Prev', 'Next' and 'Complete' buttons. It makes sense if you are going to create a custom navigation or have just one page or on setting goNextPageAutomatic property.
            * @see goNextPageAutomatic
            */
        showNavigationButtons: boolean;
        /**
            * Set it to false hide survey title.
            * @see title
            */
        showTitle: boolean;
        /**
            * Set it to false to hide page titles.
            * @see PageModel.title
            */
        showPageTitles: boolean;
        /**
            * On finishing the survey the 'Thank you', page on complete, is shown. Set the property to false, to hide the 'Thank you' page.
            * @see data
            * @see onComplete
            */
        showCompletedPage: boolean;
        /**
            * A char/string that will be rendered in the title required questions.
            * @see QuestionBase.title
            */
        requiredText: string;
        /**
            * By default the first question index is 1. You may start it from 100 or from 'A', by setting 100 or 'A' to this property.
            * @see QuestionBase.title
            * @see requiredText
            */
        questionStartIndex: string;
        /**
            * By default the entered text in the others input in the checkbox/radiogroup/dropdown are stored as "question name " + "-Comment". The value itself is "question name": "others". Set this property to false, to store the entered text directly in the "question name" key.
            * @see commentPrefix
            */
        storeOthersAsComment: boolean;
        /**
            * Set it true if you want to go to the next page without pressing 'Next' button when all questions are anwered.
         * @see showNavigationButtons
            */
        goNextPageAutomatic: boolean;
        /**
            * The list of all pages in the survey, including invisible.
            * @see PageModel
            * @see visiblePages
            */
        pages: Array<PageModel>;
        /**
            * The list of triggers in the survey.
            * @see SurveyTrigger
            */
        triggers: Array<SurveyTrigger>;
        /**
            * Set it to true, to remove from data property values of invisible questions on survey complete. In this case, the invisible questions will not be stored on the server.
            * @see QuestionBase.visible
            * @see oncComplete
            */
        clearInvisibleValues: boolean;
        /**
            * The event is fired after a user click on 'Complete' button and finished the survey. You may use it to send the data to your web server.
            * @see data
            * @see clearInvisibleValues
            * @see completeLastPage
            * @see surveyPostId
            */
        onComplete: Event<(sender: SurveyModel) => any, any>;
        /**
            * The event is fired on clicking 'Next' page if sendResultOnPageNext is set to true. You may use it to save the intermidiate results, for example, if your survey is large enough.
            * @see sendResultOnPageNext
            */
        onPartialSend: Event<(sender: SurveyModel) => any, any>;
        /**
            * The event is fired when another page becomes the current. Typically it happens when a user click on 'Next' or 'Prev' buttons.
            * @see currentPage
            * @see currentPageNo
            * @see nextPage
            * @see prevPage
            * @see completeLastPage
            */
        onCurrentPageChanged: Event<(sender: SurveyModel, options: any) => any, any>;
        /**
            * The event is fired when the question value is changed. It can be done via UI by a user or programmatically on calling setValue method.
            * @see setValue
            */
        onValueChanged: Event<(sender: SurveyModel, options: any) => any, any>;
        /**
            * The event is fired on changing a question visability.
            * @see QuestionBase.visibile
            * @see QuestionBase.visibileIf
            */
        onVisibleChanged: Event<(sender: SurveyModel, options: any) => any, any>;
        /**
            * The event is fired on changing a page visability.
            * @see PageModel.visibile
            * @see PageModel.visibileIf
            */
        onPageVisibleChanged: Event<(sender: SurveyModel, options: any) => any, any>;
        /**
            * The event is fired on adding a new question into survey.
            * @see QuestionBase
            */
        onQuestionAdded: Event<(sender: SurveyModel, options: any) => any, any>;
        /**
            * The event is fired on removing a question from survey
            * @see QuestionBase
            */
        onQuestionRemoved: Event<(sender: SurveyModel, options: any) => any, any>;
        /**
            * The event is fired on adding a panel into survey
            * @see PanelModel
            */
        onPanelAdded: Event<(sender: SurveyModel, options: any) => any, any>;
        /**
            * The event is fired on removing a panel from survey
            * @see PanelModel
            */
        onPanelRemoved: Event<(sender: SurveyModel, options: any) => any, any>;
        /**
            * The event is fired on validating value in a question. There are following properties in options: options.name is a question name, options.value is the current question value and options.error is an empty string. Set your error to options.error and survey will show the error for the question and block completing the survey or going to the next page.
            */
        onValidateQuestion: Event<(sender: SurveyModel, options: any) => any, any>;
        /**
            * Use this event to validate data on your server.
            */
        onServerValidateQuestions: (sender: SurveyModel, options: any) => any;
        /**
            * Use this event to modify the html before rendering, for example html on 'Thank you' page. Options has one parameter: Options.html.
            * @see completedHtml
            * @see QuestionHtmlModel.html
            */
        onProcessHtml: Event<(sender: SurveyModel, options: any) => any, any>;
        /**
            * Use this event to process the markdown text.
            */
        onTextMarkdown: Event<(sender: SurveyModel, options: any) => any, any>;
        /**
            * The event fires when it get response from the [dxsurvey.com](http://www.dxsurvey.com) service on saving survey results. Use it to find out if the results have been saved successful.
            */
        onSendResult: Event<(sender: SurveyModel, options: any) => any, any>;
        /**
            * Use it to get results after calling the getResult method. It returns a simple analytic from [dxsurvey.com](http://www.dxsurvey.com) service.
            * @see getResult
            */
        onGetResult: Event<(sender: SurveyModel, options: any) => any, any>;
        /**
            * The event is fired on uploading the file in QuestionFile. You may use it to change the file name or tells the library do not accept the file. There are three properties in options: options.name, options.file and options.accept.
            * @see uploadFile
            */
        onUploadFile: Event<(sender: SurveyModel, options: any) => any, any>;
        /**
            * The event is fired right after survey is rendered in DOM. options.htmlElement is the root element.
            */
        onAfterRenderSurvey: Event<(sender: SurveyModel, options: any) => any, any>;
        /**
            * The event is fired right after a page is rendred in DOM. Use it to modify html elements. There are two parameters in options: options.currentPage, options.htmlElement
            */
        onAfterRenderPage: Event<(sender: SurveyModel, options: any) => any, any>;
        /**
            * The event is fired right after a question is rendred in DOM. Use it to modify html elements. There are two parameters in options: options.question, options.htmlElement
            */
        onAfterRenderQuestion: Event<(sender: SurveyModel, options: any) => any, any>;
        /**
            * The event is fired right after a panel is rendred in DOM. Use it to modify html elements. There are two parameters in options: options.panel, options.htmlElement
            */
        onAfterRenderPanel: Event<(sender: SurveyModel, options: any) => any, any>;
        /**
            * The event is fired on adding a new row in Matrix Dynamic quesiton. Options.question is a matrix question.
            * @see QuestionMatrixDynamicModel
            * @see QuestionMatrixDynamicModel.visibleRows
            */
        onMatrixRowAdded: Event<(sender: SurveyModel, options: any) => any, any>;
        /**
            * The list of errors on loading survey json. If the list is empty after loading a json then the json is correct and there is no errors in it.
            * @see JsonError
            */
        jsonErrors: Array<JsonError>;
        constructor(jsonObj?: any);
        getType(): string;
        /**
            * Use it to change the survey locale. By default it is empty, 'en'. You may set it to 'de' - german, 'fr' - french and so on. The library has built-in localization for several languages. The library has a multi-language support as well.
            */
        locale: string;
        getLocale(): string;
        getMarkdownHtml(text: string): any;
        getLocString(str: string): any;
        /**
            * Returns the text that renders when there is no any visible page and question.
            */
        readonly emptySurveyText: string;
        /**
            * Survey title.
            */
        title: string;
        readonly locTitle: LocalizableString;
        /**
            * The html that shows on completed ('Thank you') page. Set it to change the default text.
            * @see showCompletedPage
            * @see locale
            */
        completedHtml: string;
        readonly locCompletedHtml: LocalizableString;
        /**
            * A text that renders on the 'Prev' button. Set it to change the default text.
            * @see locale
            */
        pagePrevText: string;
        readonly locPagePrevText: LocalizableString;
        /**
            * A text that renders on the 'Next' button. Set it to change the default text.
            * @see locale
            */
        pageNextText: string;
        readonly locPageNextText: LocalizableString;
        /**
            * A text that renders on the 'Complete' button. Set it to change the default text.
            * @see locale
            */
        completeText: string;
        readonly locCompleteText: LocalizableString;
        /**
            * A template for a question title.
            * @see QuestionModel.title
            */
        questionTitleTemplate: string;
        /**
            * Returns the question title template
            * @see questionTitleTemplate
            * @see QuestionModel.title
            */
        getQuestionTitleTemplate(): string;
        readonly locQuestionTitleTemplate: LocalizableString;
        /**
            * Set this property to false to turn off the numbering on pages titles.
            */
        showPageNumbers: boolean;
        /**
            * Set this property to false to turn off the numbering on questions titles.
            */
        showQuestionNumbers: string;
        /**
            * Set this property to "top" to show the progress bar on the bottom or to "bottom" to show it on the bottom.
            */
        showProgressBar: string;
        /**
            * Returns the text/html that renders as survey title.
            */
        readonly processedTitle: string;
        /**
            * Set this property to 'bottom' to show question title under the question.
            */
        questionTitleLocation: string;
        /**
            * Set this mode to 'display' to make the survey read-only.
            */
        mode: string;
        /**
            * An object that stores the survey results/data. You may set it directly as { 'question name': questionValue, ... }
            * @see setValue
            * @see getValue
            */
        data: any;
        protected _setDataValue(data: any, key: string): void;
        /**
            * Returns all comments from the data.
            * @see data
            */
        readonly comments: any;
        /**
            * Returns the list of visible pages. If all pages are visible then it is the same as pages property.
            * @see pages
            * @see PageModel.visible
            * @see PageModel.visibleIf
            */
        readonly visiblePages: Array<PageModel>;
        /**
            * Returns true if there is no any page in the survey. The survey is empty.
            */
        readonly isEmpty: boolean;
        /**
            * depricated, misspelling, use pageCount property
            */
        readonly PageCount: number;
        /**
            * Returns the survey pages count.
            * @see visiblePageCount
            * @see pages
            */
        readonly pageCount: number;
        /**
            * Returns the survey visible pages count
            * @see pageCount
            * @see visiblePages
            */
        readonly visiblePageCount: number;
        /**
            * Returns the current survey page. If survey is rendred then it is a page that a user can see/edit.
            */
        currentPage: PageModel;
        /**
            * The index of the current page in the visible pages array. It starts from 0.
            */
        currentPageNo: number;
        /**
            * Set the input focuse to the first question with the input.
            */
        focusFirstQuestion(): void;
        /**
            * Returns the current survey state: 'loading' - loading from the json, 'completed' - a user has completed the survey, 'running' - a user answers a questions right now, 'empty' - there is nothing to show in the current survey.
            */
        readonly state: string;
        /**
            * Clear the survey data and state. If the survey has a 'completed' state, it will have a 'running' state.
            * @param clearData clear the data
            * @param gotoFirstPage make the first page as a current page.
            * @see data
            * @see state
            * @see currentPage
            */
        clear(clearData?: boolean, gotoFirstPage?: boolean): void;
        protected mergeValues(src: any, dest: any): void;
        protected updateCustomWidgets(page: PageModel): void;
        protected currentPageChanged(newValue: PageModel, oldValue: PageModel): void;
        /**
            * Returns the progress that a user made by answering on the survey.
            */
        getProgress(): number;
        /**
            * Returns true if navigation buttons: 'Prev', 'Next' or 'Complete' are shown.
            */
        readonly isNavigationButtonsShowing: boolean;
        /**
            * Returns true if the survey in the edit mode.
            * @see mode
            */
        readonly isEditMode: boolean;
        /**
            * Returns true if the survey in the display mode.
            * @see mode
            */
        readonly isDisplayMode: boolean;
        /**
            * Returns true if the survey in the design mode. It is used by SurveyJS Editor
            * @see setDesignMode
            */
        readonly isDesignMode: boolean;
        /**
            * Call it to set the survey into the design mode.
            * @param value use true to set the survey into the design mode.
            */
        setDesignMode(value: boolean): void;
        /**
            * Returns true, if a user has already completed the survey on this browser and there is a cookie about it. Survey goes to 'completed' state if the function returns true.
            * @see cookieName
            * @see setCookie
            * @see deleteCookie
            * @see state
            */
        readonly hasCookie: boolean;
        /**
            * Set the cookie with cookieName in the browser. It is done automatically on survey complete if cookieName is not empty.
            * @see cookieName
            * @see hasCookie
            * @see deleteCookie
            */
        setCookie(): void;
        /**
            * Delete the cookie with cookieName in the browser.
            * @see cookieName
            * @see hasCookie
            * @see setCookie
            */
        deleteCookie(): void;
        /**
            * Call it to go to the next page. It returns false, if it is the last page. If there is an error, for example required question is empty, the function returns false as well.
            * @see isCurrentPageHasErrors
            * @see prevPage
            * @see completeLastPage
            */
        nextPage(): boolean;
        /**
            * Returns true, if there is any error on the current page. For example, the required question is empty or a question validation is failed.
            * @see nextPage
            */
        readonly isCurrentPageHasErrors: boolean;
        /**
            * Call it to go to the previous page. It returns false if the current page is the first page already. It doesn't perform any checks, required questions can be empty.
            * @see isFirstPage
            */
        prevPage(): boolean;
        /**
            * Call it to complete the survey, if the current page is the last one. It returns false if there is an error on the page.
            * @see isCurrentPageHasErrors
            * @see nextPage
            */
        completeLastPage(): boolean;
        /**
            * Returns true if the current page is the first one.
            */
        readonly isFirstPage: boolean;
        /**
            * Returns true if the current page is the last one.
            */
        readonly isLastPage: boolean;
        /**
            * Call it to complete the survey. It writes cookie if cookieName property is not empty, set the survey into 'completed' state, fire onComplete event and sendResult into [dxsurvey.com](http://www.dxsurvey.com) service if surveyPostId property is not empty.
            * @see cookieName
            * @see state
            * @see onComplete
            * @see surveyPostId
            */
        doComplete(): void;
        /**
            * Returns true, if at the current moment the question values on the current page are validating on the server.
            * @see onServerValidateQuestions
            */
        readonly isValidatingOnServer: boolean;
        protected onIsValidatingOnServerChanged(): void;
        protected doServerValidation(): boolean;
        protected doNextPage(): void;
        protected setCompleted(): void;
        /**
            * Returns the html for completed 'Thank you' page.
            * @see completedHtml
            */
        readonly processedCompletedHtml: string;
        /**
            * Returns the html that shows on loading the json.
            */
        readonly processedLoadingHtml: string;
        /**
            * Returns the text for the current progress.
            */
        readonly progressText: string;
        protected afterRenderSurvey(htmlElement: any): void;
        afterRenderPage(htmlElement: any): void;
        afterRenderQuestion(question: IQuestion, htmlElement: any): void;
        afterRenderPanel(panel: IElement, htmlElement: any): void;
        matrixRowAdded(question: IQuestion): void;
        /**
            * Upload the file into servey
            * @param name question name
            * @param file uploading file
            * @param storeDataAsText set it to true to encode file content into the survey results
            * @param uploadingCallback a call back function to get the status on uploading the file
            */
        uploadFile(name: string, file: File, storeDataAsText: boolean, uploadingCallback: (status: string) => any): boolean;
        protected uploadFileCore(name: string, file: File, uploadingCallback: (status: string) => any): void;
        getPage(index: number): PageModel;
        /**
            * Add a page into the survey
            * @param page
            * @see addNewPage
            */
        addPage(page: PageModel): void;
        /**
            * Creates a new page and adds it into the survey
            * @param name a page name
            * @see addPage
            */
        addNewPage(name: string): PageModel;
        /**
            * Remove the page from the survey
            * @param page
            */
        removePage(page: PageModel): void;
        /**
            * Returns a question by its name
            * @param name a question name
            * @param caseInsensitive
            */
        getQuestionByName(name: string, caseInsensitive?: boolean): IQuestion;
        /**
            * Get a list of questions by their names
            * @param names the array of names
            * @param caseInsensitive
            */
        getQuestionsByNames(names: string[], caseInsensitive?: boolean): IQuestion[];
        /**
            * Returns a page on which an element (question or panel) is placed.
            * @param element Question or Panel
            */
        getPageByElement(element: IElement): PageModel;
        /**
            * Returns a page on which a question is located
            * @param question
            */
        getPageByQuestion(question: IQuestion): PageModel;
        /**
            * Returns a page by it's name.
            * @param name
            */
        getPageByName(name: string): PageModel;
        /**
            * Rertuns a list of pages by their names
            * @param names a list of pages names
            */
        getPagesByNames(names: string[]): PageModel[];
        /**
            * Returns the list of all questions in the survey
            * @param visibleOnly set it true, if you want to get only visible questions
            */
        getAllQuestions(visibleOnly?: boolean): Array<IQuestion>;
        protected createNewPage(name: string): PageModel;
        protected doSurveyValueChanged(question: IQuestion, newValue: any): void;
        /**
            * Send the survey result into [dxsurvey.com](http://www.dxsurvey.com) service.
            * @param postId [dxsurvey.com](http://www.dxsurvey.com) service postId
            * @param clientId Typically a customer e-mail or an identificator
            * @param isPartialCompleted Set it to true if the survey is not completed yet and it is an intermediate results
            * @see surveyPostId
            * @see clientId
            */
        sendResult(postId?: string, clientId?: string, isPartialCompleted?: boolean): void;
        /**
            * It calls the [dxsurvey.com](http://www.dxsurvey.com) service and on callback fires onGetResult event with all answers that your users made for a question.
            * @param resultId [dxsurvey.com](http://www.dxsurvey.com) service resultId
            * @param name The question name
            * @see onGetResult
            */
        getResult(resultId: string, name: string): void;
        /**
            * Loads the survey Json from the [dxsurvey.com](http://www.dxsurvey.com) service.
            * @param surveyId [dxsurvey.com](http://www.dxsurvey.com) service surveyId
            */
        loadSurveyFromService(surveyId?: string): void;
        protected onLoadingSurveyFromService(): void;
        protected onLoadSurveyFromService(): void;
        /**
            * Returns true if the survey is loading from Json at the current moment.
            */
        readonly isLoadingFromJson: boolean;
        protected onBeforeCreating(): void;
        protected onCreating(): void;
        /**
            * Returns a variable value. Variable, unlike values, are not stored in the survey results.
            * @param name A variable name
            * @see SetVariable
            */
        getVariable(name: string): any;
        /**
            * Sets a variable value. Variable, unlike values, are not stored in the survey results.
            * @param name A variable name
            * @param newValue
            * @see GetVariable
            */
        setVariable(name: string, newValue: any): void;
        protected getUnbindValue(value: any): any;
        /**
            * Returns a question value
            * @param name A question name
            * @see data
            * @see setValue
            */
        getValue(name: string): any;
        /**
            * Sets a question value. It runs all triggers and conditions (visibleIf properties). Goes to the next page if goNextPageAutomatic is true and all questions on the current page are answered correctly.
            * @param name A question name
            * @param newValue
            * @see data
            * @see getValue
            * @see PageModel.visibleIf
            * @see QuestionBase.visibleIf
            * @see goNextPageAutomatic
            */
        setValue(name: string, newValue: any): void;
        protected tryGoNextPageAutomatic(name: string): void;
        /**
            * Returns the comment value
            * @param name
            * @see setComment
            */
        getComment(name: string): string;
        /**
            * Set the comment value
            * @param name
            * @param newValue
            * @see getComment
            */
        setComment(name: string, newValue: string): void;
        /**
            * Remove the value from the survey result.
            * @param {string} name The name of the value. Typically it is a question name
            */
        clearValue(name: string): void;
        questionVisibilityChanged(question: IQuestion, newValue: boolean): void;
        pageVisibilityChanged(page: IPage, newValue: boolean): void;
        questionAdded(question: IQuestion, index: number, parentPanel: any, rootPanel: any): void;
        questionRemoved(question: IQuestion): void;
        panelAdded(panel: IElement, index: number, parentPanel: any, rootPanel: any): void;
        panelRemoved(panel: IElement): void;
        validateQuestion(name: string): SurveyError;
        processHtml(html: string): string;
        processText(text: string): string;
        getObjects(pages: string[], questions: string[]): any[];
        setTriggerValue(name: string, value: any, isVariable: boolean): void;
}

/**
    * A base class for all triggers.
    * A trigger calls a method when the expression change the result: from false to true or from true to false.
    * Please note, it runs only one changing the expression result.
    */
export declare class Trigger extends Base {
        static operatorsValue: HashTable<Function>;
        static readonly operators: HashTable<Function>;
        value: any;
        constructor();
        operator: string;
        check(value: any): void;
        protected onSuccess(): void;
        protected onFailure(): void;
}
export interface ISurveyTriggerOwner {
        getObjects(pages: string[], questions: string[]): any[];
        doComplete(): any;
        setTriggerValue(name: string, value: any, isVariable: boolean): any;
}
/**
    * It extends the Trigger base class and add properties required for SurveyJS classes.
    */
export declare class SurveyTrigger extends Trigger {
        name: string;
        protected owner: ISurveyTriggerOwner;
        constructor();
        setOwner(owner: ISurveyTriggerOwner): void;
        readonly isOnNextPage: boolean;
}
/**
    * If expression returns true, it makes questions/pages visible.
    * Ohterwise it makes them invisible.
    */
export declare class SurveyTriggerVisible extends SurveyTrigger {
        pages: string[];
        questions: string[];
        constructor();
        getType(): string;
        protected onSuccess(): void;
        protected onFailure(): void;
        protected onItemSuccess(item: any): void;
        protected onItemFailure(item: any): void;
}
/**
    * If expression returns true, it completes the survey.
    */
export declare class SurveyTriggerComplete extends SurveyTrigger {
        constructor();
        getType(): string;
        readonly isOnNextPage: boolean;
        protected onSuccess(): void;
}
export declare class SurveyTriggerSetValue extends SurveyTrigger {
        setToName: string;
        setValue: any;
        isVariable: boolean;
        constructor();
        getType(): string;
        protected onSuccess(): void;
}

/**
    * A Model for a survey running in the Window.
    */
export declare class SurveyWindowModel extends Base {
        static surveyElementName: string;
        surveyValue: SurveyModel;
        windowElement: HTMLDivElement;
        isShowingValue: boolean;
        isExpandedValue: boolean;
        templateValue: string;
        constructor(jsonObj: any);
        getType(): string;
        /**
            * A survey object.
            * @see SurveyModel
            */
        readonly survey: SurveyModel;
        /**
            * Returns true if the window is currently showing.
            */
        readonly isShowing: boolean;
        /**
            * Returns true if the window is expanded.
            * @see expand
            * @see collapse
            */
        readonly isExpanded: boolean;
        /**
            * The window and survey title.
            */
        title: string;
        readonly locTitle: LocalizableString;
        /**
            * Expand the window to show the survey.
            */
        expand(): void;
        /**
            * Collapse the window and show survey title only.
            */
        collapse(): void;
        protected createSurvey(jsonObj: any): SurveyModel;
        protected expandcollapse(value: boolean): void;
}

export declare class TextPreProcessorItem {
    start: number;
    end: number;
}
export declare class TextPreProcessor {
    onProcess: (name: string) => any;
    onHasValue: (name: string) => boolean;
    constructor();
    process(text: string): string;
}

/**
  * The class contains methods to work with www.dxsurvey.com service.
  */
export declare class dxSurveyService {
    static serviceUrl: string;
    constructor();
    loadSurvey(surveyId: string, onLoad: (success: boolean, result: string, response: any) => void): void;
    sendResult(postId: string, result: JSON, onSendResult: (success: boolean, response: any) => void, clientId?: string, isPartialCompleted?: boolean): void;
    sendFile(postId: string, file: File, onSendFile: (success: boolean, response: any) => void): void;
    getResult(resultId: string, name: string, onGetResult: (success: boolean, data: any, dataList: Array<any>, response: any) => void): void;
    isCompleted(resultId: string, clientId: string, onIsCompleted: (success: boolean, result: string, response: any) => void): void;
}

export declare var surveyLocalization: {
    currentLocale: string;
    locales: {};
    getString: (strName: string) => any;
    getLocales: () => string[];
};
export declare var surveyStrings: {
    pagePrevText: string;
    pageNextText: string;
    completeText: string;
    otherItemText: string;
    progressText: string;
    emptySurvey: string;
    completingSurvey: string;
    loadingSurvey: string;
    optionsCaption: string;
    requiredError: string;
    requiredInAllRowsError: string;
    numericError: string;
    textMinLength: string;
    textMaxLength: string;
    textMinMaxLength: string;
    minRowCountError: string;
    minSelectError: string;
    maxSelectError: string;
    numericMinMax: string;
    numericMin: string;
    numericMax: string;
    invalidEmail: string;
    urlRequestError: string;
    urlGetChoicesError: string;
    exceedMaxSize: string;
    otherRequiredError: string;
    uploadingFile: string;
    addRow: string;
    removeRow: string;
    choices_Item: string;
    matrix_column: string;
    matrix_row: string;
};

export declare class QuestionCustomWidget {
    name: string;
    widgetJson: any;
    htmlTemplate: string;
    constructor(name: string, widgetJson: any);
    afterRender(question: IQuestion, el: any): void;
    willUnmount(question: IQuestion, el: any): void;
    isFit(question: IQuestion): boolean;
}
export declare class CustomWidgetCollection {
    static Instance: CustomWidgetCollection;
    onCustomWidgetAdded: Event<(customWidget: QuestionCustomWidget) => any, any>;
    readonly widgets: Array<QuestionCustomWidget>;
    addCustomWidget(widgetJson: any): void;
    clear(): void;
    getCustomWidget(question: IQuestion): QuestionCustomWidget;
}

