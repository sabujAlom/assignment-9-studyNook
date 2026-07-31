import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeNews = () => {
    const marqueeItems = [
        {
            id: 1,
            text: " Book your perfect study room in under a minute."
        },
        {
            id: 2,
            text: " Quiet spaces available for focused learning."
        },
        {
            id: 3,
            text: " Reserve instantly with real-time availability."
        }
    ]

    return (
        <div>
            <Marquee
                className="flex gap-4 p-4 mx-auto bg-linear-to-br from-[#07111F] via-[#0F172A] to-[#111827] text-[#F8FAFC]"
                style={{
                    borderTop: "1px solid rgba(184,142,72,0.2)",
                    borderBottom: "1px solid rgba(184,142,72,0.2)",
                }}
            >
                {marqueeItems.map((item) => (
                    <span
                        key={item.id}
                        className="mx-10 text-[#9CA3AF]"
                    >
                        <span className="text-[#17d3f0] font-semibold">
                            StudyNook:
                        </span>{" "}
                        <span className="text-white font-medium">
                            {item.text}
                        </span>
                        <span className="mx-8 text-[#17d3f0]">•</span>
                    </span>
                ))}

                <span className="mx-10 text-[#9CA3AF]">
                    {" "}
                    <span className="text-white font-medium">
                        Flexible hourly booking with secure payments.
                    </span>
                    <span className="mx-8 text-[#B88E48]">•</span>
                </span>

                <span className="mx-10 text-[#9CA3AF]">
                    {" "}
                    <span className="text-white font-medium">
                        Find the ideal space for studying, meetings, or group discussions.
                    </span>
                </span>
            </Marquee>
        </div>
    )
}

export default MarqueeNews