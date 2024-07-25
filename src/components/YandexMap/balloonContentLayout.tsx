import { css } from "@emotion/css";
import { Theme } from "@mui/material";

const title = css`
  max-width: 520px;
  min-width: 275px;
  margin: 0px 0px 16px;
  font-size: 1.5rem;
  font-family: Inter, Arial;
  font-weight: 400;
  line-height: 1.235;
  margin-bottom: 24px;
`;
const gridContenet = css`
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap;
  width: 100%;
  margin-top: -16px;
`;

const gridItem1 = css`
  padding-top: 16px;
  flex-basis: 8.33333%;
  -webkit-box-flex: 0;
  flex-grow: 0;
  max-width: 8.33333%;
`;
const gridItem2 = css`
  padding-top: 16px;
  flex-basis: 91.6667%;
  -webkit-box-flex: 0;
  flex-grow: 0;
  max-width: 91.6667%;
`;
const gridItemLast = css`
  width: 100%;
  padding-top: 16px;
  text-align: right;
`;

const body = (theme: Theme) => css`
  margin: 0px;
  line-height: 1.5;
  font-size: 1rem;
  font-weight: 400;
  color: ${theme.palette.text.primary};
  font-family: Inter, Arial;
`;
const body2 = (theme: Theme) => css`
  margin: 0px;
  font-weight: 400;
  line-height: 1.57143;
  font-size: 0.875rem;
  color: ${theme.palette.text.secondary};
  font-family: Inter, Arial;
`;
const icon = (theme: Theme) => css`
  color: ${theme.palette.primary.light};
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentcolor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.5rem;
`;

const butAppointment = (theme: Theme) => css`
  text-decoration: none;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  line-height: 1.71429;
  font-size: 0.8125rem;
  font-family: Inter, Arial;
  min-width: 64px;
  padding: 4px 5px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: ${theme.palette.primary.main};
  text-transform: inherit;
  border-radius: 5px;
  font-style: normal;
  font-weight: 500;
  box-shadow: none;
  border: 0px;
`;

const balloonContentLayout = (d: Record<string, unknown>, theme: Theme) => `
  <div><h2 class=${title}>${d.name}</h2></div>
  <div class=${gridContenet}>


<div class=${gridItem1}><svg class=${icon(
  theme
)} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"></path></svg> </div>
<div class=${gridItem2}><span class=${body(theme)}>${
  d.address || ""
}</span><br/><span class=${body2(theme)}>${
  d.nearbyTransportHubs || ""
}</span></div>

${
  d.workTime
    ? `<div class=${gridItem1}><svg class=${icon(
        theme
      )} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WatchLaterIcon"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z"></path></svg></div>
<div class=${gridItem2}><span class=${body(theme)}>${d.workTime}</span></div>
`
    : ""
}
${
  d.phone
    ? `<div class=${gridItem1}><svg class=${icon(
        theme
      )} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PhoneIcon"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z"></path></svg></div>
<div class=${gridItem2}><span class=${body(theme)}>${d.phone}</span></div>`
    : ""
}

${
  d.description
    ? `<div class=${gridItem1}><svg class=${icon(
        theme
      )} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InfoIcon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"></path></svg></div>
<div class=${gridItem2}><span class=${body2(theme)}>${
        d.description
      }</span></div>`
    : ""
}






</div>
  `;

export default balloonContentLayout;
