import Head from "next/head";
import Section from "@/app/_components/section";
import Header from "@/app/_components/header";
import About from "@/app/_components/about";
import ItemTextImage from "@/app/_components/item_2";
import ItemText from "@/app/_components/item_1";
import Writing from "@/app/_components/writing";

const programmer = [
    '/cu.webp',
    '/ds.webp',
    '/oneapp.webp',
    '/cu.webp',
    '/ds.webp',
    '/oneapp.webp',
];

const support = [
    '/linux.png',
    '/python.png',
    '/word.png',
    '/excel.png',
    '/mysql.png',
    '/oracle.png',
];

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
                    <ItemTextImage year="2015 - present" title="Leader"/>
                    <ItemTextImage year="2012 - 2015" title="Programmer" works={programmer} reverseDirection={true}
                                   url="https://play.google.com/store/apps/dev?id=6991340471823577106"/>
                    <ItemTextImage year="2008 - 2012" title="Technical Support" works={support}
                                   reverseDirection={false}/>
                </Section>
                { /* Writing Section https://medium.com/feed/@yayandwicaksono */}
                <Writing/>
                {/* Education Section */}
                <Section title="Education">
                    <ItemText year="2025 - present" thumbnail="/cakrawala_university_logo.jpg"
                              title="Cakrawala University" description="Bachelor's degree, Data Science"
                              url="https://www.cakrawala.ac.id/"/>
                    <ItemText year="2005 - 2008" thumbnail="/smk_telkom_malang.jpg" title="SMK Telkom Malang"
                              description="Higher Secondary" url="https://www.smktelkom-mlg.sch.id/"/>
                </Section>
                <Section title="Contact">
                    <ItemText icon="/linkedin.png" year="LinkedIn" title="yayandw" description=""
                              url="https://www.linkedin.com/in/yayandw/"/>
                    <ItemText icon="/instagram.png" year="Instagram" title="yayandwi" description=""
                              url="https://www.instagram.com/yayandwi"/>
                    <ItemText icon="/facebook.png" year="Facebook" title="Yayan D. Wicaksono" description=""
                              url="https://www.facebook.com/null.exception"/>
                    <ItemText icon="/gmail.png" year="Email" title="ya2n.wicaksono@gmail.com" description=""
                              url="mailto:ya2n.wicaksono@gmail.com"/>
                </Section>
            </div>
        </div>
    );
}
