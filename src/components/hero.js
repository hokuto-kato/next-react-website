import { css } from '@emotion/react'

export const Hero = ({ title, subtitle, imageOn = false }) => {
  return (
    <div css={text}>
      <h1 css={heading}>{title}</h1>
      <p css={subHeading}>{subtitle}</p>
      {imageOn && <figure>[画像]</figure>}
    </div>
  )
}

const text = css`
	padding-top: calc(var(--display) * 0.5);
	padding-bottom: calc(var(--display) * 0.7);
`
const heading = css`
	font-size: var(--display);
	font-weight: 900;
	letter-spacing: 0.15em;
`
const subHeading = css`
	font-size: var(--small-heading2);
`
