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
          text-align: center;
          margin: 0;
        }

        a {
          color: rgb(255, 51, 71);
          text-decoration-style: dotted;
        }
        img {
          margin: auto;
          max-height: 70vh;
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
          background: linear-gradient(20deg, black, #333);
          border-top: 1px solid rgb(255, 51, 71);
          display: flex;
          justify-content: flex-end;
        `}
      >
        <PelotonLogo />
      </div>
    </section>
  </>
);
