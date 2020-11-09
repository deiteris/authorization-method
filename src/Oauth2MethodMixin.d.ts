import { TokenInfo } from "@advanced-rest-client/arc-types/src/oauth2/OAuth2";
import { OAuth2Authorization } from "@advanced-rest-client/arc-types/src/authorization/Authorization";
import { TemplateResult } from "lit-html";

export type OAuth2DeliveryMethod = 'header' | 'query' | 'body';

export declare interface OAuth2Settings extends OAuth2Authorization {
  /**
   * The access token type. Default to `Bearer`
   */
  tokenType?: string;
  /**
   * The last access token received from the authorization server.
   */
  accessToken?: string;

  /**
   * Informs about what filed of the authenticated request the token property should be set.
   * By default the value is `header` which corresponds to the `authorization` by default,
   * but it is configured by the `deliveryName` property.
   * 
   * This can be used by the AMF model when the API spec defines where the access token should be
   * put in the authenticated request.
   * 
   * @default header
   */
  deliveryMethod: OAuth2DeliveryMethod;

  /**
   * The name of the authenticated request property that carries the token.
   * By default it is `authorization` which corresponds to `header` value of the `deliveryMethod` property.
   * 
   * By setting both `deliveryMethod` and `deliveryName` you instruct the application (assuming it reads this values)
   * where to put the authorization token.
   * 
   * @default authorization
   */
  deliveryName: string;
}


export declare interface ResponseType {
  type: string;
  label: string;
}

export const clickCopyAction: unique symbol;
export const scopesChanged: unique symbol;
export const oauth2RedirectTemplate: unique symbol;
export const oauth2ResponseTypeTemplate: unique symbol;
export const oauth2AdvancedTemplate: unique symbol;
export const oath2AuthorizeTemplate: unique symbol;
export const oauth2TokenTemplate: unique symbol;
export const advHandler: unique symbol;
export const readUrlValue: unique symbol;
export const setOauth2Defaults: unique symbol;
export const authorizeOauth2: unique symbol;
export const renderOauth2Auth: unique symbol;
export const restoreOauth2Auth: unique symbol;
export const serializeOauth2Auth: unique symbol;
export const oauth2CustomPropertiesTemplate: unique symbol;
export const autoHide: unique symbol;
export const clearOauth2Auth: unique symbol;
export const clientIdTemplate: unique symbol;
export const clientSecretTemplate: unique symbol;
export const toggleAdvViewSwitchTemplate: unique symbol;
export const authorizationUriTemplate: unique symbol;
export const accessTokenUriTemplate: unique symbol;
export const usernameTemplate: unique symbol;
export const passwordTemplateLocal: unique symbol;
export const scopesTemplate: unique symbol;

export const oauth2ResponseTypes: ResponseType[];

declare function Oauth2MethodMixin<T extends new (...args: any[]) => {}>(base: T): T & Oauth2MethodMixinConstructor;
interface Oauth2MethodMixinConstructor {
  new(...args: any[]): Oauth2MethodMixin;
}

interface Oauth2MethodMixin {
  readonly isCustomResponseType: boolean;
  readonly clientIdRequired: boolean;
  readonly oauth2ClientSecretRendered: boolean;
  readonly oauth2AuthorizationUriRendered: boolean;
  readonly oauth2AccessTokenUriRendered: boolean;
  readonly oauth2PasswordRendered: boolean;
  /** 
   * Selected authorization grand type.
   * @attribute
   */
  responseType: string;
  /** 
   * The client ID for the auth token.
   * @attribute
   */
  clientId: string;
  /** 
   * The client secret. It to be used when selected server flow.
   * @attribute
   */
  clientSecret: string;
  /**
   * List of user selected scopes.
   * It can be pre-populated with list of scopes (array of strings).
   */
  scopes: string[];
  /**
   * List of pre-defined scopes to choose from. It will be passed to the `oauth2-scope-selector`
   * element.
   */
  allowedScopes: string[];
  /**
   * If true then the `oauth2-scope-selector` will disallow to add a scope that is not
   * in the `allowedScopes` list. Has no effect if the `allowedScopes` is not set.
   * @attribute
   */
  preventCustomScopes: boolean;
  /**
   * When the user authorized the app it should be set to the token value.
   * This element do not perform authorization. Other elements must intercept
   * the token request event and perform the authorization.
   * @attribute
   */
  accessToken: string;
  /**
   * By default it is "bearer" as the only one defined in OAuth 2.0 spec.
   * If the token response contains `tokenType` property then this value is updated.
   * @attribute
   */
  tokenType?: string;
  /**
   * Currently available response types.
   */
  responseTypes?: ResponseType[];
  /**
   * If set it renders authorization url, token url and scopes as advanced options
   * which are then invisible by default. User can oen setting using the UI.
   * @attribute
   */
  advanced?: boolean;
  /**
   * If true then the advanced options are opened.
   * @attribute
   */
  advancedOpened?: boolean;
  /**
   * If set, the response type selector is hidden from the UI.
   * @attribute
   */
  noResponseType?: boolean;
  /**
   * Informs about what filed of the authenticated request the token property should be set.
   * By default the value is `header` which corresponds to the `authorization` by default,
   * but it is configured by the `deliveryName` property.
   * 
   * This can be used by the AMF model when the API spec defines where the access token should be
   * put in the authenticated request.
   * 
   * @default header
   * @attribute
   */
  oauthDeliveryMethod?: OAuth2DeliveryMethod;
  /**
   * The name of the authenticated request property that carries the token.
   * By default it is `authorization` which corresponds to `header` value of the `deliveryMethod` property.
   * 
   * By setting both `deliveryMethod` and `deliveryName` you instruct the application (assuming it reads this values)
   * where to put the authorization token.
   * 
   * @default authorization
   * @attribute
   */
  oauthDeliveryName?: string;
   /**
    * The base URI to use to construct the correct URLs to the authorization endpoints.
    * 
    * When the paths are relative then base URI is added to the path.
    * Relative paths must start with '/'.
    * 
    * Note, URL processing is happening internally in the component. The produced authorize event
    * will have base URI already applied.
    * @attribute
    */
  baseUri?: string;
  /**
   * The error message returned by the authorization library.
   * It renders error dialog when an error ocurred. 
   * It is automatically cleared when the user request the token again.
   */
  lastErrorMessage?: string;
  
  /**
   * Restores previously serialized values
   * @param settings
   */
  [restoreOauth2Auth](settings: OAuth2Settings): void;

  /**
   * Serializes OAuth2 parameters into a configuration object.
   */
  [serializeOauth2Auth](): OAuth2Settings;

  /**
   * When defined and the `url` is a relative path staring with `/` then it
   * adds base URI to the path and returns concatenated value.
   *
   * @return The final URL value.
   */
  [readUrlValue](url: string): string;

  [setOauth2Defaults](): void;

  /**
   * Clears OAuth 1 auth settings
   */
  [clearOauth2Auth](): void;

  /**
   * Performs the authorization.
   * 
   * @returns The auth token or null if couldn't be requested.
   * @throws {Error} When authorization error
   */
  [authorizeOauth2](): Promise<TokenInfo|null>;

  /**
   * Generates `state` parameter for the OAuth2 call.
   *
   * @return {string} Generated state string.
   */
  generateState(): string;

  /**
   * This function hides all non-crucial fields that has been pre-filled when element has been
   * initialize (values not provided by the user). Hidden fields will be available under
   * "advanced" options.
   *
   * To prevent this behavior set `no-auto` attribute on this element.
   */
  [autoHide](): void;

  /**
   * A handler for `focus` event on a label that contains text and
   * should be copied to clipboard when user is interacting with it.
   */
  [clickCopyAction](e: MouseEvent): void;

  /**
   * Event handler for the scopes element changed state
   */
  [scopesChanged](e: CustomEvent): void;

  [advHandler](e: CustomEvent): void;

  /**
   * @returns The template for the OAuth 2 redirect URI label
   */
  [oauth2RedirectTemplate](): TemplateResult;

  /**
   * @returns The template for the OAuth 2 response type selector
   */
  [oauth2ResponseTypeTemplate](): TemplateResult;

  /**
   * @returns The template for the OAuth 2 advanced options.
   */
  [oauth2AdvancedTemplate](): TemplateResult;

  /**
   * @returns The template for the "authorize" button.
   */
  [oath2AuthorizeTemplate](): TemplateResult;

  /**
   * @returns The template for the OAuth 2 token value
   */
  [oauth2TokenTemplate](): TemplateResult;

  /**
   * @returns The template for the OAuth 2 editor.
   */
  [renderOauth2Auth](): TemplateResult;

  [oauth2CustomPropertiesTemplate](): TemplateResult|string;

  /**
   * @returns The template for the OAuth 2 client secret input.
   */
  [clientSecretTemplate](): TemplateResult|string;

  /**
   * @returns The template for the OAuth 2 client id input.
   */
  [clientIdTemplate](): TemplateResult;

  /**
   * @returns The template for the toggle advanced view switch
   */
  [toggleAdvViewSwitchTemplate](): TemplateResult|string;

  /**
   * @param urlType The input type to render
   * @returns The template for the authorization URI input
   */
  [authorizationUriTemplate](urlType: string): TemplateResult|string;

  /**
   * @param urlType The input type to render
   * @returns The template for the access token URI input
   */
  [accessTokenUriTemplate](urlType: string): TemplateResult|string;

  /**
   * @returns The template for the user name input
   */
  [usernameTemplate](): TemplateResult|string;

  /**
   * @returns The template for the user password input
   */
  [passwordTemplateLocal](): TemplateResult|string;

  /**
   * @returns The template for the OAuth 2 scopes input
   */
  [scopesTemplate](): TemplateResult;
}

export {Oauth2MethodMixinConstructor};
export {Oauth2MethodMixin};
