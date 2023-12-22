import { Poppins } from 'next/font/google'
import "./globals.css";
import Navbar from '@/components/Navbar';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "700"]
})

export const metadata = {
    title: "Next.js Prisma CRUD",
    description: "Next.js Prisma CRUD",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={poppins.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
