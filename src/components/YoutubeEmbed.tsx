import React from "react";

const YoutubeEmbed = ({ src, width = 720, height = 405, className}) => {
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
