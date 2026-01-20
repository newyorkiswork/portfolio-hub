import { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
    title: "About - PortfolioHub",
    description: "Learn about our mission, team, and values.",
};

export default function AboutPage() {
    return <AboutPageClient />;
}
