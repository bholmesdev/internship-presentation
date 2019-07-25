import React from "react";
import { Global, css } from "@emotion/core";
import PelotonLogo from "./PelotonLogo";

export default ({ children }) => (
  <>
    <Global
      styles={css`
        h1,
        h2,
        h3 {
          letter-spacing: 0.1em;
          text-align: center;
          text-transform: uppercase;
        }
        p {
          color: #ddd;
          margin: 0;
          text-align: left;
          margin-bottom: 30px;
        }

        small {
          font-size: 0.6em;
        }

        a {
          color: rgb(255, 51, 71);
          text-decoration-style: dotted;
        }
        img {
          margin: auto;
          margin-top: 30px;
          max-height: 70vh;
          max-width: 50vw;
        }
        mark {
          background: rgb(255, 51, 71);
          color: white;
        }
        li {
          margin-left: 20px;
          line-height: 1.5em;
          text-align: left;
        }
      `}
    />
    <section
      css={css`
        display: flex;
        padding: 20px 60px;
        padding-bottom: 60px;
        flex-direction: column;
        justify-content: center;
      `}
    >
      {children}
      <div
        css={css`
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 10px 20px;
          /* background: linear-gradient(45deg, black, #222); */
          /* border-top: 1px solid rgb(255, 51, 71); */
          display: flex;
          justify-content: flex-end;
        `}
      >
        <PelotonLogo />
      </div>
    </section>
  </>
);

export const Center = ({ children }) => (
  <div
    css={css`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    `}
  >
    {children}
  </div>
);

export const ButtonLink = ({ children, href }) => (
  <Center>
    <a
      css={css`
        background-color: white;
        border-radius: 5px;
        padding: 17px 35px;
        color: #222;
        transition: background-color 0.2s, color 0.2s;
        text-decoration: none;
        font-family: "brandon-grotesque";
        font-weight: bold;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-top: 50px;
        &:hover {
          background-color: rgb(255, 51, 71);
          color: white;
        }
      `}
      href={href}
    >
      {children}
    </a>
  </Center>
);
