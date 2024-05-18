import React from 'react'

// Tipo para la función highlight
export type HighlightFunction = (chunks: string) => JSX.Element

// Definición de defaultTranslationValues
export interface DefaultTranslationValues {
    globalString: string
    highlight: HighlightFunction
}

// Definición de dateTimeFormat
export interface DateTimeFormat {
    dateStyle: string
    timeStyle: string
    hour12: boolean
}

// Definición de formats
export interface Formats {
    dateTime: {
        medium: DateTimeFormat
    }
}
export type BCP47LanguageTag = string


// Tipo para el manejador de errores onError
export type ErrorHandler = (error: { message: string }) => void

// Tipo para la función getMessageFallback
export interface MessageFallbackParams {
    key?: string
    namespace?: string
}

export type GetMessageFallback = (params: MessageFallbackParams) => string

// Definición del tipo completo del objeto de retorno
export interface ReturnType {
    now?: Date
    timeZone?: string
    messages?: Record<string, any> // Puedes especificar el tipo más detallado si lo conoces
    defaultTranslationValues: DefaultTranslationValues
    formats: Formats
    onError: ErrorHandler
    getMessageFallback: GetMessageFallback
}

// tipos app

export interface MenuItem {
    text: string
    url: string
}
export type MenuList = MenuItem[]
