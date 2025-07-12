import Tag from "@/components/tag/tag";

export default function About() {
    return (
        <div>
            <h2 className="text-lg font-bold mb-2 text-[#111111] dark:text-[#E0E0E0]">About</h2>
            <div className="flex flex-wrap gap-2 mb-4">
                <Tag>#Technology</Tag>
                <Tag>#Application Development</Tag>
                <Tag>#AI</Tag>
                <Tag>#Machine Learning</Tag>
                <Tag>#Automation</Tag>
            </div>
            <p className="text-[#555555] dark:text-[#AAAAAA]">
                Saya adalah seorang Full Stack Developer dengan minat dan keahlian di bidang teknologi,
                pengembangan aplikasi, serta perkembangan kecerdasan buatan (AI). Saya memiliki pengalaman dalam
                merancang dan membangun solusi end-to-end yang scalable, dengan pendekatan logis dan inovatif.
                Selain itu, saya terus aktif mempelajari tren teknologi terbaru, khususnya di bidang AI, machine
                learning, dan automasi, dengan tujuan menciptakan sistem yang tidak hanya efisien namun juga
                berdampak nyata pada bisnis dan masyarakat.
                Ketertarikan saya pada dunia teknologi selalu didorong oleh rasa ingin tahu yang tinggi dan
                komitmen untuk terus berkembang sebagai seorang profesional di industri yang dinamis ini.
            </p>
            <blockquote className="text-[#555555] dark:text-[#AAAAAA] pl-8">
                <br/>
                “Dreams are not those which comes while we are sleeping, but dreams are those when you don&#39;t sleep
                before fulfilling them.” – Abdul Kalam
            </blockquote>
        </div>
    )
}