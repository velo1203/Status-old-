import type { Metadata } from "next";
import "../styles/globals.css";
import { Header } from "@/components/header/header";
import { Noto_Sans_KR } from "next/font/google";
export const metadata: Metadata = {
    title: "Next-boilerplate",
    description: "Created By Devho In KDMHS",
};

const notoSansKR = Noto_Sans_KR({
    weight: ["400", "700"], //문자열로 넣기
    subsets: ["latin"], // 한글인지 영문인지
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={notoSansKR.className}>
                <main>
                    <Header />
                    {children}
                </main>
            </body>
        </html>
    );
}
