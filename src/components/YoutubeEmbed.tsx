import React from "react";

const YoutubeEmbed = ({src, width, height, className}:
                          {src: string, width: number, height: number, className?: string}) => {
    return (
            <iframe
                src={src}
                width={width}
                height={height}
                className={className}
                allowFullScreen
            ></iframe>
    );
};

export default YoutubeEmbed;
