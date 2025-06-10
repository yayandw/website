import Head from "next/head";
import Section from "@/app/_components/section";
import Header from "@/app/_components/header";
import About from "@/app/_components/about";
import ItemTextImage from "@/app/_components/item_2";
import ItemText from "@/app/_components/item_1";
import Writing from "@/app/_components/writing";

export default function Home() {
    return (
        <div className="bg-white w-full ps-14 pt-24 pe-14 pb-24">
            <Head>
                <title>Yayan D. Wicaksono | Profile</title>
            </Head>
            <div className="w-3xl mx-auto flex flex-col gap-14">
                {/* Header Section */}
                <Header/>
                {/* About Section */}
                <About/>
                {/* Work Experience Section */}
                <Section title="Work Experience">
                    <ItemTextImage/>
                </Section>
                { /* Writing Section https://medium.com/feed/@yayandwicaksono */}
                <Writing/>
                {/* Education Section */}
                <Section title="Education">
                    <ItemText year="2025 - present" title="Bachelor of Technology" description="Cakrawala University" url="https://www.cakrawala.ac.id/"/>
                    <ItemText year="2005 - 2008" title="Higher Secondary" description="SMK Telkom Malang" url="https://www.smktelkom-mlg.sch.id/"/>
                </Section>
            </div>
        </div>
    );
}
