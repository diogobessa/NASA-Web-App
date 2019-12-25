import React from 'react'

const Logo = props => {
    
    return(
        <div>
            <svg id="svgLogo" width="100%" viewBox="0 0 145 40" {...props}>
                <defs xmlns="http://www.w3.org/2000/svg">
                <clipPath id="prefix__a">
                    <path d="M0 0h145v39H0z" />
                </clipPath>
                </defs>
                <path
                d="M5 39V10a6 6 0 016-6 5.993 5.993 0 015.644 3.988l6.712 24.024A5.993 5.993 0 0029 36a6 6 0 006-6V1"
                stroke="#FFFFFF"
                strokeWidth={8}
                fill="none"
                />
                <path
                d="M40.5 41.5L51.356 7.988A5.992 5.992 0 0157 4a5.992 5.992 0 015.644 3.988L73.5 41.5"
                stroke="#FFFFFF"
                strokeWidth={8}
                clipPath="url(#prefix__a)"
                fill="none"
                />
                <path
                d="M104 5H84.494a7.503 7.503 0 00-7.504 7.502 7.505 7.505 0 007.51 7.502h10A7.5 7.5 0 1194.5 35L74 34.992"
                stroke="#FFFFFF"
                strokeWidth={8}
                strokeMiterlimit={0}
                fill="none"
                />
                <path
                d="M106.625 41.5L117.5 7.988a6.002 6.002 0 0111.308 0L139.683 41.5"
                stroke="#FFFFFF"
                clipPath="url(#prefix__a)"
                strokeWidth={8}
                fill="none"
                />
            </svg>

            <style jsx="true">{`
                
                svg#svgLogo{
                    max-width: 12rem;
                }

            `}</style>
      </div>
    )
}

export default Logo;
