/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

/** Devuelve el tipo del valor esperado en una promesa */
export type PromisedValueOf<T> = T extends PromiseLike<infer U> ? U : T;

/** Devuelve el tipo de la respuesta de un método asíncrono */
export type ResponseOf<F extends (...args: any) => any> = PromisedValueOf<ReturnType<F>>;

/** Devuelve los parámetros de un método */
export type ParamsOf<F extends (...args: any) => any> = Parameters<F>;
