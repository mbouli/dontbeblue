import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "DONT BE BLUE",
    description: "From Tokkis to MHDHH",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main>
            {children}
        </main>
    )
}