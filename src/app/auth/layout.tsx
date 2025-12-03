import { AppProvider } from "@/features/core/providers/app-provider";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return <html>
        <body>
            <AppProvider>
                {children}
            </AppProvider>
        </body>
    </html>
}