"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

/**
 * ThemeProvider Component
 *
 * This is a wrapper component around the `NextThemesProvider` from `next-themes`.
 * It allows easy integration of the theme system (light/dark mode) into the application.
 * The `ThemeProvider` component passes down the theme context to its child components, enabling theme-based rendering.
 */
export function ThemeProvider({
                                  children,
                                  ...props
                              }: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
