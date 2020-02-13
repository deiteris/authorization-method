/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   src/Validation.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.

import {normalizeType} from './Utils.js';
import {AuthorizationMethod} from './AuthorizationMethod.js';
export {validateBasicAuth};

/**
 * Validates basic authorization form.
 *
 * @returns Validation result
 */
declare function validateBasicAuth(element: AuthorizationMethod|null): boolean|null;

export {validateBearerAuth};
/**
 * Validates bearer authorization form.
 *
 * @returns Validation result
 */
declare function validateBearerAuth(element: AuthorizationMethod): boolean;

export {validateNtlmAuth};

/**
 * Validates NTLM authorization form.
 *
 * @returns Validation result
 */
declare function validateNtlmAuth(element: AuthorizationMethod|null): boolean|null;

export {validateDigestAuth};


/**
 * Validates digest authorization form.
 *
 * @returns Validation result
 */
declare function validateDigestAuth(element: AuthorizationMethod|null): boolean|null;

export {validateOauth1Auth};


/**
 * Validates OAuth1 authorization form.
 *
 * @returns Validation result
 */
declare function validateOauth1Auth(element: AuthorizationMethod|null): boolean|null;

export {validateOauth2AuthImplicit};


/**
 * Validates OAuth2 authorization form with implicit grant type.
 *
 * @returns Validation result
 */
declare function validateOauth2AuthImplicit(element: AuthorizationMethod|null): boolean|null;

export {validateOauth2AuthCode};


/**
 * Validates OAuth2 authorization form with authorization code grant type.
 *
 * @returns Validation result
 */
declare function validateOauth2AuthCode(element: AuthorizationMethod|null): boolean|null;

export {validateOauth2AuthCredentials};


/**
 * Validates OAuth2 authorization form with client credentials grant type.
 *
 * @returns Validation result
 */
declare function validateOauth2AuthCredentials(element: AuthorizationMethod|null): boolean|null;

export {validateOauth2AuthPassword};


/**
 * Validates OAuth2 authorization form with password grant type.
 *
 * @returns Validation result
 */
declare function validateOauth2AuthPassword(element: AuthorizationMethod|null): boolean|null;

export {validateOauth2AuthCustom};


/**
 * Validates OAuth2 authorization form with custom grant type.
 *
 * @returns Validation result
 */
declare function validateOauth2AuthCustom(element: AuthorizationMethod|null): boolean|null;

export {validateOauth2form};


/**
 * Validates the form controls instead of values. This also shows validation
 * errors.
 * Note, this uses form-associated custom elements API. At this moment (Nov 2019)
 * it is only available in CHrome 77. FF is implementing it and Edge will be
 * Chome soon.
 *
 * @returns True if the form is valid.
 */
declare function validateOauth2form(form: HTMLFormElement|null): boolean|null;

export {validateOauth2Auth};


/**
 * Validates OAuth2 authorization form.
 *
 * @returns Validation result
 */
declare function validateOauth2Auth(element: AuthorizationMethod|null): boolean|null;

export {validateForm};


/**
 * Validates current authorization type
 *
 * @returns Validation result
 */
declare function validateForm(element: AuthorizationMethod|null): boolean|null;
